const path=require("path")
const express=require("express");
const rootDir=require('../util/path');
const router=express.Router();

//get directly target the path like '/' otherwise get the error
router.get('/',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,'../',"views","shop.html"));//send the resonse to the server
    res.sendFile(path.join(rootDir,"views","shop.html"));//send the resonse to the server
});

module.exports=router;