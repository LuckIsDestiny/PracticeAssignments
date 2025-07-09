const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')

async function run() {
  await client.connect()
  const db = client.db('taskdb')
  const tasks = db.collection('tasks')
  await tasks.insertMany([
    { description: 'Submit report', completed: false },
    { description: 'Attend meeting', completed: true }
  ])
  const all = await tasks.find().toArray()
  console.log(all)
  await client.close()
}

run()