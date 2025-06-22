const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "myshop";
const client = new MongoClient(url);

async function getData() {
  //connect to the Mongodb server
  let connection = await client.connect();
  console.log("connected to mongodb");
  let db = connection.db(database); //use myshop
  let collection = db.collection("products"); //db.collection
  // fetch all data
  let response = await collection
    .find({ name: "Smartphone Model X" }, { projection: { _id: 0} })
    .limit(10)
    .toArray();
  console.log(response);
  console.log("model name:",response[0].name)
}

getData();
