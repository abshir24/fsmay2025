const express = require("express")
const app = express()
const port = 8080

app.use(express.static('public'))

app.get('/', (request,response)=>{
    response.send("<h1>INDEX </h1>")
})

app.get('/display-name', (request,response)=>{
    response.send("<h1>Name</h1>")
})

app.get('/display-food', (request,response)=>{
    let img = "<img src='/food.jpeg'>"
    

    response.send("<h1>Tikka masala </h1> " + img)
})

app.get('/display-vacation', (request,response)=>{
    let img = "<img src='/vacation.jpeg'>"
    
    response.send("<h1>Vacation: Bali</h1> " + img)
})

app.listen(port, ()=>{
   console.log(`Server is running on port ${port}`) 
})