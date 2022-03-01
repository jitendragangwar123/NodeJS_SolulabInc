//install nodemon by using :- npm install nodemon --save-dev
//const http=require("http");
const express=require("express");
const expressEx=express();

//This approach allow us to route our request in different middleware
//1st middleware
expressEx.use('/',(req,res,next)=>{ //use() allows to add middleware services
    console.log("Its always runs");
    next(); //Allows the request to continue to the next middleware in line
});

//2nd middleware 
expressEx.use('/add-product',(req,res,next)=>{ //use() allows to add middleware services
    console.log("Its a middleware");
    res.send('<h1>The "Add Product" Page</h1>');
});

//3rd middleware
expressEx.use('/',(req,res,next)=>{
    console.log("Its a another middleware");
    res.send('<h1>Hello from ExpressJS!</h1>');//send the resonse to the server
});


//Output:-(2nd middleware is not execute because the path set to /add-product anly 1st and 2nd middleware will call)
// Its always runs
// Its a another middleware
// Its always runs
// Its a another middleware

// const server=http.createServer(expressEx);
// server.listen(2000);

expressEx.listen(2000);

