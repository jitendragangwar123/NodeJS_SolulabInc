// let msg:string;
// msg="Hi My name is Jitendra Kumar";
// console.log(msg);


// const text="This is a test - and it should be stored in a file!";
// const encoder=new TextEncoder();
// const data =encoder.encode(text);

// Deno.writeFile('message.txt',data).then(()=>{
//     console.log('Wrote to File!');
// });

 const fs=require('fs').promises;
 
 const text='This is a test - and it should be stored in a file!';
 fs.writeFile('node-message.txt',text).then(()=>{
     console.log('Wrote file!');
 });
 
