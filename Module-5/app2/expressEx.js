//install nodemon by using :- npm install nodemon --save-dev
//const http=require("http");
const express=require("express");
const bodyParser = require("body-parser");

const expressEx=express();

//by default request can not be parsed
expressEx.use(bodyParser.urlencoded({extended:true}));

expressEx.use('/add-product',(req,res,next)=>{ //use() allows to add middleware services
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

expressEx.use('/product',(req,res,next)=>{
    console.log(req.body); //get undefined value
    res.redirect('/'); //redirect the target path
});

expressEx.use('/',(req,res,next)=>{
    res.send('<h1>Hello from ExpressJS!</h1>');//send the resonse to the server
});


//Output:-(2nd middleware is not execute because the path set to /add-product anly 1st and 2nd will execute.)
// Its always runs
// Its a another middleware
// Its always runs
// Its a another middleware

// const server=http.createServer(expressEx);
// server.listen(2000);

expressEx.listen(2000);

