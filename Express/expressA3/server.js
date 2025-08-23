const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use( bodyParser.json() )

let books = [
    {
        "id":1,
        "title":"The Cat in the Hat",
        "author":"Dr. Suess"
    },
    {
        "id":2,
        "title":"The Lorax",
        "author":"Dr. Suess"
    },
]

app.get("/books", (request,response)=>{
    response.send(books)
})

app.get("/books/:id", (request,response)=>{
    let book = books.find( (book) => book.id == request.params.id ) //1

    response.send(book)
})

app.post("/books", (request,response)=>{
    let book = request.body

    books.push(book)

    response.send(books)
})

app.listen(port, ()=>{
   console.log(`Server is running on port ${port}`) 
})