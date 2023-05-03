const express=require("express");
// const {prods_ar}=require("../data/shop_data");
const router=express.Router();


router.get("/", async (req, res) => {
    let data = await ProductModel.find({});
    console.log(data);
    res.json(data);
});


// router.get("/",(req,res)=>{
//     res.json(prods_ar);
// });

router.get("/category",(req,res)=>{
    let categoryQ=req.query.category;
    let temp_ar=prods_ar.filter(item=>item.cat===categoryQ);
    res.json(temp_ar);
});

module.exports=router;