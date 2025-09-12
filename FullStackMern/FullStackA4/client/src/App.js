// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentsList from './components/AppointmentsList';
import NewAppointmentForm from './components/NewAppointmentForm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppointmentsList />} />
        <Route path="/new_appointment" element={<NewAppointmentForm />} />
      </Routes>
    </Router>
  );
}