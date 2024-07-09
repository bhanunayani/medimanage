import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure this path is correct

const ResetPasswordPage = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { token } = useParams(); // Assuming the reset token is passed as a URL parameter
    const navigate = useNavigate();


    const validatePassword = () => {
        // Regular expression to check for at least one uppercase letter, one lowercase letter, one number, and one special character
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        if (!validatePassword()) {

            setError("Password must contain more than 6 characters, at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
    
        }
        setError('');
        try {
            // Replace URL with your API endpoint for password reset
            // await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, { password });
            setSuccess('Your password has been successfully reset. Redirecting to login...');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setError('Failed to reset password. Please try again later.');
        }
    };

    return (
        <div className="reset-password-page-background">
            <Container style={{ minHeight: "100vh" }}>
                <Row className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                    <Col xs={12} md={6} lg={4}>
                        <Card className="p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', marginTop: '-50px' }}>
                            <Card.Body>
                                <h2 className="text-center mb-4">Reset Password</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                {success && <Alert variant="success">{success}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="password" className="mb-3">
                                        <Form.Label>New Password</Form.Label>
                                        <Form.Control type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter new password" />
                                    </Form.Group>
                                    <Form.Group id="confirm-password" className="mb-3">
                                        <Form.Label>Confirm New Password</Form.Label>
                                        <Form.Control type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm new password" />
                                    </Form.Group>
                                    <Button variant="light" className="w-100 m3 mt-3" type="submit">Reset Password</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ResetPasswordPage;
