import React from 'react';
import { Container,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css'; 

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home-page-background">
      <div className="content-section">
        {/* Hero Section */}
        <Container fluid className="bg-primary-custom text-white text-center py-5 mt-5 myBox">
          <p className='mT'>Empowering Healthcare, Together</p>
          <p>
            Discover a world where managing healthcare is seamless, efficient, and centered around you. Welcome to Medi Manage, your ultimate Hospital Management System. Whether you're a healthcare professional or a patient, our platform is designed to streamline your experience, optimize operations, and enhance patient care.
          </p>
          <Button variant="light" href="/login" className="m-3 m3">Login</Button>
          <Button variant="light" href="/register" className="m-3 m3">Sign up</Button>
        </Container>

        {/* Features Section */}
        <div class="container-custom my-5">
  <div class="row-custom g-4">
    <div class="col-custom-md-4">
      <div class="card-custom bg-info-custom text-white-custom card-hover-zoom-custom">
        <div class="card-body-custom">
          <h5 class="card-title-custom">Seamless Patient Record Management</h5>
          <p class="card-text-custom">
            Experience the ease of securely accessing and managing patient records at your fingertips, fostering unparalleled care and efficiency.
          </p>
        </div>
      </div>
    </div>
    <div class="col-custom-md-4">
      <div class="card-custom bg-success-custom text-white-custom card-hover-zoom-custom">
        <div class="card-body-custom">
          <h5 class="card-title-custom">Effortless Appointment Scheduling</h5>
          <p class="card-text-custom">
            Revolutionize how you schedule appointments with our streamlined system, designed to optimize patient care and maximize resource allocation.
          </p>
        </div>
      </div>
    </div>
    <div class="col-custom-md-4">
      <div class="card-custom bg-warning-custom text-dark-custom card-hover-zoom-custom">
        <div class="card-body-custom">
          <h5 class="card-title-custom">Operational Excellence</h5>
          <p class="card-text-custom">
            Elevate your hospital's operational efficiency with our comprehensive tools and insights, driving forward the future of healthcare.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Call to Action Section */}
        <div fluid className="text-white text-center py-5 mb-5 d">
          <h2>Become a Pioneer in Healthcare</h2>
          <p>Join our community of healthcare innovators and be a part of the movement towards smarter, more efficient patient care. Your journey to transforming healthcare starts here.</p>
          <Button variant="light" href="/infoform" className='m3'>Start Now</Button>
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
}

export default HomePage;
