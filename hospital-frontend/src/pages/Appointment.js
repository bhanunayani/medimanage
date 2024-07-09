import React, { useState } from 'react';
import AppointmentBookingPage from './Appointments';
import './Appointment.css'; 
import ViewAppoint from './ViewAppoint';
import CancelApp from './CancelApp';
import backgroundImage from './b3.jpg';

function NavBar({ setActiveSection }) {
    const handleNavClick = (section, event) => {
        event.preventDefault();
        setActiveSection(section);
    };

    return (
        <nav className="navbar1">
            <ul className="navbar-nav1">
                <li className="nav-item1">
                    <a href="#book-appointment" className="nav-link1" onClick={(event) => handleNavClick('book-appointment', event)}>Book Appointment</a>
                </li>
                <li className="nav-item1">
                    <a href="#view-appointment" className="nav-link1" onClick={(event) => handleNavClick('view-appointment', event)}>View My Appointment</a>
                </li>
                <li className="nav-item1">
                    <a href="#reschedule-cancel" className="nav-link1" onClick={(event) => handleNavClick('reschedule-cancel', event)}>Reschedule / Cancel Appointment</a>
                </li>
            </ul>
        </nav>
    );
}


function Appointment() {
    const [activeSection, setActiveSection] = useState('book-appointment');

    return (
        <div className="app1">
            <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <NavBar setActiveSection={setActiveSection} />
            <div className="content">
                {activeSection === 'book-appointment' && (
                    <section id="book-appointment">
                        <AppointmentBookingPage />
                    </section>
                )}
                {activeSection === 'view-appointment' && (
                    <section id="view-appointment">
                        <ViewAppoint />
                    </section>
                )}
                {activeSection === 'reschedule-cancel' && (
                    <section id="reschedule-cancel">
                        <CancelApp />
                    </section>
                )}
            </div>
        </div>
    );
}

export default Appointment;