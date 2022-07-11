const mongoose = require("mongoose");
const Joi = require("joi");
const jwt=require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    pass: String,
    role: {
        type: String, default: "regular"
    },
    date_created: {
        type: Date, default: Date.now()
    },
});

exports.UserModel = mongoose.model("users", userSchema);

exports.genToken=(userId)=>{
    console.log("hiiii")
    let token=jwt.sign({id:userId},"secret_word",{expiresIn:"1day"});
    console.log(token)
    console.log("byyy")
    return token;
}

exports.validUser = (_bodytData) => {
    let joiSchema = Joi.object({
        name: Joi.string().min(1).max(50).required(),
        email: Joi.string().min(1).max(300).required().email(),
        pass: Joi.string().min(2).max(50).required()
    });
    return joiSchema.validate(_bodytData);
}

exports.validLogin = (_bodytData) => {
    let joiSchema = Joi.object({
        email: Joi.string().min(1).max(300).required().email(),
        pass: Joi.string().min(2).max(50).required()
    });
    return joiSchema.validate(_bodytData);
}