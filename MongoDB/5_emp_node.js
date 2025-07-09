// app.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("employeeDB");
    const users = db.collection("users");

    const insertResult = await users.insertOne({
      name: "Nina",
      role: "Admin",
      createdAt: new Date(),
    });
    console.log("Inserted document with _id:", insertResult.insertedId);

    const allUsers = await users.find().toArray();
    console.log("All users:");
    console.table(allUsers);

  } catch (err) {
    console.error("Error during MongoDB operations:", err);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

run();
