// src/components/NewAppointmentForm.js
import React, { useState } from 'react';
import { addAppointment } from '../api/api';
import { useNavigate } from 'react-router-dom'

export default function NewAppointmentForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('8:00 AM');
  const [complaint, setComplaint] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Appointment Added:\nDate: ${date}\nTime: ${time}\nComplaint: ${complaint}`);
    // You can add actual submission logic here
    const response = await addAppointment({name:name,date:date,time:time,complaint:complaint})

    console.log("Appointment Added,", response.data)

    navigate('/')
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>New Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name: </label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
        </div>

        <div>
          <label>Date: </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Time: </label>
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="8:00 AM">8:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
          </select>
        </div>
        
        <div style={{ marginTop: '1rem' }}>
          <label>Complaint: </label><br />
          <textarea
            rows="4"
            cols="40"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <button type="button" onClick={() => window.history.back()}>
            Cancel
          </button>
          <button type="submit" style={{ marginLeft: '1rem' }}>
            Add Appointment
          </button>
        </div>
      </form>
    </div>
  );
}
