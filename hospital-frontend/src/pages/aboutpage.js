                                                         import React, { Component } from 'react';
import { Card, Button, input } from 'react-bootstrap';
import './AboutUsPage.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

class AboutUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDoctor: null,
    };
  }

  handleDoctorClick = (doctor) => {
    this.setState({ selectedDoctor: doctor });
  };

  handleClosePopup = () => {
    this.setState({ selectedDoctor: null });
  };

  render() {
    const { selectedDoctor } = this.state;
    const doctors = [
  { 
    id: 1, 
    name: 'Dr. Marcus Johnson', 
    experience: '10 years', 
    url: "./p3.jpg", 
    about: 'Specializes in cardiology', 
    specialization: "Cardiology", 
    descriptions: "Experienced interventional cardiologist with 10 years of experience in diagnosing and treating heart conditions using minimally invasive procedures."  
  },
  { 
    id: 2, 
    name: 'Dr. Jane Smith', 
    experience: '8 years', 
    url: "./p4.jpg", 
    about: 'Specializes in Orthopedics', 
    specialization: "Orthopedics", 
    descriptions: "Orthopedic surgeon with 12 years of experience specializing in sports-related injuries, offering advanced treatments and rehabilitation strategies to athletes of all levels." 
  },
  { 
    id: 3, 
    name: 'Dr. Priya Patel', 
    experience: '10 years', 
    url: "./p2.jpg", 
    about: 'Specializes in Pediatrics', 
    specialization: "Pediatrics", 
    descriptions: "Neonatologist with 9 years of experience specializing in the care of newborn infants, particularly those who are premature or have complex medical conditions, in the neonatal intensive care unit." 
  },
  { 
    id: 4, 
    name: 'Dr. Christopher Lee', 
    experience: '8 years', 
    url: "./p5.jpg", 
    about: 'Specializes in Psychiatry', 
    specialization: "Psychiatry", 
    descriptions: "Child and adolescent psychiatrist with 6 years of experience in diagnosing and treating mental health disorders in children and teenagers, providing specialized care tailored to their unique developmental needs." 
  },
  { 
    id: 5, 
    name: 'Dr. John Doe', 
    experience: '10 years', 
    url: "./p3.jpg", 
    about: 'Specializes in Orthopedics', 
    specialization: "Orthopedics", 
    descriptions: "Sports Medicine Orthopedic Surgeon with 15+ years experience in treating sports-related injuries and performing arthroscopic surgeries on joints such as knees and shoulders." 
  },
  { 
    id: 6, 
    name: 'Dr. Sai Likhitha', 
    experience: '8 years', 
    url: "./p2.jpg", 
    about: 'Pediatrician with a passion for children', 
    specialization: "Pediatrician", 
    descriptions: "Child and adolescent psychiatrist with 16 years of experience in diagnosing and treating mental health disorders in children and teenagers, providing specialized care tailored to their unique developmental needs." 
  }
];

    return (
      <div className="about-us-page">
        <section className="head-section">
          {/* <h2>Welcome to Medi-Manage</h2> */}
        </section>
        <div className="background-image">
        <p className='head-text'>Welcome to Medi-Manage</p>
          {/* <h1>Empowering healthcare excellence through innovative technology and compassionate care</h1> */}
        </div>
        <section className="About-section">
          <h2>ABOUT US</h2>
          <p>"At Medi-Manage, we are committed to revolutionizing healthcare management through cutting-edge technology and unwavering dedication to patient well-being. With a team of passionate professionals, we strive to optimize every aspect of hospital operations, from seamless patient admissions to streamlined administrative processes. Our mission is to provide efficient and effective solutions that enhance the quality of care delivered to our patients. By prioritizing innovation, integrity, and compassion, we aim to set new standards in healthcare management and contribute positively to the well-being of our communities."</p>
        </section>
        <section className="mission-section">
  <div className="mission-content">
    <h2>OUR MISSION</h2>
    <div className="mission-flex-container">
      <div className="mission-image"></div>
      <div className="mission-points">
        <ul>
          <li>Provide exceptional healthcare services to all patients.</li>
          <li>Promote wellness and prevention in the community.</li>
          <li>Advance medical research and education.</li>
          <li>Ensure patient safety and satisfaction.</li>
          <li>Support a compassionate and diverse healthcare workforce.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<div className='health-section'>
  <h2 className='health-head'>Health Leadership</h2>
  <div className='health-text'>
    <p>We are driven to achieve the highest level of medical standards and outcomes through our relentless recruitment of top physicians and unrivaled investment in leading health innovation. Empowering the people, partners and communities we serve defines our unique approach to health leadership and underpins our mission of building the best health care future for all.</p>
  </div>
</div>
<div className='president'>
  <div className='president-left'>
    <img src="p1.jpg" alt="President Image" className="president-image" /> 
  </div>
  <div className='president-right'>
    <p className='p-name'>Robert T. Braithwaite</p>
    <p className='p-text1'>President & CEO</p>
    <p className='p-text2'>Robert T. Braithwaite is President and Chief Executive Officer of Hoag. He is the senior executive responsible for all aspects of hospital operations and quality of care, and he directs a 20-member executive leadership team.</p>
  </div>
</div>
        <section className="team-section">
          <h2>OUR TEAM</h2>
          <div className="team-cards">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="doctor-card"
                onClick={() => this.handleDoctorClick(doctor)}
              >
                {/* <img src="p1.jpg" alt="Doctor Image" className="doctor-image" /> */}
                <h3>{doctor.name}</h3>
                <p>{doctor.about}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Popup for displaying doctor details */}
        {selectedDoctor && (
          <div className="popup">
            <div className="popup-content">
              <div className="close-btn" onClick={this.handleClosePopup}>&times;</div>
              <div className='popup-divs'> 
              <div className='left-popup'> <img src={selectedDoctor.url} alt="Doctor Image" className="doctor-image" /></div>
              <div className='right-popup'>
              <h2>{selectedDoctor.name}</h2>
              <p>Experience: {selectedDoctor.experience}</p>
              <p>{selectedDoctor.about}</p>
              <p>{selectedDoctor.descriptions}</p>
              </div>
              </div>
            </div>
          </div>
        )}
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
                        <p className='mp1'>Find a Doctor</p>
                        <p className='mp1'>Our Doctors</p>
                        <p className='mp1'>Book an Appointment</p>
                        <p className='mp1'>Our Services</p>
                        <p className='mp1'>Our Departments</p>
                    </div>
                    <div>
                        <p className='mh1'>Center of Excellences</p>
                        <p className='mp1'>Cardiology</p>
                        <p className='mp1'>Orthopedics</p>
                        <p className='mp1'>Pediatrics</p>
                        <p className='mp1'>Psychiatry</p>
                        <p className='mp1'>Emergency Care</p>
                    </div>
                    <div>
                        <p className='mh1'>Contact Us</p>
                        <p className='mp1'>Consult Doctor</p>
                        <p className='mp1'>Post a Query</p>
                        <p className='mp1'>Know About Us</p>
                        <p className='mp1'>Give your Feedback</p>
                        <p className='mp1'>MediManage</p>
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
}

export default AboutUsPage;
