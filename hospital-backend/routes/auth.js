const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Doctor = require('../models/Doctors');
const Appointments = require('../models/Appointments');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// fetch appointments
router.get('/appointments', async (req, res) => {
  try {
    const { email } = req.query; // Assuming email is passed as a query parameter
    const appointments = await Appointments.find({ userEmail: email });
    res.status(200).json(appointments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Reschedule time slot route
router.post('/modify-appointment', async (req, res) => {
  try {
    const { doctorID, userName, userEmail, oldTime, newTime, date } = req.body;

    // Find the doctor by doctorId
    const doctor = await Doctor.findOne({ doctorID });
    console.log(doctor)
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    // Remove the old time slot from the appointments array
    const oldIndex = doctor.appointments.indexOf(oldTime);
    if (oldIndex !== -1) {
      doctor.appointments.splice(oldIndex, 1);
    }

    // Add the new time slot to the appointments array
    doctor.appointments.push(newTime);

    // Save the updated doctor information
    await doctor.save();

    // Update the appointment in the Appointment collection
    await Appointments.findOneAndUpdate(
      {
        doctorID,
        userName,
        userEmail,
        date,
        time: oldTime // Find the appointment using the old time
      },
      { $set: { time: newTime } } // Update the time to new time
    );

    return res.status(200).json({ message: 'Appointment modified successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


// Cancel or delete time slot route
router.post('/clear-appointment', async (req, res) => {
  try {
    const { doctorID, userName, userEmail, time, date } = req.body;
    // Find the doctor by doctorId
    const doctor = await Doctor.findOne({ doctorID });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    // Clear the time slot from the appointments array
    const index = doctor.appointments.indexOf(time);
    if (index !== -1) {
      doctor.appointments.splice(index, 1);
      await doctor.save();
    }

    // Delete the corresponding appointment from the Appointment collection
    await Appointments.findOneAndDelete({
      doctorID,
      userName,
      userEmail,
      date,
      time
    });

    return res.status(200).json({ message: 'Appointment cleared successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


// Fetch doctor details
router.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/updateDoctor', async (req, res) => {
  const { patientName, phoneNumber, email, selectedDoctor, selectedDate, doctorName, selectedTime, selectedSpecialization} = req.body;

  try {
    // Create a new instance of the Appointments model with the form data
    const newAppointment = new Appointments({
      userName: patientName,
      userEmail: email,
      doctorID: selectedDoctor,
      doctorName,
      date: selectedDate,
      time: selectedTime,
      speciality: selectedSpecialization
    });

    let doctor = await Doctor.findOne({ 
      doctorID: selectedDoctor,
    });

    if (!doctor) {
      return res.status(404).json({ msg: 'Doctor not found' });
    }

    // Add the time slot to the appointments array
    doctor.appointments.push(selectedTime);
    
    // Save the updated doctor details
    await doctor.save();
    // Save the appointment data to the database
    await newAppointment.save();

    // Send a success response
    res.status(200).json({ msg: 'Appointment booked successfully' });
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).send('Server error');
  }
});

// Fetch user details route
router.post('/userDetails', async (req, res) => {
  try {
    const { email } = req.body;
    // console.log(req.body);
    let user = await User.findOne({ email }); // Excluding password from user details
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update profile route
router.post('/updateProfile', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    address,
    contact,
    gender,
    dateOfBirth
  } = req.body;
  
  try {
    let user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    
    // Update user profile data
    user.firstName = firstName;
    user.lastName = lastName;
    user.address = address;
    user.contact = contact;
    user.gender = gender;
    user.dateOfBirth = dateOfBirth;

    await user.save();
    
    res.status(200).json({ msg: 'User profile updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// Registration route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    user = new User({
      name,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Create JWT token
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET || 'fallback_secret_value', // Fallback value
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
