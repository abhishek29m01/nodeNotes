const dbConnect = require("./mongodb");

// step-1: requiring the feature of dbConnect() into db variable

async function main() {
  let db = await dbsConnect();

  //step 2:-create data to store
  let data = {
    name: "Jyoti Pillai",
    sub: "Advance Compuer Network",
    dept: "Computer Application",
  };

  const result=await db.insertOne(data);
  console.log(result);
}
main();