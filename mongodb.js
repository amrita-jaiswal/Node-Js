//Connection from node to local Database mongodb

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "ecom";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  db = result.db(database);
  return db.collection("products");
}

module.exports = dbConnect;
