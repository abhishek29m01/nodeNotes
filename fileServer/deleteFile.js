const fs=require('fs');
fs.unlink('file1.txt',(error)=>{
  if(error) throw error;
  console.log('file is deleted');
})