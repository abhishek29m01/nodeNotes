const { MongoClient } = require("mongodb");

// Ingredient={pani,chaipatti,shakkar,dudh,adrak,elaechi}

// database setup={url,database,collection}

const url = "mongodb://localhost:27017";
const database = "bit-durg";
const client = new MongoClient(url);

const dbConnect = async () => {
  let connection =await client.connect();
  let db =await connection.db(database);
  let result= await db.collection("employee").insertMany([
    {
      name: "Sanjay Sharma",
      designation: "HOD",
      salary: 150000,
    },
    {
      name: "Vinita Gupta",
      sub: "BDA",
      salary: 500000,
    },
  ]);

  console.log(result)
};

dbConnect();
