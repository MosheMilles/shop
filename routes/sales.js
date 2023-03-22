const express = require("express");
const { SaleModel } = require("../models/SaleModel");
const router = express.Router();
console.log('sales')

router.get("/", async (req, res) => {
    let data = await SaleModel.find({});
    console.log(data);
    res.json(data);
});

router.post("/", async (req, res) => {
  
    let sale = new SaleModel(req.body);
    sale.id=(await SaleModel.find({})).length;
    await sale.save();
    res.json(sale);
});

router.put("/:idEdit", async (req, res) => {
    // let validBody = validOrder(req.body);
    // if (validBody.error) {
    //     return res.status(400).json(validBody.error.details);
    // }
    try {
        let data = await SaleModel.updateOne({ _id: req.params.idEdit }, req.body);
        res.json(data);
        console.log(data)
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    };
});

module.exports = router;