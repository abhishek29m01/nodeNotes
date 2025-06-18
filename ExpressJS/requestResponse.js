const express=require('express');
const port=3000;
const app=express();

// post request 
app.post('/',(req,res)=>{
    console.log("This is a post request");
    res.send("Hii Yamini, this is post request");
})

app.get('/get',(req,res)=>{
    console.log('this is get request')
    res.send("Hi! Yamini,")
})

app.delete('/delete',(req,res)=>{
    console.log("Delete Requrest");
    res.send("This is delete request")
})

app.put('/updateRequest',(req,res)=>{
    console.log("put request is sent");
    res.send('put request is sent')
})
app.listen(port,()=>{
    console.log(`server is running on:http://localhost:${port}`)
})