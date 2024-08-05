import React, { useState } from 'react';
import "./PateintDashboard.css";
import logo from "../public/logo.png";
import { FaArrowLeft, FaArrowRight, FaBriefcase, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import doctorImage from "../public/doctor.png";

const PatientDashboard = () => {
  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" width={50} height={50} />
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Appointments</a></li>
          <li><a href="#">Chat</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">My details</a></li>
        </ul>
        <div className="nav-actions">
          <button className="login-btn">Logout</button>
          <img src={logo} alt="Profile" className="profile-icon" />
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    );
  };


  const DoctorCard = ({ doctor }) => {

    return (
      <div className="doctor-card">
        <img
          src={doctorImage}
          className="doctor-img"
          alt="Doctor"
          style={{ borderRadius: "100%", width: "150px", height: "150px" }}
        />
        <p className="card-title" style={{ fontSize: "18px", fontWeight: "bold" }}>{doctor.name}</p>
        <p className="card-occupation">
          <FaBriefcase /> {doctor.occupation}
        </p>
        <p className="card-city">
          <FaMapMarkerAlt /> {doctor.city}
        </p>
      </div>
    );
  };

  const doctors = [
    { id: 1, name: 'Dr. John Doe', occupation: 'Cardiologist', city: 'New York', image: 'doctor1.jpg' },
    { id: 2, name: 'Dr. Jane Smith', occupation: 'Neurologist', city: 'Los Angeles', image: 'doctor2.jpg' },
    { id: 3, name: 'Dr. Mark Johnson', occupation: 'Dermatologist', city: 'Chicago', image: 'doctor3.jpg' },
    { id: 4, name: 'Dr. Lisa Brown', occupation: 'Pediatrician', city: 'Houston', image: 'doctor4.jpg' },
    { id: 5, name: 'Dr. James Davis', occupation: 'Surgeon', city: 'Phoenix', image: 'doctor5.jpg' },
    { id: 6, name: 'Dr. Patricia Wilson', occupation: 'Psychiatrist', city: 'Philadelphia', image: 'doctor6.jpg' },
    { id: 7, name: 'Dr. James Davis', occupation: 'Surgeon', city: 'Phoenix', image: 'doctor5.jpg' },
    { id: 8, name: 'Dr. Patricia Wilson', occupation: 'Psychiatrist', city: 'Philadelphia', image: 'doctor6.jpg' },
    { id: 9, name: 'Dr. James Davis', occupation: 'Surgeon', city: 'Phoenix', image: 'doctor5.jpg' },
    { id: 10, name: 'Dr. Patricia Wilson', occupation: 'Psychiatrist', city: 'Philadelphia', image: 'doctor6.jpg' },
    { id: 11, name: 'Dr. James Davis', occupation: 'Surgeon', city: 'Phoenix', image: 'doctor5.jpg' },
    { id: 12, name: 'Dr. Patricia Wilson', occupation: 'Psychiatrist', city: 'Philadelphia', image: 'doctor6.jpg' },
 
  ];

  const categories = [
    'All',
    'Cardiologist',
    'Cancer Specialist',
  ];


  

  const DoctorList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');
    

      
      const handleCategoryClick = (category) => {
        setSelectedCategory(category);
      };
    
      const filteredDoctors = selectedCategory === 'All'
        ? doctors
        : doctors.filter(doctor => doctor.specialty === selectedCategory);


    return (
      <div className="container">
      <div className="sidebar">
        <p style={{fontSize:"20px", lineHeight:"40px",fontWeight:"bold"}}>Categories</p>
        <ul>
          {categories.map(category => (
            <li
              key={category}
              className={category === selectedCategory ? 'active' : ''}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <div className="card-container">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        
      </div>
    </div>
    );
  };


const Picture=()=>{
return(
  <div>
 <div className="search-doctor-container">
      <div className="background-image">
        <div className="search-doctor">
          <h2>Search for a Doctor</h2>
          <div className="my-search">
            <div className="input-container">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search..." className="search-input" />
            </div>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>
    </div>  </div>
)
}
  return (
    <div>
      <Navbar />
      <Picture/>
      <DoctorList />
    </div>
  );
}

export default PatientDashboard;
