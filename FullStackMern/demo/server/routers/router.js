const express = require("express")
const router = express.Router()
const { getAllPlaylists, addPlaylist, getPlaylistById,updatePlaylist, deletePlaylist, getAllSongs, addSong, deleteSong} = require('../controllers/controller')

router.get('/playlists', getAllPlaylists)

router.get('/playlists/:id', getPlaylistById)

router.post('/playlists', addPlaylist)

router.put('/playlists/:id', updatePlaylist)

router.delete('/playlists/:id', deletePlaylist)

router.get("/playlists/:id/songs",getAllSongs)

router.post('/playlists/:id/songs', addSong)

router.delete('/playlists/:id/songs/:songId', deleteSong)

module.exports = router