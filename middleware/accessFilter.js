const path=require('path')

const public_path=path.join(__dirname,'public')
console.log(public_path)
const accessFilter=(req,res,next)=>{
 const {age}=req.query;
 if(!age){
    res.send("Please provide your age");
 }else if(age<18){
    res.sendFile(`${public_path}/denied.html`);
 }else{
    // res.sendFile(`${public_path}/admin.html`);
    next();
 }
}

module.exports =accessFilter;