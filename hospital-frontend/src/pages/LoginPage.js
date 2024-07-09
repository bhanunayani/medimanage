import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import '../App.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);

    // Define the maximum length for email and password
    const maxEmailLength = 50;
    const maxPasswordLength = 50;

    const validateInput = () => {
        if (!email || !password) {
            setError('Username and password fields cannot be empty.');
            return false;
        }
        if (email.length > maxEmailLength) {
            setError(`Email must be less than ${maxEmailLength} characters.`);
            return false;
        }
        if (password.length > maxPasswordLength) {
            setError(`Password must be less than ${maxPasswordLength} characters.`);
            return false;
        }
        return true;
    };

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any existing errors

        if (!validateInput()) {
            return; // Stop the submission if validation fails
        }

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
            localStorage.setItem('meditoken', response.data.token);
            localStorage.setItem('mediemail', email);
            console.log(response) 
            navigate('/dashboard'); 
        } catch (error) {
            if (error.response) {
                // Handle specific error responses from your API
                switch (error.response.status) {
                    case 400:
                        setError('Please enter valid credentials.'); // General client-side error
                        break;
                    case 401:
                        setError('Incorrect username or password.'); // Authentication error
                        break;
                    case 404:
                        setError('Username does not exist.'); // Not found error
                        break;
                    default:
                        setError('Login failed. Please try again later.'); // Other errors
                }
            } else if (error.request) {
                setError('No response from server. Please try again later.');
            } else {
                setError('Login failed. Please try again later.');
            }
        }
        // navigate('/dashboard'); 
    };

    return (
        <div className="login-page-background">
            <Container style={{ minHeight: "100vh" }}>
                <Row className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                    <Col xs={12} md={6} lg={4}>
                        <Card className="p-4" style={{ width: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)', marginTop: '-50px' }}>
                            <Card.Body>
                                <h2 className="text-center mb-4">Login</h2>
                                {error && <p className="text-danger">{error}</p>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="email" className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                                    </Form.Group>
                                    <Form.Group id="password" className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                        type={passwordShown ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        />
                                        <InputGroup.Text
                                        onClick={togglePasswordVisibility}
                                        style={{ cursor: 'pointer' }}
                                        >
                                        {passwordShown ? 'Hide' : 'Show'}
                                        </InputGroup.Text>
                                    </InputGroup>
                                    </Form.Group>
                                    <Button variant="light" className="w-100 m3 mt-3" type="submit">Login</Button>
                                    <Link to="/forgot-password" className="d-block text-center mt-3">Forgot Password?</Link>
                                    <div className="text-center mt-2">
                                        Don't have an account? <Link to="/register">Sign up</Link>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;
