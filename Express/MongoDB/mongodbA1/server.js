const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const app = express()
const Book = require('./Book')

app.use( bodyParser.json() )

// app.get("/books", (request,response)=>{
//     response.send(books)
// })

// app.get("/books/:id", (request,response)=>{
//     let book = books.find( (book) => book.id == request.params.id ) //1

//     response.send(book)
// })

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