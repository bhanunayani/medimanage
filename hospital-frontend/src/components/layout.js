import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink,  useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Add the logout icon here

import '../App.css'; // Ensure this is correctly importing your styles

const Layout = ({ children }) => {
    const isLoggedIn = localStorage.getItem('meditoken');
    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement your logout logic here, e.g., clearing localStorage and redirecting to the login page
        localStorage.removeItem('meditoken');
        navigate('/login'); 
        // Redirect to the login page or perform any other necessary actions
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Updated Navbar with dark blue theme */}
            <Navbar expand="lg" className="navbar-custom">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="text-white title">MEDI MANAGE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/" exact className="text-white">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="text-white">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/dashboard" className="text-white">Dashboard</Nav.Link>
                            {/* <Nav.Link as={NavLink} to="/contactus" className="text-white">Feedback</Nav.Link> */}
                            <NavDropdown title="Services" id="services-nav-dropdown" className="services-dropdown">
                                <NavDropdown.Item as={NavLink} to="/appointment">Consult US</NavDropdown.Item>
                                {/* <NavDropdown.Item as={NavLink} to="/contactus">Feedback</NavDropdown.Item> */}
                                <NavDropdown.Item as={NavLink} to="/services">Specialty Care</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/availabledoctor">Our Doctors</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={NavLink} to="/contactus">Feedback</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/faqs">FAQs</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {isLoggedIn && ( // Render profile icon and logout button only if user is logged in
                            <Nav>
                                <Nav.Link as={NavLink} to="/profile" className="text-icon1">
                                    <FontAwesomeIcon icon={faUser} />
                                </Nav.Link>
                                <Nav.Link onClick={handleLogout} className="text-white">
                                    {/* <Button type='primary'>logout</Button> */}
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                </Nav.Link>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Main content */}
            <main style={{ flex: 1 }}>
                <div>{children}</div>
            </main>

            {/* Updated Footer with dark blue theme */}
            <footer className="footer-custom text-center text-lg-start">
                <div className="text-center p-3" style={{ width: '100%', color: 'white' }}>
                    © 2024 Medicare Management System
                </div>
            </footer>
        </div>
    );
};

export default Layout;
