const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    date:{
        type:String,
        required: true
    },
    time:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    complaint:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model("Appointment", appointmentSchema)