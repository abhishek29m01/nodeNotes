const express=require('express');
const path=require('path')
const accessFilter=require('./accessFilter');
const app=express();
const port=4000;
const public_path=path.join(__dirname,'public')
app.get('/admin',accessFilter,(req,res)=>{
    res.sendFile(`${public_path}/admin.html`)
})

app.get('/about',accessFilter,(req,res)=>{
    res.sendFile(`${public_path}/about.html`)
})

app.listen(port,()=>{
    console.log(`running on:http:localhost:${port}`);
})