const path=require("path")
const express=require("express");
const rootDir=require('../util/path');
const adminData=require('./admin');
const router=express.Router();

//get directly target the path like '/' otherwise get the error
router.get('/',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,'../',"views","shop.html"));//send the resonse to the server
    const products=adminData.products;
    res.render('shop',{prods:products,pageTitle:'Shop',path:'/'});
});

module.exports=router;


