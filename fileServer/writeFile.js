var fs=require('fs');
fs.writeFile('content1.txt',"Hello content kaise ho",(err)=>{
    if(err) throw err;
    console.log("Saved")
})