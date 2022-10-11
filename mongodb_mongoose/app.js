const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/booksDB")

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title Is Required"],
  },
  pages: {
    type: Number,
    required: [true, "Number Of Pages Is Required"],
    min: 10,
    max: 1000,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  review: String,
})

const Book = mongoose.model("Book", bookSchema)

const wap = new Book({
  title: "War and Peace",
  pages: 678,
  rating: 4,
  review: "A real page turner",
})

const acc = new Book({
  title: "A Christmas Carol",
  pages: 400,
  rating: 5,
  review: "A Christmas classic.",
})

const md = new Book({
  title: "Moby Dick",
  pages: 300,
  rating: 3.5,
  review: "Underwater adventure",
})

const ts = new Book({
  title: "Tom Sawyer",
  pages: 366,
  rating: 5,
  review: "Mark Twain is really Samuel Clemens",
})

Book.insertMany([wap, acc, md, ts], (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Documents saved to books collection")
  }
})

const authorSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
})

const Author = mongoose.model("Author", authorSchema)

const tolstoy = new Author({
  firstname: "Leonoid",
  lastname: "Tolstoy",
  age: 66,
})

const dickens = new Author({
  firstname: "Charles",
  lastname: "Dickens",
  age: 40,
})

const mellville = new Author({
  firstname: "LeonHermanoid",
  lastname: "Melville",
  age: 50,
})

const twain = new Author({
  firstname: "Mark",
  lastname: "Twain",
  age: 47,
})

//  authors.save()

//  CREATE
Author.insertMany([tolstoy, dickens, mellville, twain], (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Documents saved to authors collection")
  }
})

//  READ
Book.find((err, book) => {
  if (err) {
    console.log(err)
  } else {
    books.forEach((book) => {
      console.log(book.title)
    })
  }
})

/*
    Go to the mongoshell mongosh
    show dbs (booksDb should be there)
    use booksDB
    show collections
    db.books.find()
*/

//  UPDATE
Book.updateOne({ title: "War and Peace" }, { pages: 700 }, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Record successfully updated")
  }
})

//  DELETE
Book.deleteOne({ title: "Tom Sawyer" }, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Record successfully deleted")
  }
})

/*
    Go to the mongoshell mongosh
    show dbs (booksDb should be there)
    use booksDB
    show collections
    db.books.find()
*/
