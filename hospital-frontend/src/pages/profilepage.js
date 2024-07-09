import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './profilepage.css'; 
import backgroundImage from './b3.jpg';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      gender: '',
      dateOfBirth: '',
      contact: '',
      isEditMode: false,
      successMessage: '',
    };
  }

  componentDidMount() {
    const email = localStorage.getItem('mediemail');
    this.setState({
        email
    }, () => {
        // console.log(this.state);
    });
    
    this.fetchProfileData();
  }

fetchProfileData = async () => {
    const email = localStorage.getItem('mediemail');
    if(email) {
        const response = await axios.post('http://localhost:8080/api/auth/userDetails', { email });
        console.log(response.data)
        const { dateOfBirth, ...userData } = response.data;
        const formattedDateOfBirth = dateOfBirth ? dateOfBirth.split('T')[0] : '';
        this.setState({ ...userData, dateOfBirth: formattedDateOfBirth });
    }
};


  handleChange = (e) => {
    console.log('e',e)
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleEditMode = () => {
    this.setState((prevState) => ({
      isEditMode: !prevState.isEditMode,
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { firstName, lastName, email, address, gender, contact, dateOfBirth } = this.state;
      const response = await axios.post('http://localhost:8080/api/auth/updateProfile', { firstName, lastName, email, address, gender, contact, dateOfBirth });
      console.log('Form submitted:', this.state);
      console.log(response);
      this.setState({ isEditMode: false, successMessage: 'Profile updated successfully' }); // Set success message
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    const { isEditMode, successMessage } = this.state;

    return (
      <div className="profile-container">
         <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <div className="left-panel">
          <div className="profile-icon">{this.state.firstName && this.state.firstName.charAt(0).toUpperCase()}</div>
          <div className="user-details">
            {/* <p>{this.state.name}</p> */}
            <p>{this.state.email}</p>
          </div>
        </div>
        <div className="right-panel">
          <h1 className='rp'>User Profile</h1>
          {successMessage && <Alert variant="success">{successMessage}</Alert>} {/* Render success message */}
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className='fields'
                type="text"
                name="firstName"
                placeholder='Enter your firstname'
                value={this.state.firstName}
                onChange={this.handleChange}
                disabled={!isEditMode}
                required
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                className='fields'
                type="text"
                name="lastName"
                placeholder='Enter your lastname'
                value={this.state.lastName}
                onChange={this.handleChange}
                disabled={!isEditMode}
                required
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                className='fields'
                type="text"
                name="address"
                placeholder='Enter your address'
                value={this.state.address}
                onChange={this.handleChange}
                disabled={!isEditMode}
                required
              />
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                className='fields'
                as="select"
                name="gender"
                value={this.state.gender}
                onChange={this.handleChange}
                disabled={!isEditMode}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                className='fields'
                type="date"
                name="dateOfBirth"
                value={this.state.dateOfBirth}
                onChange={this.handleChange}
                disabled={!isEditMode}
                required
              />
            </Form.Group>
            <Form.Group controlId="personalContact">
              <Form.Label>Personal Contact</Form.Label>
              <Form.Control
                className='fields'
                type="tel"
                name="contact"
                placeholder='Enter your mobile number'
                value={this.state.contact}
                onChange={this.handleChange}
                disabled={!isEditMode}
                required
              />
            </Form.Group>
            <Button className="m3" variant="primary" type="button" onClick={this.toggleEditMode}>
              {isEditMode ? 'Cancel' : 'Edit'}
            </Button>
            {isEditMode && (
              <Button variant="success" type="submit" className="m3">
                Save
              </Button>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
