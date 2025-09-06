const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    artist:{
        type:String,
        required:true
    },
    duration:{
        type:Number
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})


const playlistSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    creator:{
        type:String,
        required:true
    },
    songs:{
        type:[songSchema],
        default:[]
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Playlist", playlistSchema)