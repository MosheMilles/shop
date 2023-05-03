const mongoose = require("mongoose");
const Joi = require("joi");
const saleSchema = new mongoose.Schema({
    id: Number,
    title: String,
    status:String,
    products: Array,
    quantity: Number,
    specialPrice: Number,
    minPurchase: Number,
    exception: Array
});
const SaleModel = mongoose.model("sales", saleSchema);

exports.SaleModel = SaleModel;

// exports.validProduct = (_bodytData) => {
//     let joiSchema = Joi.object({
//         barcode: Joi.number().min(0).max(1000000).required(),
//         name: Joi.string().min(1).max(50).required(),
//         image: Joi.string().min(1).max(300).required(),
//         price: Joi.number().min(0).max(10000).required(),
//         quantity: Joi.number().min(0).max(10000).required(),
//         isWeighable: Joi.boolean().required(),
//         category: Joi.string().min(2).max(50).required(),
//         comment: Joi.string().min(2).max(100)
//     });
//     return joiSchema.validate(_bodytData);
// }