const mongoose = require("mongoose");
const Joi = require("joi");
const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    price: Number,
    quantity: Number,
    total:Number,
    isWeighable: Boolean,
    category: String,
    comment:String,
    sale:Number
});
const ProductModel = mongoose.model("products", productSchema);

//////
// const YourModel = require('path/to/your/model');

ProductModel.updateMany({}, { $set: { discount: 0 } })
  .then(() => {
    console.log('New key added to all documents');
  })
  .catch((error) => {
    console.log(error);
  });
//////

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