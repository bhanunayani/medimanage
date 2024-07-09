import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AvailableDoctor.css';

const doctorsData = [
  // Orthopedics
  { id: 1, name: 'Dr. Smith', specialty: 'Orthopedics', availability: '2024-03-28', about: 'With over 10 years of experience in Orthopedics, Dr. Smith has led numerous successful surgeries and has been awarded Top Orthopedic Surgeon of the Year 2023.' },
  { id: 2, name: 'Dr. Johnson', specialty: 'Orthopedics', availability: '2024-03-28', about: 'Dr. Johnson specializes in sports injuries, promoting rapid recovery techniques that have restored the careers of many athletes.' },
  { id: 3, name: 'Dr. Barnes', specialty: 'Orthopedics', availability: '2024-03-29', about: 'Known for his innovative treatment in bone health, Dr. Barnes has contributed to groundbreaking orthopedic research.' },
  // Cardiology
  { id: 4, name: 'Dr. Clara', specialty: 'Cardiology', availability: '2024-03-28', about: 'Dr. Clara is renowned for her compassionate patient care and expertise in managing complex cardiovascular diseases.' },
  { id: 5, name: 'Dr. Lewis', specialty: 'Cardiology', availability: '2024-03-29', about: 'With a focus on preventive cardiology, Dr. Lewis has helped patients significantly reduce heart disease risks.' },
  { id: 6, name: 'Dr. Gomez', specialty: 'Cardiology', availability: '2024-03-29', about: 'Dr. Gomez, an award-winning cardiologist, specializes in minimally invasive heart surgery, improving patient recovery times.' },
  // Neurology
  { id: 7, name: 'Dr. Patel', specialty: 'Neurology', availability: '2024-03-28', about: 'Dr. Patel\'s work on neurological disorders has been published widely, and she is a sought-after speaker at medical conferences.' },
  { id: 8, name: 'Dr. Hughes', specialty: 'Neurology', availability: '2024-03-29', about: 'Specializing in pediatric neurology, Dr. Hughes has made significant strides in treating childhood neurological conditions.' },
  { id: 9, name: 'Dr. Yung', specialty: 'Neurology', availability: '2024-03-29', about: 'Dr. Yung integrates technology and medicine to treat chronic neurological diseases, offering new hope to his patients.' },
];

function DoctorAvailabilityPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setShowAll(false);

    if (!specialty || !date) {
      alert('Please select both specialty and date.');
      return;
    }

    const filteredDoctors = doctorsData.filter(doctor => 
      doctor.specialty === specialty && doctor.availability === date && (doctor.name.includes(name) || name === '')
    );

    if (filteredDoctors.length === 0) {
      alert('There are no doctors available at this current date or please check the doctor\'s name.');
      return;
    }

    setSearchResults(filteredDoctors);
  };

  const showAllDoctors = () => {
    setShowAll(true);
    setSearchResults(doctorsData);
  };

  const handleBookAppointment = () => {
    // Navigate to the "appointment" page
    navigate('/appointment'); 
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Find Available Doctor</div>
        <div className="card-body">
          <form onSubmit={handleSearch} className="row gy-3">
            <div className="col">
              <input type="text" className="form-control" placeholder="Doctor's Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col">
              <select className="form-select" value={specialty} onChange={(e) => setSpecialty(e.target.value)} required>
                <option value="">Select Specialty</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
              </select>
            </div>
            <div className="col">
              <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">Search</button>
              <button type="button" className="btn btn-secondary ms-2" onClick={showAllDoctors}>Show All Doctors</button>
            </div>
          </form>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {searchResults.map(doctor => (
          <div key={doctor.id} className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text">{doctor.specialty}</p>
                <p className="card-text">Available: {doctor.availability}</p>
                <p className="card-text">{doctor.about}</p>
              </div>
              <div className="card-footer">
              <button className="btn btn-primary" onClick={handleBookAppointment}>Book an Appointment</button>
              </div>
            </div>
          </div>
        ))}
        {searchResults.length === 0 && showAll && <p>No doctors found. Please adjust your search criteria.</p>}
      </div>
    </div>
  );
}

export default DoctorAvailabilityPage;
