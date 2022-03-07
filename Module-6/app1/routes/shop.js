const path=require("path")
const express=require("express");
const rootDir=require('../util/path');
const adminData=require('./admin');
const router=express.Router();

//get directly target the path like '/' otherwise get the error
router.get('/',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,'../',"views","shop.html"));//send the resonse to the server
    console.log('shop.js',adminData.products);
    res.sendFile(path.join(rootDir,"views","shop.html"));//send the resonse to the server
});

module.exports=router;