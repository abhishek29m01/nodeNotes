const express=require('express');
const path=require('path');

const app=express();
let publicPath=path.join(__dirname,'public');

//Middle ware to serve static folder
app.use(express.static(publicPath))

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to the ExpressJS</h1>");
})
console.log("Static folder path",publicPath)
app.post('/post',(req,res)=>{
    res.send("<h1>Welcome back</h1>")
})
app.listen(4000,()=>{
    console.log(`http://localhost:4000`)
})