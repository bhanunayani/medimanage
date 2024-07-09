import React from 'react';
import { Card, Button, input } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './DashboardPage.css'

const DashboardPage = () => {
    const navigate = useNavigate();

    const redirectToDepartment = () => {
        navigate('/departments');
    };

    const redirectToAppointment = () => {
        navigate('/appointment');
    };

    const redirectToAvailabledoctor = () => {
        navigate('/availabledoctor');
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-section">
                <p className='d1'>Your home for health</p>
                {/* <div className='dashboard-top-section'>
                    <div className='top-left'>
                        <div className='top-left-image'></div>
                        <p className='p1'>Know more about our departments</p>
                    </div>
                    <div className='top-mid'></div>
                    <div className='top-right'>
                        <div className='top-right-image'></div>
                        <p className='p1'>Know more about our departments</p>
                    </div>
                </div> */}
                <div className='dashboard-top-section'>
                    <div className='top-left'>
                        <div className='top-left-image'></div>
                    </div>
                    {/* <div className='top-mid'></div> */}
                    <div className='top-right'>
                        <p className='p1'>Know more about our departments</p>
                        <p className='p2'>Explore Our Departments: Discover specialized care tailored to your needs. From cardiology to pediatrics, our dedicated departments ensure comprehensive and personalized treatment for every patient. Click to learn more about our services and find the expertise you're seeking.</p>
                        <Button className='dep-button' onClick={redirectToDepartment}>Our Departments</Button>
                    </div>
                </div>
            </div>
            <div className='dashboard-mid'>
                <p className='dt1'>Book an appointment for an in-clinic consultation</p>
                <p className='dt2'>Find experienced doctors across all specialties</p>
                <div className='dashboard-mid-img'>
                    <div>
                        <div className='image1'></div>
                        <p className='image-text1'>Cardiology</p>
                        <p className='image-text2'>Your heart matters. Schedule a cardiology appointment today to keep it healthy</p>
                    </div>
                    <div>
                        <div className='image2'></div>
                        <p className='image-text1'>Orthopedics</p>
                        <p className='image-text2'>Don't let pain limit your mobility. Book an orthopedics appointment for expert care</p>
                    </div>
                    <div>
                        <div className='image3'></div>
                        <p className='image-text1'>Pediatrics</p>
                        <p className='image-text2'>Your child's health is precious. Secure a pediatrics appointment for their well-being</p>
                    </div>
                    <div>
                        <div className='image4'></div>
                        <p className='image-text1'>Psychiatry</p>
                        <p className='image-text2'>Mental health is as important as physical health. Prioritize your well-being with a psychiatry appointment</p>
                    </div>
                </div>
            </div>
            <div className="dashboard-section1">
                <div className='left1'>
                    <div className="d1-details">
                        <p className='t1'>Instant appointment with doctor. <span className='t11'>Guaranteed.</span></p>
                        <p className='t2'><FontAwesomeIcon icon={faCheck} className='tick-icon' />600+ Verified doctors</p>
                        <p className='t2'><FontAwesomeIcon icon={faCheck} className='tick-icon' />2M+ Patient Recommendations</p>
                        <p className='t2'><FontAwesomeIcon icon={faCheck} className='tick-icon' />20M Patients/year</p>
                        <Button variant='primary' className="dashboard-button" onClick={redirectToAvailabledoctor}>Find me the right doctor</Button>
                    </div>
                </div>
                <div className='right1'>
                 <Card className="dashboard-card2">
                </Card>
                </div>
            </div>
            <div className="dashboard-section2">
                <div className='left2'>
                <Card className="dashboard-card1">
                </Card>
                </div>
                <div className="right2">
                    <p className='t1'>Skip the waiting room. <span className='t11'>Consult a doctor.</span></p>
                    <p className='t2'><FontAwesomeIcon icon={faCheck} className='tick-icon' />Fees staring at 20$</p>
                    <p className='t2'><FontAwesomeIcon icon={faCheck} className='tick-icon' />Verified doctors response in 5min</p>
                    <p className='t2'><FontAwesomeIcon icon={faCheck} className='tick-icon' />100% private and confidential</p>
                    <Button variant='primary' className="dashboard-button" onClick={redirectToAppointment}>Consult now</Button>
                </div>
            </div>
            <div className='myFooter'>
                <div style={{display:"flex", flexDirection:"row"}}>
                <div className='m1'>
                    <p className='myT'>MEDI MANAGE</p>
                    <p className='myp2'>Get a lot of information about us</p>
                    <p className='myt2'>Subscribe To Our NewsPaper</p>
                    <input className='myI' placeholder='Enter your email'></input> <br></br>
                    <Button className='myB'>SUBMIT</Button>
                </div>
                <div className='m2'>
    <div>
        <p className='mh1'>Patients Care</p>
        <p className='mp1' onClick={() => navigate('/appointment')}>Find a Doctor</p>
        <p className='mp1' onClick={() => navigate('/availabledoctor')}>Our Doctors</p>
        <p className='mp1' onClick={() => navigate('/appointment')}>Book an Appointment</p>
        <p className='mp1' onClick={() => navigate('/services')}>Our Services</p>
        <p className='mp1' onClick={() => navigate('/departments')}>Our Departments</p>
    </div>
    <div>
        <p className='mh1'>Center of Excellences</p>
        <p className='mp1' onClick={() => navigate('/departments')}>Cardiology</p>
        <p className='mp1' onClick={() => navigate('/departments')}>Orthopedics</p>
        <p className='mp1' onClick={() => navigate('/departments')}>Pediatrics</p>
        <p className='mp1' onClick={() => navigate('/departments')}>Psychiatry</p>
        <p className='mp1' onClick={() => navigate('/dashboard')}>Emergency Care</p>
    </div>
    <div>
        <p className='mh1'>Contact Us</p>
        <p className='mp1' onClick={() => navigate('/appointment')}>Consult Doctor</p>
        <p className='mp1' onClick={() => navigate('/contactus')}>Post a Query</p>
        <p className='mp1' onClick={() => navigate('/about')}>Know About Us</p>
        <p className='mp1' onClick={() => navigate('/contactus')}>Give your Feedback</p>
        <p className='mp1' onClick={() => navigate('/')}>MediManage</p>
    </div>
</div>
                </div>
                <div className='myCall'>
                <div className='myC1'>
                    <p>Emergency</p>
                    <p><FontAwesomeIcon icon={faPhoneAlt} style={{ color: 'orange',marginRight:'6px' }} /> 911</p>
                </div>
                <div className='myC1'>
                    <p>MediManage Lifeline</p>
                    <p><FontAwesomeIcon icon={faPhoneAlt} style={{ color: 'orange', marginRight:'6px' }} /> +1 404 808 2244</p>
                </div>
                <div className='myC1'>
                    <p>Health help Line</p>
                    <p><FontAwesomeIcon icon={faPhoneAlt} style={{ color: 'orange', marginRight:'6px' }} /> 1860-500-1066</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
