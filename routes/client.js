const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    console.log('kljkhjj')
    res.sendFile('C:/Users/noare/OneDrive/שולחן העבודה/mosh/monkies/client/build/index.html');
    console.log('hiii')
});

module.exports=router;