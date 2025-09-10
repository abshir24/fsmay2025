import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

export const getPlaylists = () => api.get('/playlists')

export const addPlaylist = (playlist) => api.post('/playlists',playlist)
