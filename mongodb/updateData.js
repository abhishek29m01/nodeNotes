const dbConnect = require("./databaseConfig");

const updateData = async () => {
  let db = await dbConnect();

  let result = await db.collection("product").updateOne(
    {
      name: "bluetooth",
    },
    {
      $set: {
        price: 2500,id:2
      },
    }
  );

  console.log(result);

  // code to print collection name of given database
  //   let collections=await db.listCollections().toArray();
  //   collections.forEach((collection)=>{
  //         console.log(collection)
  //   })

  //   let product=db.collection('product');
  //   let result=await product.insertOne({
  //     id:1,name:'bluetooth',price:1200
  //   })

  //   let proData= await product.find().toArray();
  //   console.log(proData)

  // //   db.collection("product").drop();

  //   console.log(result);
};

updateData();
