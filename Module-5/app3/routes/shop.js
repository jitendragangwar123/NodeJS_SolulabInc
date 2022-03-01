const express=require("express");
const router=express.Router();

//get directly target the path like '/' otherwise get the error
router.get('/',(req,res,next)=>{
    res.send('<h1>Hello from ExpressJS!</h1>');//send the resonse to the server
});

module.exports=router;