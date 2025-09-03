const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const Todo = require('./Todo')

const app = express()
app.use( bodyParser.json() )

app.get('/todos', async (request,response) => {
    let todos = await Todo.find() //[{TODOS},{TODOS}]

    response.send(todos)
})

app.get('/todos/:id', (request,response)=>{
    Todo.findById(request.params.id)
        .then((todo)=>{
            response.send(todo)
        })
        .catch((err) => response.send(err))
})

app.post('/todos', (request,response)=>{
    const newTodo = new Todo( request.body )

    newTodo.save()
        .then((todo)=>{
            console.log("Todo was saved successfully")

            response.send(todo)
        })
        .catch((err) => response.send(err))
})

app.put('/todos/:id', (request,response)=>{
    Todo.findByIdAndUpdate(request.params.id, request.body, { new: true })
        .then((todo)=>{
            console.log("The todo was updated")
            response.send(todo)
        })
        .catch((err) => response.send(err))
})

app.delete('/todos/:id', (request,response)=>{
    Todo.findByIdAndDelete(request.params.id)
        .then((todo)=>{
            console.log("The todo was deleted")
            response.send(todo)
        })
        .catch((err) => response.send(err))
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