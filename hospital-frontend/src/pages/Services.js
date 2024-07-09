import React, { Component } from 'react';
import './Services.css';

export default class Services extends Component {
  render() {
    return (
      <div className="services-container">
        <div><h1 className="services-header">OUR SERVICES</h1></div>
        <div className="navigation-bar">
          <a href="#cardiology">Cardiology</a>
          <a href="#orthopedics">Orthopedics</a>
          <a href="#pediatrics">Pediatrics</a>
          <a href="#psychiatry">Psychiatry</a>
        </div>
        <div className="service-card" id="cardiology">
          <h2 className="service-title">Cardiology</h2>
          <p className="service-description">Our cardiology department specializes in the diagnosis, treatment, and prevention of heart-related conditions.</p>
        </div>
        <div className="service-card" id="orthopedics">
          <h2 className="service-title">Orthopedics</h2>
          <p className="service-description">Our orthopedic department offers expert care for musculoskeletal injuries and conditions, including fractures, arthritis, and sports injuries.</p>
        </div>
        <div className="service-card" id="pediatrics">
          <h2 className="service-title">Pediatrics</h2>
          <p className="service-description">Our pediatric department provides comprehensive healthcare services for infants, children, and adolescents, ensuring their well-being and development.</p>
        </div>
        <div className="service-card" id="psychiatry">
          <h2 className="service-title">Psychiatry</h2>
          <p className="service-description">Our psychiatry department offers evaluation, diagnosis, and treatment for various mental health disorders, providing support and care for patients and their families.</p>
        </div>
        <div className="services-list">
            <div className='list1'>
            <div className="service-item">
            <img src="https://images.unsplash.com/photo-1599700403969-f77b3aa74837?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVtZXJnZW5jJTIwY2FyZSUyMGhvc3BpdGFsfGVufDB8fDB8fHwy" alt="Service 1" className="service-image1" />
            <h2 className="service-title">Emergency Care</h2>
            <p className="service-description">We provide 24/7 emergency care services with a team of experienced doctors and nurses ready to handle any medical emergency.</p>
          </div>
          <div className="service-item">
            <img src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdlbmVyYWwlMjBtZWRpY2luZSUyMGhvc3BpdGFsfGVufDB8fDB8fHwy" alt="Service 2" className="service-image2" />
            <h2 className="service-title">General Medicine</h2>
            <p className="service-description">Our general medicine department offers comprehensive healthcare services for a wide range of medical conditions.</p>
          </div>
          <div className="service-item">
            <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZ2VyeSUyMGhvc3BpdGFsfGVufDB8fDB8fHwy" alt="Service 3" className="service-image3" />
            <h2 className="service-title">Surgery</h2>
            <p className="service-description">Our surgical team consists of highly skilled surgeons who perform both minor and major surgeries using advanced techniques and equipment.</p>
          </div>
            </div>
            <div className='list2'>
            {/* <div className="service-item">
            <img src="https://via.placeholder.com/150" alt="Service 4" className="service-image" />
            <h2 className="service-title">Maternity Care</h2>
            <p className="service-description">We provide comprehensive maternity care services including prenatal care, labor and delivery, and postnatal care for both mother and baby.</p>
          </div> */}
          <div className="service-item">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Service 5" className="service-image4" />
            <h2 className="service-title">Pediatrics</h2>
            <p className="service-description">Our pediatric department offers specialized healthcare services for infants, children, and adolescents, ensuring their well-being and development.</p>
          </div>
          <div className="service-item">
            <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Service 6" className="service-image5" />
            <h2 className="service-title">Diagnostic Services</h2>
            <p className="service-description">We provide a wide range of diagnostic services including laboratory tests, imaging studies, and medical screenings for accurate diagnosis and treatment.</p>
          </div>
            </div>
        </div>
      </div>
    );
  }
}
