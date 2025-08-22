const express = require("express")
const app = express()
const port = 8080

app.get('/', (request,response)=>{
    let name = "<h1>Name: Test Name </h1>"
    let food = "<h1>Food: Test Food </h1>"
    let vacation = "<h1>Vacation: Test Vacation </h1>"

    response.send(name + food + vacation)
})

app.listen(port, ()=>{
   console.log(`Server is running on port ${port}`) 
})