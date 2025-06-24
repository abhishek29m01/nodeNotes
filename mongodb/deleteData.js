const { ObjectId } = require("mongodb");
const dbConnect = require("./databaseConfig");

const deleteData = async () => {
  const shop = await dbConnect();

  let data = await shop
    .collection("sales")
    .findOne({ id:7});
     if(!data){
        console.log("Data not found");
        return ;
     }

     let result=await shop.collection('sales').deleteOne({
        id:7
     })
     console.log(result)
//   console.log(data);
};

deleteData();
