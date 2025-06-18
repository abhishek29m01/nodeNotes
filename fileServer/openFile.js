var fs=require('fs')

fs.open('file1.txt','w',(error,file)=>{
    if(error) throw error;
    console.log("Filed opened")
})