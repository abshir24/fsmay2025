const express = require("express")
const bodyParser = require('body-parser')
const app = express()
app.use( bodyParser.json() )

let todos = [ 
    {
        "id":1,
        "title": "Laundry",
        "description": "Do laundry",
        "completion": true
    },
    {
        "id":2,
        "title": "Clean up",
        "description": "Clean up the house",
        "completion": true
    }
]

app.get('/todos', (request,response) =>{
    response.send(todos)
})

app.get('/todos/:id', (request,response)=>{
    const { id } = request.params 

    let todo = todos.find( (todo) => todo.id == id )

    response.send(todo)
})

app.post('/todos', (request,response)=>{
    const data = request.body

    todos.push(data)

    response.send(todos)
})

app.put('/todos/:id', (request,response)=>{
    const { id } = request.params

    let data = request.body

    let index = todos.findIndex( (todo) => todo.id == id )

    todos[index] = request.body

    response.send(todos)
})

app.delete('/todos/:id', (request,response)=>{
    const { id } = request.params

    todos = todos.filter( (todo) => todo.id != id )

    response.send(todos)
})

const port = 8080
app.listen(port, ()=>{
   console.log(`Server is running on port ${port}`) 
})