const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel, validUser, validLogin, genToken } = require("../models/UserModel");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ msg: "users" });
});


router.post("/", async (req, res) => {
    let validBody = validUser(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    try {
        let user = new UserModel(req.body);
        user.pass = await bcrypt.hash(user.pass, 10);
        await user.save();
        user.pass = "*******";
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ err: "האימייל כבר קיים במערכת" });
    }
});

router.post("/login", async (req, res) => {
    let validBody = validLogin(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    let user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
        return res.status(401).json({ msg: "user not found" })
    };
    let isValid=await bcrypt.compare(req.body.pass,user.pass);
    if(!isValid){
        return res.status(401).json({msg:"wrong password"});
    };
    console.log(isValid)
    let newToken=genToken(user.id);
    console.log(newToken)
    res.json({token:newToken});
});
module.exports = router;