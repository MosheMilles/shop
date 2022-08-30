const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    let data = await OrderModel.find({});
    console.log(data);
    res.json(data);
});

router.post("/", async (req, res) => {
   
    let order = new OrderModel(req.body);
    await order.save();
    res.json(order);
});

router.delete("/:idDel", async (req, res) => {
    try {
        let data = await OrderModel.deleteOne({ _id: req.params.idDel });
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    };
});

// router.put("/:idEdit", async (req, res) => {
//     let validBody = validProduct(req.body);
//     if (validBody.error) {
//         return res.status(400).json(validBody.error.details);
//     }
//     try {
//         let data = await ProductModel.updateOne({ _id: req.params.idEdit }, req.body);
//         res.json(data);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(400).send(err);
//     };
// });

module.exports = router;