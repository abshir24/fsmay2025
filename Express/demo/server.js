const express = require("express")
const app = express()
const port = 8080

app.get('/', (request,response)=>{
    response.send("<h1>Hello World Express </h1>")
})

app.listen(port, ()=>{
   console.log(`Server is running on port ${port}`) 
})