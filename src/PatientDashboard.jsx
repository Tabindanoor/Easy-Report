import React, { useEffect, useState } from 'react';
import "./PateintDashboard.css";
import logo from "../public/logo.png";
import { FaArrowLeft, FaArrowRight, FaBriefcase, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import doctorImage from "../public/doctor.png";
import { FaUserMd, FaSmile, FaStar, FaUsers, FaCalendarCheck } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

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
      <div className="my-container">
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
        <div className="card-container" >
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
          <h2>Search htmlFor a Doctor</h2>
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



const StatsCard = () => {
  const stats = [
    { icon: <FaUserMd />, title: 'Total Doctors ', value: 120, color: '#8ddbc4' },
    { icon: <FaSmile />, title: 'Happy Clients', value: 1500, color: '#b2d8b2' },
    { icon: <FaStar />, title: 'Average Rating', value: '4.8', color: '#a0d6e3' },
    { icon: <FaUsers />, title: 'Active Patients', value: 3000, color: '#c0e4d1' },
    { icon: <FaCalendarCheck />, title: 'Appointments', value: 4500, color: '#e2d3d4' },
  ];

  const [animatedStats, setAnimatedStats] = useState(
    stats.map(stat => ({ ...stat, animatedValue: 0 }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(currentStats =>
        currentStats.map(stat => ({
          ...stat,
          animatedValue: Math.min(stat.animatedValue + Math.ceil(stat.value / 100), stat.value)
        }))
      );
    }, 30);

    if (animatedStats.every(stat => stat.animatedValue === stat.value)) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [animatedStats]);

  return (
    <div className="my-4">
      <div className="">
        <div className="row justify-content-center">
          {animatedStats.map((stat, index) => (
            <div className="col-md-2 col-sm-3 col-6  " key={index}>
              <div 
                className="card stat-card"
                style={{ 
                  border: `2px solid ${stat.color}`, 
                  borderRadius: '10px', 
                  textAlign: 'center',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                }}
              >
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <div style={{ fontSize: '30px', color: "#366e5b" }}>
                    {stat.icon}
                  </div>
                  <h5 className="card-title mt-3" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                    {stat.title}
                  </h5>
                  <p className="card-text" style={{ fontSize: '20px', fontWeight: '600', color: '#333' }}>
                    {stat.animatedValue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// const FAQSection =()=>{
//   return(
//     <div className='faq'  >
// <div className="accordion-wrapper" style={{backgroundColor:"black"}}>
//   <div className="accordion"  style={{backgroundColor:"blue"}}>
//     <input type="radio" name="radio-a" id="check1" checked/>
//     <label className="accordion-label" htmlFor="check1">Accordion 12</label>
//     <div className="accordion-content">
//       <p>Hey there, you are watching codiesbugs &#128522;</p>
//     </div>
//   </div>
//   <div className="accordion"  style={{backgroundColor:"white"}}>
//     <input type="radio" name="radio-a" id="check2"/>
//     <label className="accordion-label" htmlFor="check2">Accordion 2</label>
//     <div className="accordion-content">
//       <p>I hope you are enjoing the video, don't htmlForget to give your feedback in comment section</p>
//     </div>
//   </div>
//   <div className="accordion">
//     <input type="radio" name="radio-a" id="check3"/>
//     <label className="accordion-label" htmlFor="check3">Accordion 3</label>
//     <div className="accordion-content">
//       <p>If you liked then don't htmlForget to subscribe the channel htmlFor latest videos. </p>
//     </div>
//   </div>
// </div>
// </div>
//   )
// }

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     { question: 'How can I book an appointment?', answer: 'You can book an appointment through our website by selecting a date and time from the available slots.' },
//     { question: 'What should I prepare htmlFor my online consultation?', answer: 'Ensure you have a stable internet connection and a quiet space. Have your medical history and any relevant documents ready.' },
//     { question: 'Are online consultations secure?', answer: 'Yes, we use encrypted video calls and secure plathtmlForms to ensure your privacy and data protection.' },
//     { question: 'How do I get a prescription from an online consultation?', answer: 'After the consultation, the doctor will provide a prescription electronically, which you can access through your account.' },
//     { question: 'Can I get a refund if I’m not satisfied with my consultation?', answer: 'If you’re not satisfied, please contact our support team within 24 hours htmlFor a review and possible refund.' }
//   ];

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="faq-section py-5" style={{ background: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)', textAlign: 'center', margin:"auto 0", justifyItems:"center" }}>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="">
//             <h2 className="text-center mb-4" style={{ color: '#333' }}>Frequently Asked Questions</h2>
//             <div className="accordion-wrapper">
//               {faqs.map((faq, index) => (
//                 <div className="card mb-3" key={index} style={{ borderRadius: '8px', overflow: 'hidden', textAlign: 'left' }}>
//                   <div className="card-header" id={`heading${index}`} style={{ background: '#ffffff', borderBottom: '1px solid #ddd' }}>
//                     <h5 className="mb-0">
//                       <button
//                         className="btn btn-link d-flex justify-content-between align-items-center w-100"
//                         type="button"
//                         onClick={() => handleToggle(index)}
//                         style={{ color: '#007bff', fontWeight: 'bold' }}
//                       >
//                         {faq.question}
//                         <span className={`icon ${openIndex === index ? 'open' : ''}`} style={{ fontSize: '1.5rem' }}>
//                           {openIndex === index ? '-' : '+'}
//                         </span>
//                       </button>
//                     </h5>
//                   </div>
//                   <div
//                     id={`collapse${index}`}
//                     className={`collapse ${openIndex === index ? 'show' : ''}`}
//                     aria-labelledby={`heading${index}`}
//                     style={{ background: '#ffffff', borderTop: '1px solid #ddd' }}
//                   >
//                     <div className="card-body">
//                       {faq.answer}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const FAQSection=()=>{
//   return(
//     <section className='section text-center'>
//     <div class="containerr">
//       <div class="accordion">
//         <div class="accordion-item " id="question1">
//           <a class="" href="#question1">
//             <div class=" my-link " style={{textAlign:"center"}}>
//               <p>BRANDING</p>
              
//             </div>
//             <i class="icon ion-md-arrow-forward"></i>
//             <i class="icon ion-md-arrow-down"></i>
//           </a>
//           <div class="answer">
//             <p> We believe in the greater good, we strive to do something for people, we aim to make their lives easier and more enjoyable, we love businesses that keep this</p>
//           </div>
          
//       </div>
//         <div class="accordion-item" id="question2">
//           <a class="accordion-link" href="#question2">
//             <div class="flex ">
//               <p>UX/UI DESIGN</p>
              
//             </div>
//             <i class="icon ion-md-arrow-forward"></i>
//             <i class="icon ion-md-arrow-down"></i>
//           </a>
//           <div class="answer">
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
//           </div>
//       </div>
//         <div class="accordion-item" id="question3">
//           <a class="accordion-link" href="#question3">
//             <div class="flex">
//               <p>FRONTEND DEVELOPMENT</p>
              
//             </div>
           
//           </a>
//           <div class="answer">
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
//           </div>
          
//       </div>
//         <div class="accordion-item" id="question4">
//           <a class="accordion-link" href="#question4">
//             <div>
//               <p>BACKEND DEVELOPMENT</p>
              
//             </div>
//             <i class="icon ion-md-arrow-forward"></i>
//             <i class="icon ion-md-arrow-down"></i>
//           </a>
//           <div class="answer">
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
//           </div>
          
//       </div>
//      </div>
//     </div>
//   </section>
//   )
// }



import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'BRANDING',
      answer: 'We believe in the greater good, we strive to do something for people, we aim to make their lives easier and more enjoyable, we love businesses that keep this'
    },
    {
      question: 'UX/UI DESIGN',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
    },
    {
      question: 'FRONTEND DEVELOPMENT',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
    },
    {
      question: 'BACKEND DEVELOPMENT',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
    }
  ];

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='section text-center'>
      <div className="containerr">
        <div className="accordion">
          {faqData.map((item, index) => (
            <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`} id={`question${index + 1}`}>
              <a className="accordion-link" href={`#question${index + 1}`} onClick={() => toggleActive(index)}>
                <div className="my-link" style={{ textAlign: "center" }}>
                  <p>{item.question}</p>
                </div>
                <i className={`icon ion-md-arrow-forward ${activeIndex === index ? 'hidden' : ''}`}></i>
                <i className={`icon ion-md-arrow-down ${activeIndex === index ? '' : 'hidden'}`}></i>
              </a>
              <div className={`answer ${activeIndex === index ? 'active' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



  return (
    <div>
      {/* <Navbar /> */}
      {/* <Picture/> */}
      {/* <StatsCard/> */}
      {/* <DoctorList /> */}
      <FAQSection/>

    </div>
  );
}

export default PatientDashboard;
