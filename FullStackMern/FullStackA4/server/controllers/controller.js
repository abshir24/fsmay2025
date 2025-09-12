const Appointment = require('../Appointment')

const getAllAppointments = async (request,response)=>{
    //Retrieve appointments from DB
    let appointments = await Appointment.find() //[{Appointment},{Appointment}]

    response.send(appointments)
}

const addAppointment = async (request,response)=>{
    console.log("Add Appointment")
    //Add appointments to DB
    const newAppointment = new Appointment( request.body )

    newAppointment.save()
        .then((appointment)=>{
            //Callback function that runs when appointment is saved successfully
            console.log("Added appointment")

            response.send(appointment)
        })
        .catch((err)=> response.send(err)) 
}

const cancelAppointment = (request,response)=>{
    Appointment.findByIdAndDelete(request.params.id)
              .then((appointment)=>{
                response.send(`Appointment ${appointment._id} was deleted`)
              })
}

module.exports = { 
    getAllAppointments, 
    addAppointment, 
    cancelAppointment 
}