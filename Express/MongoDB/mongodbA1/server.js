const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const app = express()
const Book = require('./Book')

app.use( bodyParser.json() )

app.get("/books", async (request,response)=>{
    let books = await Book.find() //[{Book},{Book}]

    response.send(books)
})

app.get("/books/:id", (request,response)=>{
    Book.findById(request.params.id)
        .then((book) =>{
            response.send(book)
        })
        .catch((err) => response.send(err))
})

app.put("/books/:id",(request,response)=>{
    Book.findByIdAndUpdate(request.params.id, request.body, { new:true })
        .then((book)=>{
            console.log("The book was updated")

            response.send(book)
        })
        .catch((err) => response.send(err))
})

app.delete("/books/:id",(request,response)=>{
    Book.findByIdAndDelete(request.params.id)
        .then((book)=>{
            console.log("Book was deleted")

            response.send("The book was deleted.")
        })
        .catch((err) => response.send(err))
})

app.post("/books", (request,response)=>{
    let newBook = new Book( request.body )

    newBook.save()
        .then((book) => {
            console.log("The Book was saved successfully")
            response.send(book)
        })
        .catch( (err) => console.log(err) )
})

let connectionString = "mongodb+srv://abshirtech24_db_user:huzagyak1PjtAtFW@mongodba1.yqxo4jn.mongodb.net/?retryWrites=true&w=majority&appName=MongoDBA1"

mongoose.connect(connectionString)
.then(()=>{
    const port = 8080

    console.log("Connected to DB")

    app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`) 
    })
}).catch((error)=>{
    console.log(error)
})