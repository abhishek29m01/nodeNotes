const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017'
const database='shop'


const dbConnect=async()=>{
    const client=await new MongoClient(url).connect();
    return client.db(database);
}

module.exports=dbConnect;