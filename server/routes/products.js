const express = require("express");
const { ProductModel, validProduct } = require("../models/ProductModel");
const router = express.Router();

router.get("/", async (req, res) => {
    console.log(req.query.category)
    
    ///////
    const filter = { isActive: true }
    const filterCategory = req.query.category;
    if (filterCategory) filter.category = filterCategory
    console.log(filterCategory)
    const searchQuery = req.query.search;
    console.log(searchQuery)
    if (searchQuery){
        console.log("sdaghskjg")
        const regExp=new RegExp(searchQuery);
        console.log(regExp)
        filter.name=regExp;
    }
    console.log('hiiiiiii')
    ///////
    let data = await ProductModel.find(filter);
    console.log(data);
    res.json(data);
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