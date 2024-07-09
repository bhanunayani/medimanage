const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  doctorName: { type: String, required: true },
  doctorSpecialization: { type: String, required: true },
  date: [{ type: Date, required: true }],
  time: [{ type: String, required: true }],
  doctorID: { type: String, required: true, unique: true },
  available: { type: Boolean, default: true },
  appointments: [{ type: String, required: true }]
});

module.exports = mongoose.model('Doctor', DoctorSchema);