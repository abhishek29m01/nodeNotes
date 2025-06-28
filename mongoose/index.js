const express = require("express");
// 1. database connect= connfigMongoose
// 2. create schema= productModel.js
require("./configMongoose");
const Products = require("./productModel");
const productModel = require("./productModel");
const port = 3000;
const app = express();
//used to parse the req.body
app.use(express.json());

//post request to insert data into database
app.post("/insertData", async (req, res) => {
  let data = new Products(req.body);
  let result = await data.save();
  console.log(result);
  res.json(result);
});

//get api to find the data of database

app.get("/getProducts", async (req, res) => {
  let data = await Products.find();
  res.send(data);
  console.log(data);
});

//put request to update data

app.put("/update/:id", async (req, res) => {
  // parameter: anything that is sent along with the url
  // console.log('parameter recieved is:',req.params);
  // res.json(req.params)
  // let id=req.params;
  // console.log('id:',id)
  let data = await Products.updateOne(
    { _id: req.params.id },
    {
      $set: {
        brand: "vivo",
        name: "vivo v2",
      },
    }
  );

  res.json(data);
});

// delete request to delete products
app.delete("/delete/:id", async (req, res) => {
  let result = await Products.deleteOne({ _id: req.params.id });
  console.log(req.params.id);
  res.json({ message: "Product removed successfully", result: result });
  // res.json('data deleted succesfully')
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
