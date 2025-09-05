const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const Playlist = require('./Playlist')

const app = express()
app.use( bodyParser.json() )

app.get('/playlists', async (request,response) => {
    let playlists = await Playlist.find() //[{playlistS},{playlistS}]

    response.send(playlists)
})

app.get('/playlists/:id', (request,response)=>{
    Playlist.findById(request.params.id)
        .then((playlist)=>{
            response.send(playlist)
        })
        .catch((err) => response.send(err))
})

app.post('/playlists', (request,response)=>{
    const newplaylist = new Playlist( request.body )

    newplaylist.save()
        .then((playlist)=>{
            console.log("playlist was saved successfully")

            response.send(playlist)
        })
        .catch((err) => response.send(err))
})

app.put('/playlists/:id', (request,response)=>{
    Playlist.findByIdAndUpdate(request.params.id, request.body, { new: true })
        .then((playlist)=>{
            console.log("The playlist was updated")
            response.send(playlist)
        })
        .catch((err) => response.send(err))
})

app.delete('/playlists/:id', (request,response)=>{
    Playlist.findByIdAndDelete(request.params.id)
        .then((playlist)=>{
            console.log("The playlist was deleted")
            response.send(playlist)
        })
        .catch((err) => response.send(err))
})

app.get("/playlists/:id/songs", (request,response)=>{
    Playlist.findById(request.params.id)
            .then( (playlist)=>{
                response.send(playlist.songs)
            })
})

app.post('/playlists/:id/songs', (request,response)=>{
    Playlist.findById(request.params.id)
            .then(async (playlist)=>{
                playlist.songs.push(request.body)

                await playlist.save()

                response.send(playlist)
            })
            .catch((err) => response.send(err))
})

app.delete('/playlists/:id/songs/:songId', (request,response)=>{
    Playlist.findById(request.params.id)
            .then( async (playlist)=>{
                playlist.songs = playlist.songs.filter((song) => song._id != request.params.songId)

                await playlist.save()

                response.send(playlist)
            })
})

let connectionString = ""

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