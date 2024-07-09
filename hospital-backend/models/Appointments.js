const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  doctorName: { type: String, required: true },
  doctorID: { type: String, required: true },
  speciality: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
