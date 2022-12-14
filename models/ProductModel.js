const mongoose = require("mongoose");
const Joi = require("joi");
const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    price: Number,
    quantity: Number,
    isWeighable: Boolean,
    category: String,
    comment:String
});
const ProductModel = mongoose.model("products", productSchema);

exports.ProductModel = ProductModel;

exports.validProduct = (_bodytData) => {
    let joiSchema = Joi.object({
        barcode: Joi.number().min(0).max(1000000).required(),
        name: Joi.string().min(1).max(50).required(),
        image: Joi.string().min(1).max(300).required(),
        price: Joi.number().min(0).max(10000).required(),
        quantity: Joi.number().min(0).max(10000).required(),
        isWeighable: Joi.boolean().required(),
        category: Joi.string().min(2).max(50).required(),
        comment: Joi.string().min(2).max(100)
    });
    return joiSchema.validate(_bodytData);
}