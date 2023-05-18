const express = require("express");
const { ProductModel, validProduct } = require("../models/ProductModel");
const router = express.Router();

router.get("/", async (req, res) => {
    const filter = { isActive: true }
    const filterCategory = req.query.category;
    if (filterCategory) filter.category = filterCategory
    const searchQuery = req.query.search;
    if (searchQuery) {
        const regExp = new RegExp(searchQuery);
        filter.name = regExp;
    }
    let data = await ProductModel.find(filter).lean();
    console.log(data)
    const products = data.map((product) => {
        return { ...product, quantity: 0, discount: { sum: 0, sale: "" } }
    })
    console.log(products)
    res.json(products);
});

router.post("/", async (req, res) => {
    let validBody = validProduct(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    let product = new ProductModel(req.body);
    product.key = "barcode";
    product.quantity = 0;
    product.comment = "";
    product.discount.sale = "";
    product.discount.sum = 0;
    await product.save();
    res.json(product);
});

router.delete("/:idDel", async (req, res) => {
    try {
        let data = await ProductModel.deleteOne({ _id: req.params.idDel });
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    };
});

router.put("/:idEdit", async (req, res) => {
    let validBody = validProduct(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    try {
        let data = await ProductModel.updateOne({ _id: req.params.idEdit }, req.body);
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    };
});

module.exports = router;