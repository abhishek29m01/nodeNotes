const fs=require('fs');

fs.appendFile("file1.txt","add this new content",function(error){
    if(error) throw error;
    console.log('saved');
})