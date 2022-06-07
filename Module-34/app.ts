// let msg:string;
// msg="Hi My name is Jitendra Kumar";
// console.log(msg);


// const text="This is a test - and it should be stored in a file!";
// const encoder=new TextEncoder();
// const data =encoder.encode(text);

// Deno.writeFile('message.txt',data).then(()=>{
//     console.log('Wrote to File!');
// });

import { serve } from "https://deno.land/std@0.133.0/http/server.ts";
const server=serve({port:3000});

