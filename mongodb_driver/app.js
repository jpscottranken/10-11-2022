//  https://github.com/mongodb/node-mongodb-native
const { MongoClient } = require("mongodb")

//  Set connection URL
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

//  Set up database
const dbName = "booksdb"

async function main() {
  //  Use connect method to connect to server
  await client.connect()
  console.log("Connected successfully to server")
  const db = client.db(dbName)
  const collection = db.collection("books")

  //	CREATE
  
  //	NOTE: Only run lines 20 - 44 below once.
  //		  Then comment them out as you continue.
/*  const insertResult = await collection.insertMany([
    {
      name: "A Christmas Carol",
      author: "Charles Dickens",
      pages: 300,
      review: "A Christmas classic!",
    },
    {
      name: "Tom Sawyer",
      author: "Mark Twain",
      pages: 400,
      review: "a.k.a. Samuel Clemens",
    },
    {
      name: "Moby Dick",
      author: "Herman Mellville",
      pages: 333,
      review: "Underwater adventure",
    },
  ])

  //  Verify result
  console.log("Inserted documents: ", insertResult)


  //	READ
  
  //	NOTE: Only run lines 50 - 51 below once.
  //		  Then comment them out as you continue.
  const findResult = await collection.find({}).toArray()
  console.log("Found documents: ", findResult)
*/


/*  //	UPDATE
  
  //	NOTE: Only run lines 57 - 61 below once.
  //		  Then comment them out as you continue.
  const updateResult = await collection.updateOne(
    { name: "Tom Sawyer" },
    { $set: { pages: 999 } }
  )
  console.log("Updated Document: ", updateResult)
*/
 //	DELETE
  
  //	NOTE: Only run lines 67 = 68 below once.
  //		  Then comment them out as you continue.
  const deleteResult = await collection.deleteMany({ name: "Moby Dick" })
  console.log("Deleted documents: ", deleteResult)

  return "done."
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())
