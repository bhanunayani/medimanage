import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css'; // Ensure this path is correct

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Initialize navigate function
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        try {
            // Replace URL with your API endpoint for password reset request
            // const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
            setMessage('If an account with that email exists, a password reset link has been sent.');

            // Check if you want to navigate after setting the message
            // or based on some condition from the response
            navigate('/reset-password'); // Navigate to the reset-password page
        } catch (error) {
            setError('Failed to request password reset. Please try again later.');
        }
    };

    return (
        <div className="forgot-password-page-background">
            <Container style={{ minHeight: "100vh" }}>
                <Row className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                    <Col xs={12} md={6} lg={4}>
                        <Card className="p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', marginTop: '-50px' }}>
                            <Card.Body>
                                <h2 className="text-center mb-4">Forgot Password</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                {message && <Alert variant="success">{message}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="email" className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                                    </Form.Group>
                                    <Button variant="light" className="w-100 m3 mt-3" type="submit">Reset Password</Button>
                                    <Link to="/login" className="d-block text-center mt-3">Back to Login</Link>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ForgotPasswordPage;
