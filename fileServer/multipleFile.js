const fs=require('fs')
const path=require('path');

console.log(__dirname); //current directory
const directory=path.join(__dirname,'files');
console.log("directory is:",directory)

var count=0;
for (let i=0;i<5;i++){
    const filePath=path.join(directory,`file${i+1}.txt`);
    fs.writeFileSync(filePath,`content of file${i+1}`);
    count++;
}
console.log(`${count} files are created successfully...`);
console.log('getting files');

fs.readdir(directory,(error,files)=>{
    files.forEach((item)=>{
        console.log(item);
    })
})
