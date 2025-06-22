const {MongoClient}=require('mongodb');


dbsConnect=async()=>{
    const connection=await new MongoClient('mongodb://localhost:27017').connect();
    let db= connection.db('bit-durg');
    return db.collection('employees')
}

module.exports=dbsConnect;
