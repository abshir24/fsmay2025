import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000'
})

export const getAppointments = () => api.get('/appointments')

export const addAppointment = (appointment) => api.post('/appointments',appointment)

export const deleteAppointment = (id) => api.delete(`/cancelappointment/${id}`)
