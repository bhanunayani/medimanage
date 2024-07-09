import React, { Component } from 'react';
import './viewAppoint.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class ViewAppoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      loading: true
    };
  }

  componentDidMount() {
    const email = localStorage.getItem('mediemail');
    axios.get(`http://localhost:8080/api/auth/appointments?email=${email}`)
      .then(response => {
        const appointments = response.data.map(appointment => ({
          ...appointment,
          // Assuming date property exists in each appointment object
          date: new Date(appointment.date).toISOString().split('T')[0]
        }));
        this.setState({
          appointments: appointments,
          loading: false
        });
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
        this.setState({ loading: false });
      });
  }

  getAppointmentStatus(date) {
    const currentDate = new Date().toISOString().split('T')[0];
    if (date < currentDate) {
      return (
        <>
          <span style={{ marginRight: '15px' }}>Finished</span>
          <FontAwesomeIcon icon={faCheck} style={{ color: '#157190', fontSize: '22px' }} />
        </>
      );
    } else if (date === currentDate) {
      return 'Today';
    } else {
      return 'Upcoming';
    }
  }

  render() {
    const { appointments, loading } = this.state;

    return (
      <div className="card">
        <div className="VPcontainer">
          <h3 className="AppHead">My Appointments</h3>
          <table className="VPresponsive-table">
            <thead>
              <tr>
                <th scope="col">Doctor</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5">Loading appointments...</td>
                </tr>
              ) : appointments.length === 0 ? (
                <tr>
                  <td colSpan="5">No appointments found</td>
                </tr>
              ) : (
                appointments.map((appointment, index) => (
                  <tr key={appointment.id} className={index % 2 === 0 ? 'VPeven-row' : 'VPodd-row'}>
                    <td data-title="Doctor">{appointment.doctorName}</td>
                    <td data-title="Date">{appointment.date}</td>
                    <td data-title="Time">{appointment.time}</td>
                    <td data-title="Email">{appointment.userEmail}</td>
                    <td data-title="Status">{this.getAppointmentStatus(appointment.date)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ViewAppoint;
