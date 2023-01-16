const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    id: Number,
    time: Date,
    requstedTime:Date,
    name: String,
    address:String,
    phoneNumber: String,
    totalPrice: Number,
    productsQuantity: Number,
    clientComments:String,
    staffComments:String,
    products: Array,
    status:String
});
const OrderModel = mongoose.model("orders", orderSchema);

exports.OrderModel = OrderModel;