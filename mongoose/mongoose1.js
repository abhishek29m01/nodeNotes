const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  contact: Number,
  gmail: String,
});

const userModel = mongoose.model("user", userSchema);
// can access through-> userModel

// connect mongoose
mongoose.connect("mongodb://localhost:27017/Amazon");


const insertData = async () => {
  let data=new userModel({
    username:'abhishek',
    contact:'123',
    gmail:'abhi@2001j'
 })
const result=await data.save();
console.log(result);
};

insertData();

