const dbConnect = require("./databaseConfig");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

const insertData = async () => {
  const db = await dbConnect();
  const id = await askQuestion("id: ");
  const name = await askQuestion("name: ");
  const price = await askQuestion("price: ");
  const brand = await askQuestion("brand: ");

  const data = {
    id: parseInt(id),
    name,
    price: parseFloat(price),
    brand,
  };

  const result = await db.collection("products").insertOne(data);
  console.log("✅ Inserted:", result.insertedId);
};

const findData = async () => {
  const db = await dbConnect();
  const data = await db.collection("products").find().toArray();
  console.log("📦 Products:", data);
};

const updateData = async () => {
  const db = await dbConnect();
  const productid = await askQuestion("Enter id: ");
  const price = await askQuestion("Enter new price: ");

  const result = await db.collection("products").updateOne(
    { id: parseInt(productid) },
    { $set: { price: parseFloat(price) } }
  );

  console.log("✏️ Updated:", result.modifiedCount);
};

const deleteData = async () => {
  const db = await dbConnect();
  const productid = await askQuestion("Enter id: ");
  const result = await db.collection("products").deleteOne({
    id: parseInt(productid),
  });

  console.log("🗑️ Deleted:", result.deletedCount);
};

const main = async () => {
  while (true) {
    console.log("\n📋 Menu:");
    console.log("1. Insert Data");
    console.log("2. Find Data");
    console.log("3. Update Data");
    console.log("4. Delete Data");
    console.log("0. Exit");

    const choice = await askQuestion("Enter your choice: ");

    switch (choice) {
      case "1":
        await insertData();
        break;
      case "2":
        await findData();
        break;
      case "3":
        await updateData();
        break;
      case "4":
        await deleteData();
        break;
      case "0":
        console.log("👋 Exiting...");
        rl.close();
        return;
      default:
        console.log("❌ Invalid choice. Try again.");
    }
  }
};

main();
