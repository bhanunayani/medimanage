import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './contactus.css'; // Make sure the path to your CSS file is correct
import backgroundImage from './b4.jpg'; // Make sure the path to your image file is correct

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    doctorPerformance: 5,
    appointmentEase: 5
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage('Thank you for your feedback! We value your input.');
      setFormData({
        name: '',
        email: '',
        message: '',
        doctorPerformance: 5,
        appointmentEase: 5
      });
    }
  };

  return (
    <div className="contact-us-background" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={7}>
            <div className="contact-us-form">
              <h2 className="text-center mb-4" style={{ color: '#006fbb' }}>Feedback</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupMessage">
                  <Form.Label>Share Details of your Experience</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupDoctorPerformance">
                  <Form.Label>Doctor Performance: {formData.doctorPerformance}</Form.Label>
                  <input
                    type="range"
                    className="custom-range"
                    min="1"
                    max="5"
                    name="doctorPerformance"
                    value={formData.doctorPerformance}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupAppointmentEase">
                  <Form.Label>Appointment Scheduling Ease: {formData.appointmentEase}</Form.Label>
                  <input
                    type="range"
                    className="custom-range"
                    min="1"
                    max="5"
                    name="appointmentEase"
                    value={formData.appointmentEase}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="light" className="w-100 m3 mt-3" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
              {successMessage && (
                <Alert variant="success" className="mt-4">
                  {successMessage}
                </Alert>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUsPage;
