import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css'; // Ensure this is correctly linked to apply global styles

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Add additional fields as necessary
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Use useNavigate for redirection
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      tempErrors["name"] = "Name is required.";
    }

    if (!formData.email) {
      isValid = false;
      tempErrors["email"] = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      tempErrors["email"] = "Email format is invalid.";
    }

    // Updated password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!formData.password) {
      isValid = false;
      tempErrors["password"] = "Password is required.";
    } else if (!passwordRegex.test(formData.password)) {
      isValid = false;
      tempErrors["password"] = "Password must be at least 6 characters long, with one uppercase letter, one number, one lowercase letter, and one special character.";
    }

    if (!formData.confirmPassword) {
      isValid = false;
      tempErrors["confirmPassword"] = "Confirming password is required.";
    } else if (formData.confirmPassword !== formData.password) {
      isValid = false;
      tempErrors["confirmPassword"] = "Passwords do not match.";
    }
    
    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Directly await the axios call without assigning its result
        await axios.post('http://localhost:8080/api/auth/register', formData);
        alert("Registration successful!"); // Optionally, replace this with a more sophisticated feedback mechanism
        navigate('/login'); // Redirect to the login page or dashboard as appropriate
        // Additional check to make sure passwords match
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match.");
          return;
        }

      } catch (error) {
        console.error('Registration error:', error.response ? error.response.data : "Error");
        // Display error feedback. Customize as needed.
        
        alert("Registration failed, User Already Exists");
      }
    }
  };
  

  return (
    <div className="registration-page-background">
      <Container style={{ minHeight: "100vh" }}>
        <Row className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <Col xs={12} md={6} lg={4}>
            <Card className="p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', marginTop: '-50px' }}>
              <Card.Body>
                <h2 className="text-center mb-4">Register</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" isInvalid={!!errors.name} />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" isInvalid={!!errors.email} />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>

                  
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        isInvalid={!!errors.password}
                      />
                      <InputGroup.Text>
                        <Button variant="outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? "Hide" : "Show"}
                        </Button>
                      </InputGroup.Text>
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>


                  <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        isInvalid={!!errors.confirmPassword}
                      />
                      <InputGroup.Text>
                        <Button 
                          variant="outline-secondary" 
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? "Hide" : "Show"}
                        </Button>
                      </InputGroup.Text>
                    </InputGroup>
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Button variant="light" className="w-100 m3 mt-3" type="submit">
                    Register
                  </Button>
                </Form>
                <div className="text-center mt-3">
                  Already have an account? <Link to="/login">Log in</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegistrationPage;
