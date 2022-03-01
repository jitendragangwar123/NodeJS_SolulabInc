const express=require("express");
const router=express.Router();

router.get('/add-product',(req,res,next)=>{ //use() allows to add middleware services
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    );
});


// expressEx.use('/product',(req,res,next)=>{
//     console.log(req.body); //get undefined value
//     res.redirect('/'); //redirect the target path
// });

//instead of use() method we can use post() or get() method 
router.post('/product',(req,res,next)=>{
    console.log(req.body); //get undefined value
    res.redirect('/'); //redirect the target path
});

module.exports=router;