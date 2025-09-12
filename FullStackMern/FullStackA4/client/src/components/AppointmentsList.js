// src/components/AppointmentsList.js
import React from 'react';
import { useState, useEffect } from 'react';
import { getAppointments, deleteAppointment } from '../api/api';
import { useNavigate, Link } from 'react-router-dom'


export default function AppointmentsList() {
    const [appointments, setAppointments] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const getAllAppointments = async ()=>{
            const response = await getAppointments()

            setAppointments(response.data)
        }

        getAllAppointments()
    }) 

    const newAppointment = ()=>{
        navigate('/new_appointment')
    }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Doctor's Appointments</h1>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Patient Name</th>
            <th>Complaint</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt, index) => (
            <tr key={index}>
              <td>{appt.date}</td>
              <td>{appt.time}</td>
              <td>{appt.name}</td>
              <td>{appt.complaint}</td>
              <td><Link onClick={async ()=>{ await deleteAppointment(appt._id) }}>Cancel</Link></td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={newAppointment} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Add New Appointment
      </button>
    </div>
  );
}