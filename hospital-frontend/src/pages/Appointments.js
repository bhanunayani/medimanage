import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Appointments.css';

function AppointmentBookingPage() {
    const [patientName, setPatientName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [selectedSpecialization, setSelectedSpecialization] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedDoctorName, setSelectedDoctorName] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [doctors, doctorsData] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [problemBriefing,setProblemBriefing] = useState('');

    useEffect(() => {
        fetchDoctors();
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        const email = localStorage.getItem('mediemail');
        if(email) {
            const response = await axios.post('http://localhost:8080/api/auth/userDetails', { email });
            const {firstName, lastName, contact, ...data} = response.data;
            const fullname = firstName + " " + lastName;
            setPatientName(fullname);
            setPhoneNumber(contact);
            setEmail(email)
        }
    };

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/auth/doctors');
            console.log(response)
            doctorsData(response.data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };
  
    const specializations = Array.from(new Set(doctors.map(doctor => doctor.doctorSpecialization)));
  
    const availableDoctors = doctors.filter(doctor => doctor.doctorSpecialization === selectedSpecialization && doctor.available);
  
    const availableDates = availableDoctors.filter(doctor => doctor.doctorID === selectedDoctor).map(doctor => {
        const date = new Date(doctor.date);
        return date.toISOString().split('T')[0];
      });      

      const selectedDoctorData = availableDoctors.find(doctor => doctor.doctorID === selectedDoctor);

      const availableTimes = selectedDoctorData ? selectedDoctorData.time.filter(time => !selectedDoctorData.appointments.includes(time)) : [];
     
      const getDoctorName = async () => {
        console.log(doctors)
        let doctor = doctors.find((doc) => doc.doctorID === selectedDoctor);
        console.log(doctor.doctorName, selectedDoctor);
        if (doctor) {
          setSelectedDoctorName(doctor.doctorName);
        } else {
          console.log("Doctor not found");
        }
        return doctor.doctorName
      };

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      let doctorName = await getDoctorName();

      axios.post('http://localhost:8080/api/auth/updateDoctor', { patientName, email, phoneNumber , doctorName, selectedDoctor, selectedDate, selectedTime, selectedSpecialization})
      .then(response => {
        console.log('Appointment booked successfully: 76',);
        setPatientName('');
        setPhoneNumber('');
        setEmail('');
        setSelectedSpecialization('');
        setSelectedDoctor('');
        setSelectedDate('');
        setSelectedDoctorName('');
        setSelectedTime('');
        setSuccessMessage("Your Appointment Scheduled Successfully !!!");
        setProblemBriefing("");
      })
      .catch(error => {
        console.error('Error booking appointment:', error);
      });
    };

    return (
      <div className='appointmentsPage'>
            <div className="container mt-5 appoint">
            <h3 className="mb-5 appHeadLine">Book Your Appointment</h3>
            <form onSubmit={handleSubmit}>
              <div className='topRow'>
              <div className="mb-3">
                    <label htmlFor="name" className="form-label">Patient Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>
                {/* <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="phone" name="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </div> */}
            <div className="mb-3">
                    <label htmlFor="specialty" className="form-label">Specialty</label>
                    <select className="form-select" id="specialty" name="specialty" value={selectedSpecialization} onChange={(e) => setSelectedSpecialization(e.target.value)} required>
                    <option value="">Select Specialization</option>
                    {specializations.map((specialization, index) => (<option key={index} value={specialization}>{specialization}</option>))}
                    </select>
            </div>
            <div className="mb-3">
                <label htmlFor="doctor" className="form-label">Doctor</label>
                <select className="form-select" id="doctor" name="doctor" value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} required>
                <option value="">Select Doctor</option>
                 {availableDoctors.map((doctor, index) => (<option key={index} value={doctor.doctorID}>{doctor.doctorName}</option>))}
              </select>
            </div>
            <div className='topRow'>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Available Dates</label>
                <select className="form-select" id="date" name="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required>
                 <option value="">Select Date</option>
                {availableDates.map((date, index) => (<option key={index} value={date}>{date}</option>))}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Available Time</label>
                <select className="form-select" id="date" name="date" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
                 <option value="">Select Time</option>
                {availableTimes.map((time, index) => (<option key={index} value={time}>{time}</option>))}
                </select>
            </div>
            </div>
            <div className="mb-3">
                    <label htmlFor="problemBriefing" className="form-label">Briefing About the Problem</label>
                    <textarea className="form-control" id="problemBriefing" name="problemBriefing" value={problemBriefing} onChange={(e) => setProblemBriefing(e.target.value)} required></textarea>
            </div>
                {successMessage && <p className="text-success success-message">{successMessage}</p>}
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary mb-3" style={{backgroundColor:"#157190"}}>Book Appointment</button>
                </div>
            </form>
        </div>
      </div>
    );
}

export default AppointmentBookingPage;
