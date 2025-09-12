const express = require('express')
const router =  express.Router()
//import controller functions
const { getAllAppointments , addAppointment, cancelAppointment } = require('../controllers/controller')

//Route Handlers

router.get('/appointments', getAllAppointments)
router.post('/appointments',addAppointment)
router.delete('/cancelappointment/:id', cancelAppointment)

module.exports = router