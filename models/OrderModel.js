const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    id: Number,
    name: String,
    totalPrice: Number,
    productsQuantity: Number,
    products: Array
});
const OrderModel = mongoose.model("orders", orderSchema);

exports.OrderModel = OrderModel;