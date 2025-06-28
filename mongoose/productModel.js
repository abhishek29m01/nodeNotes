const mongoose=require('mongoose');
const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String,
})

const productModel=mongoose.model('products',productSchema);
module.exports=productModel;


// this is for model validation only 
// to write api like insert, delete we do crud operation on another file i.e index.js 