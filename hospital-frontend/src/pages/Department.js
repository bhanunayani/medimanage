import React, { Component } from 'react';
import './Department.css';

// Dummy data for services and doctors
const departmentData = [
  {
    name: 'Cardiology',
    id:"ardiology",
    services: [
      { name: 'Heart Consultation', description: 'Comprehensive evaluation and diagnosis of cardiac health concerns.' },
      { name: 'ECG', description: 'Electrocardiogram testing to assess heart rhythm and function.' },
      { name: 'Angiography', description: 'Imaging procedure to visualize blood vessels for detecting heart conditions.' },
      { name: 'Cardiac Rehabilitation', description: 'Customized program to aid recovery and enhance heart health post-surgery or cardiac event.' },
      { name: 'Heart Surgery', description: 'Surgical interventions aimed at treating various heart conditions.' },
      { name: 'Stress Testing', description: 'Assessment of heart performance under physical stress to detect cardiovascular issues.' },
      { name: 'Pacemaker Implantation', description: 'Surgical procedure for implanting devices to regulate heart rhythm.' },
      { name: 'Cardiac Catheterization', description: 'Diagnostic procedure to examine heart chambers and blood vessels using catheters.' }
    ],
    treated: 1500,
    doctors: [
      { name: 'Dr. John Doe', specialization: 'Cardiologist' },
      { name: 'Dr. Alice Smith', specialization: 'Cardiologist' },
      { name: 'Dr. Michael Johnson', specialization: 'Cardiologist' },
      { name: 'Dr. Emily Williams', specialization: 'Cardiologist' },
      { name: 'Dr. David Brown', specialization: 'Cardiologist' },
      { name: 'Dr. Jessica Lee', specialization: 'Cardiologist' },
      { name: 'Dr. Richard Wilson', specialization: 'Cardiologist' },
      { name: 'Dr. Samantha Taylor', specialization: 'Cardiologist' },
      { name: 'Dr. Andrew Clark', specialization: 'Cardiologist' },
      { name: 'Dr. Jennifer Anderson', specialization: 'Cardiologist' }
    ]
  },
  {
    name: 'Orthopedics',
    id:"rthopedics",
    services: [
      { name: 'Fracture Treatment', description: 'Comprehensive care for bone fractures including diagnosis, stabilization, and rehabilitation.' },
      { name: 'Joint Replacement', description: 'Surgical procedure to replace damaged joints with artificial implants.' },
      { name: 'Sports Injury Management', description: 'Specialized care for athletes\' injuries, focusing on rapid recovery and performance restoration.' },
      { name: 'Arthroscopic Surgery', description: 'Minimally invasive surgical technique for diagnosing and treating joint problems.' },
      { name: 'Orthopedic Rehabilitation', description: 'Tailored rehabilitation programs to restore function and mobility after orthopedic injuries or surgeries.' },
      { name: 'Bone Density Testing', description: 'Diagnostic assessment to measure bone strength and risk of fractures.' },
      { name: 'Spinal Surgery', description: 'Surgical interventions for treating spinal disorders and injuries.' },
      { name: 'Orthopedic Trauma Care', description: 'Prompt and specialized treatment for severe orthopedic injuries and trauma.' }
    ],
    treated: 1200,
    doctors: [
      { name: 'Dr. Emily Smith', specialization: 'Orthopedic Surgeon' },
      { name: 'Dr. James Johnson', specialization: 'Orthopedic Surgeon' },
      { name: 'Dr. Olivia Brown', specialization: 'Orthopedic Surgeon' },
      { name: 'Dr. Ethan Wilson', specialization: 'Orthopedic Surgeon' },
      { name: 'Dr. Sophia Lee', specialization: 'Orthopedic Surgeon' },
      { name: 'Dr. Jacob Taylor', specialization: 'Orthopedic Surgeon' },
      { name: 'Dr. Ava Clark', specialization: 'Orthopedic Surgeon' },
      { name: 'Dr. Benjamin Anderson', specialization: 'Orthopedic Surgeon' },
      { name: 'Dr. Chloe Martin', specialization: 'Orthopedic Surgeon' },
      { name: 'Dr. Daniel White', specialization: 'Orthopedic Surgeon' }
    ]
  },
  {
    name: 'Pediatrics',
    id:"ediatrics",
    services: [
      { name: 'Well-child Visits', description: 'Routine check-ups focusing on the physical, emotional, and developmental well-being of children.' },
      { name: 'Immunizations', description: 'Administration of vaccines to protect children from various infectious diseases.' },
      { name: 'Child Development Assessment', description: 'Evaluation of a child\'s physical, cognitive, and social development milestones.' },
      { name: 'Pediatric Surgery', description: 'Surgical interventions tailored for children, addressing a wide range of medical conditions.' },
      { name: 'Newborn Care', description: 'Specialized care for newborns, including screenings, feeding support, and parental education.' },
      { name: 'Pediatric Allergy Testing', description: 'Diagnostic procedures to identify and manage allergies in children.' },
      { name: 'Pediatric Neurology', description: 'Evaluation and treatment of neurological disorders in children.' },
      { name: 'Behavioral Pediatrics', description: 'Assessment and management of behavioral and developmental issues in children.' }
    ],
    treated: 2000,
    doctors: [
      { name: 'Dr. Michael Johnson', specialization: 'Pediatrician' },
      { name: 'Dr. Sophia Brown', specialization: 'Pediatrician' },
      { name: 'Dr. Emma Wilson', specialization: 'Pediatrician' },
      { name: 'Dr. William Lee', specialization: 'Pediatrician' },
      { name: 'Dr. Lily Taylor', specialization: 'Pediatrician' },
      { name: 'Dr. Noah Clark', specialization: 'Pediatrician' },
      { name: 'Dr. Isabella Anderson', specialization: 'Pediatrician' },
      { name: 'Dr. Ethan Martin', specialization: 'Pediatrician' },
      { name: 'Dr. Olivia White', specialization: 'Pediatrician' },
      { name: 'Dr. Alexander Johnson', specialization: 'Pediatrician' }
    ]
  },
  {
    name: 'Psychology',
    id:"sychology",
    services: [
      { name: 'Counseling', description: 'Providing guidance and support to individuals facing personal or psychological challenges.' },
      { name: 'Therapy Sessions', description: 'Structured sessions aimed at improving mental health and well-being through various therapeutic approaches.' },
      { name: 'Psychological Assessments', description: 'Comprehensive evaluations to understand cognitive, emotional, and behavioral patterns.' },
      { name: 'Family Therapy', description: 'Counseling sessions involving family members to address relational and communication issues.' },
      { name: 'Cognitive Behavioral Therapy', description: 'Therapeutic approach focusing on changing negative thought patterns and behaviors.' },
      { name: 'Group Therapy', description: 'Supportive sessions involving multiple individuals sharing similar concerns or goals.' },
      { name: 'Substance Abuse Counseling', description: 'Guidance and support for individuals struggling with addiction issues.' },
      { name: 'Stress Management', description: 'Techniques and strategies to cope with and reduce stress levels effectively.' }
    ],
    treated: 800,
    doctors: [
      { name: 'Dr. Sarah Lee', specialization: 'Psychiatrist' },
      { name: 'Dr. Benjamin Brown', specialization: 'Psychiatrist' },
      { name: 'Dr. Emma Wilson', specialization: 'Psychiatrist' },
      { name: 'Dr. William Johnson', specialization: 'Psychiatrist' },
      { name: 'Dr. Sophia Clark', specialization: 'Psychiatrist' },
      { name: 'Dr. Noah Anderson', specialization: 'Psychiatrist' },
      { name: 'Dr. Lily Martin', specialization: 'Psychiatrist' },
      { name: 'Dr. Alexander White', specialization: 'Psychiatrist' },
      { name: 'Dr. Isabella Taylor', specialization: 'Psychiatrist' },
      { name: 'Dr. Ethan Johnson', specialization: 'Psychiatrist' }
    ]
  }
];


export class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredService: null
    };
  }

  handleServiceMouseEnter = (service) => {
    this.setState({ hoveredService: service });
  };

  handleServiceMouseLeave = () => {
    this.setState({ hoveredService: null });
  };
  render() {
    const { hoveredService } = this.state;

    return (
      <div className="departments">
        <div className="navigation-bar">
          <a href="#ardiology">Cardiology</a>
          <a href="#rthopedics">Orthopedics</a>
          <a href="#ediatrics">Pediatrics</a>
          <a href="#sychology">Psychology</a>
        </div>
        <div className="service-description-container">
          {hoveredService && (
            <div className="service-description">
              {hoveredService.description}
            </div>
          )}
        </div>
        {departmentData.map((department, index) => (
          <div key={index} className={`department`}  id={department.id}>
            <h2>{department.name}</h2>
            <div className='group'>
              <div className="services">
                <h3>Services Offered:</h3>
                <ul>
                  {department.services.map((service, idx) => (
                    <li
                      key={idx}
                      // onMouseEnter={() => this.handleServiceMouseEnter(service)}
                      // onMouseLeave={this.handleServiceMouseLeave}
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`dep ${department.name.toLowerCase()}`}>
              </div>
            </div>
            <div className="doctors">
              <h3>Available Doctors:</h3>
              <ul>
                {department.doctors.map((doctor, idx) => (
                  <li key={idx}>{doctor.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Department;
