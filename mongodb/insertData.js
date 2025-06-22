const dbConnect = require("./databaseConfig");
const express = require("express");
const app = express();

app.use(express.json());

app.post("/insertData", async (req, res) => {
  let db = await dbConnect();
  let collections = db.collection("sales");

  let data = {
    id: 11,
    price: 500,
    quantity: 7,
    targetPrice: 5000,
  };

  let response = await collections.insertOne(data);
  console.log(response);
  res.json(data);
});

app.listen(4000, () => {
  console.log("server is listening...");
});
