import React from 'react';
import './Faq.css';
import { Button  } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Faq = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="faq-container">
        <div className='f1'>
        <h1>Frequently Asked Questions (FAQs)</h1>
        <p>We have compiled a list of frequently asked questions to help address common queries. Please have a look at them to clear any questions you may have:</p>
        </div>
        <div className="faq-item">
          <strong>1. What services does the hospital offer?</strong>
          <p>Our hospital provides services for general medicine, emergency care, cardiology, orthopedics, pediatrics, and psychiatry.</p>
        </div>

        <div className="faq-item">
          <strong>2. How can I book an appointment with a doctor?</strong>
          <p>You can easily book an appointment through our website by selecting the desired department and choosing a convenient date and time slot.</p>
        </div>

        <div className="faq-item">
          <strong>3. Are walk-in appointments available?</strong>
          <p>Yes, we do offer walk-in appointments for certain departments, although we recommend booking in advance to secure your preferred time slot.</p>
        </div>

        <div className="faq-item">
          <strong>4. What should I bring to my appointment?</strong>
          <p>Please bring your identification, insurance card, any relevant medical records or test results, and a list of medications you are currently taking.</p>
        </div>

        <div className="faq-item">
          <strong>5. How can I cancel or reschedule my appointment?</strong>
          <p>You can cancel or reschedule your appointment by logging into your account on our website or by contacting our reception desk at least 24 hours in advance.</p>
        </div>

        <div className="faq-item">
          <strong>6. Do you accept insurance?</strong>
          <p>Yes, we accept most major insurance plans. Please check with your insurance provider or contact our billing department for more information.</p>
        </div>

        <div className="faq-item">
          <strong>7. What payment methods do you accept?</strong>
          <p>We accept cash, credit/debit cards, and mobile payment options for any out-of-pocket expenses.</p>
        </div>

        <div className="faq-item">
          <strong>8. Is there parking available at the hospital?</strong>
          <p>Yes, we have ample parking available for patients and visitors.</p>
        </div>

        <div className="faq-item">
          <strong>9. Do you provide telemedicine appointments?</strong>
          <p>Yes, we offer telemedicine appointments for certain specialties. Please inquire when booking your appointment.</p>
        </div>

        <div className="faq-item">
          <strong>10. What should I do if I have a medical emergency?</strong>
          <p>In case of a medical emergency, please call 911 or go to the nearest emergency room immediately.</p>
        </div>

        <div className="faq-item">
          <strong>11. How soon can I expect to receive test results?</strong>
          <p>The turnaround time for test results may vary depending on the type of test. Our staff will inform you of the expected timeline during your visit.</p>
        </div>

        <div className="faq-item">
          <strong>12. Can I request a specific doctor for my appointment?</strong>
          <p>Yes, you can request a specific doctor when booking your appointment, subject to their availability.</p>
        </div>

        <div className="faq-item">
          <strong>13. Are there any age restrictions for pediatric appointments?</strong>
          <p>We provide care for patients of all ages, including infants, children, and adolescents.</p>
        </div>

        <div className="faq-item">
          <strong>14. Do you offer financial assistance for patients in need?</strong>
          <p>Yes, we have financial assistance programs available for qualifying patients. Please contact our financial services department for more information.</p>
        </div>

        <div className="faq-item">
          <strong>15. How can I provide feedback about my experience?</strong>
          <p>We welcome feedback from our patients. You can share your experience through our website's feedback form or by contacting our patient relations department.</p>
        </div>
        </div>
        <div className='myFooter'>
                <div style={{display:"flex", flexDirection:"row"}}>
                <div className='m1'>
                    <p className='myT'>MEDI MANAGE</p>
                    <p className='myp2'>Get a lot of information about us</p>
                    <p className='myt2'>Subscribe To Our NewsPaper</p>
                    <input className='myI' placeholder='Enter your email'></input> <br></br>
                    <Button variant="light" className="w-100 m3">SUBMIT</Button>
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

export default Faq;
