// Import dependencies
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
//router.js file
const router = require('./routers/router')
const cors = require('cors')

const app = express()
app.use( bodyParser.json() )
app.use( cors() )

//Re route the requests to server to the  router.js file
app.use('/', router)

//connect database and run server

let connectionString = "mongodb+srv://abshirtech24_db_user:huzagyak1PjtAtFW@mongodba1.yqxo4jn.mongodb.net/?retryWrites=true&w=majority&appName=MongoDBA1"

mongoose.connect(connectionString)
    .then(()=>{
        const port = 8000
        
        console.log("Connected to DB")
        
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`)
        })
    }).catch((error)=>{
        console.log(error)
    })
