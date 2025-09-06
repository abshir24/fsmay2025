const Playlist = require('../Playlist')

const getAllPlaylists = async (request,response) => {
    let playlists = await Playlist.find() //[{playlistS},{playlistS}]

    response.send(playlists)
}

const getPlaylistById = (request,response)=>{
    Playlist.findById(request.params.id)
        .then((playlist)=>{
            response.send(playlist)
        })
        .catch((err) => response.send(err))
}

const addPlaylist = (request,response)=>{
    const newplaylist = new Playlist( request.body )

    newplaylist.save()
        .then((playlist)=>{
            console.log("playlist was saved successfully")

            response.send(playlist)
        })
        .catch((err) => response.send(err))
}

const updatePlaylist = (request,response)=>{
    Playlist.findByIdAndUpdate(request.params.id, request.body, { new: true })
        .then((playlist)=>{
            console.log("The playlist was updated")
            response.send(playlist)
        })
        .catch((err) => response.send(err))
}

const deletePlaylist = (request,response)=>{
    Playlist.findByIdAndDelete(request.params.id)
        .then((playlist)=>{
            console.log("The playlist was deleted")
            response.send(playlist)
        })
        .catch((err) => response.send(err))
}

const getAllSongs =  (request,response)=>{
    Playlist.findById(request.params.id)
            .then( (playlist)=>{
                response.send(playlist.songs)
            })
}

const addSong = (request,response)=>{
    Playlist.findById(request.params.id)
            .then(async (playlist)=>{
                playlist.songs.push(request.body)

                await playlist.save()

                response.send(playlist)
            })
            .catch((err) => response.send(err))
}

const deleteSong = (request,response)=>{
    Playlist.findById(request.params.id)
            .then( async (playlist)=>{
                playlist.songs = playlist.songs.filter((song) => song._id != request.params.songId)

                await playlist.save()

                response.send(playlist)
            })
}

module.exports = { 
    getAllPlaylists, 
    getPlaylistById,
    updatePlaylist, 
    deletePlaylist, 
    getAllSongs, 
    addSong, 
    deleteSong,
    addPlaylist
}