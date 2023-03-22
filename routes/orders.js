const express = require("express");
const { OrderModel } = require("../models/OrderModel");
const router = express.Router();
console.log('orders')

router.get("/", async (req, res) => {
    let data = await OrderModel.find({});
    console.log(data);
    res.json(data);
});

router.post("/", async (req, res) => {
  
    let order = new OrderModel(req.body);
    order.id=(await OrderModel.find({})).length;
    const currTime=new Date();
    const currMonth=currTime.getMonth()+1;
    const minutes=currTime.getMinutes()>9?currTime.getMinutes():"0"+currTime.getMinutes();
    order.time=currTime.getDate()+"/"+currMonth+"/"+currTime.getFullYear()+"    "+currTime.getHours()+":"+minutes;
    await order.save();
    res.json(order);
});

router.put("/:idEdit", async (req, res) => {
    // let validBody = validOrder(req.body);
    // if (validBody.error) {
    //     return res.status(400).json(validBody.error.details);
    // }
    try {
        let data = await OrderModel.updateOne({ _id: req.params.idEdit }, req.body);
        res.json(data);
        console.log(data)
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    };
});

module.exports = router;