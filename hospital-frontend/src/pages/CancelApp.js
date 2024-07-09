import React, { Component } from 'react';
import './CancelApp.css';
import axios from 'axios';

class CancelApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      doctors: [],
      loading: true,
      selectedTime: '', // State to hold the selected time
      successMessage: '',
    };
  }

  async componentDidMount() {
    await this.fetchAppointments();
    await this.fetchDoctors();
  }

  async fetchAppointments() {
    const email = localStorage.getItem('mediemail');
    try {
      const response = await axios.get(`http://localhost:8080/api/auth/appointments?email=${email}`);
      const appointments = response.data.map(appointment => ({
        ...appointment,
        date: new Date(appointment.date).toISOString().split('T')[0]
      }));
      this.setState({
        appointments: appointments,
        loading: false
      });
    } catch (error) {
      console.error('Error fetching appointments:', error);
      this.setState({ loading: false });
    }
  }

  async fetchDoctors() {
    try {
      const response = await axios.get(`http://localhost:8080/api/auth/doctors`);
      const doctorsData = response.data;
      this.setState({ doctors: doctorsData });
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  }

  handleCancel = async (doctorID, userName, userEmail, time, date) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/clear-appointment', {
        doctorID,
        userName,
        userEmail,
        time,
        date,
      });
  
      if (response.status === 200) {
        // Remove the canceled appointment from state
        this.setState(prevState => ({
          appointments: prevState.appointments.filter(appointment =>
            appointment.doctorID !== doctorID || 
            appointment.userName !== userName || 
            appointment.userEmail !== userEmail || 
            appointment.time !== time || 
            appointment.date !== date
          ),
        }));
      } else {
        alert('Failed to cancel appointment');
      }
    } catch (error) {
      console.error('Error cancelling appointment:', error);
      alert('Failed to cancel appointment. Please try again later.');
    }
  };
  
  handleModify = async (doctorID, userName, userEmail, oldTime, date) => {
    const { selectedTime } = this.state;
    try {
      const response = await axios.post('http://localhost:8080/api/auth/modify-appointment', {
        doctorID,
        userName,
        userEmail,
        oldTime,
        newTime: selectedTime,
        date
      });
  
      if (response.status === 200) {
        await this.fetchAppointments();
        this.setState({ successMessage: 'Appointment modified successfully' }); // Set success message
        setTimeout(() => {
          this.setState({ successMessage: '' }); // Clear success message after 3 seconds
        }, 3000);
      } else {
        alert('Failed to modify appointment');
      }
    } catch (error) {
      console.error('Error modifying appointment:', error);
      alert('Failed to modify appointment. Please try again later.');
    }
  };

  handleTimeChange = (event) => {
    this.setState({ selectedTime: event.target.value });
  };

  render() {
    const { appointments, loading, doctors, selectedTime, successMessage } = this.state;
    const currentDate = new Date();
    const upcomingAppointments = appointments.filter(appointment => {
      const appointmentDate = new Date(appointment.date);
      return appointmentDate > currentDate;
    });

    return (
      <div className='cancelDiv'>
        <div className="viewAppoint2">
          {loading ? (
            <p>Loading appointments...</p>
          ) : (
            <div className="appointments-container">
              {upcomingAppointments.length === 0 ? (
                <p className="no-appointments-message">No upcoming appointments found</p>
              ) : (
                upcomingAppointments.map(appointment => (
                  <div key={appointment.id} className="appointment-card1">
                    <div className="appointment-details">
                      <p className='appItems'>
                        <p><strong className='cancelText'>Selected Doctor:</strong> {appointment.doctorName}</p>
                        <p><strong className='cancelText'>Selected Date:</strong> {appointment.date}</p>
                        <p><strong className='cancelText'>Selected Time:</strong> {appointment.time}</p>
                      </p>
                      <p className='appItems'>
                        <p><strong className='cancelText'>Email:</strong> {appointment.userEmail}</p>
                        <p><strong className='cancelText'>Speciality:</strong> {appointment.speciality}</p>
                      </p>
                      <div className='dropGroup'>
                        <div className="dropdown-container">
                          <p><strong className='cancelText'>Modify Date</strong></p>
                          <select>
                            {doctors.find(doctor => doctor.doctorID === appointment.doctorID)?.date.map(date => {
                              const formattedDate = new Date(date).toISOString().split('T')[0];
                              return <option key={formattedDate} value={formattedDate}>{formattedDate}</option>;
                            })}
                          </select>
                        </div>
                        <div className="dropdown-container">
                          <p><strong className='cancelText'>Modify Time</strong></p>
                          <select value={selectedTime} onChange={this.handleTimeChange}>
                            <option value="">Select a time</option>
                            {doctors.find(doctor => doctor.doctorID === appointment.doctorID)?.time.map(time => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-buttons">
                      <button className="cancel-btn" onClick={(event) => this.handleCancel(appointment.doctorID, appointment.userName, appointment.userEmail, appointment.time, appointment.date)}>Cancel Appointment</button>
                      <button className="modify-btn" onClick={(event) => this.handleModify(appointment.doctorID, appointment.userName, appointment.userEmail, appointment.time, appointment.date)}>Modify Appointment</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
        {/* Success message */}
        {successMessage && (
          <div className="success-message" style={{ fontSize: '20px', backgroundColor: 'green', padding: '10px', marginTop: '10px', borderRadius: '5px', color: 'white' }}>
            {successMessage}
          </div>
        )}
      </div>
    );
  }
}

export default CancelApp;