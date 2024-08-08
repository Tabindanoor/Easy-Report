import React, { useEffect, useState } from 'react';
import "./PateintDashboard.css";
import logo from "../public/logo.png";
import { FaArrowLeft, FaArrowRight, FaBriefcase, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import doctorImage from "../public/doctor.png";
import { FaUserMd, FaSmile, FaStar, FaUsers, FaCalendarCheck } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


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
          <p style={{fontWeight:"bold", textAlign:"center",fontSize:"28px"}}>Search For a Doctor</p>
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




const Footer = () => {
  return (
    <footer className=" text-white pt-5 pb-4 px-5 footer"   >
      <div className="">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase mb-4">About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, eros in cursus egestas, libero sapien facilisis urna, nec tincidunt felis nunc eu nisl.</p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-white">Home</a></li>
              <li><a href="#!" className="text-white">About</a></li>
              <li><a href="#!" className="text-white">Services</a></li>
              <li><a href="#!" className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-12 mb-4">
            <h5 className="text-uppercase mb-4">Contact Us</h5>
            <p><i className="fa fa-home mr-3"></i> 123 Main Street, City, Country</p>
            <p><i className="fa fa-envelope mr-3"></i> email@example.com</p>
            <p><i className="fa fa-phone mr-3"></i> +123 456 7890</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#!" className="text-white">
                  <FaFacebookF />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="text-white">
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="text-white">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="text-white">
                  <FaInstagram />
                </a>
              </li>
            </ul>
            <p className="mt-4 mb-0">© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'We believe in the greater good, we strive to do something for people, we aim to make their lives easier and more enjoyable, we love businesses that keep this',
      answer: 'We believe in the greater good, we strive to do something for people, we aim to make their lives easier and more enjoyable, we love businesses that keep this'
    },
    {
      question: 'We believe in the greater good, we strive to do something for people, we aim to make their lives easier and more enjoyable, we love businesses that keep this',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
    },
    {
      question: 'We believe in the greater good, we strive to do something for people, we aim to make their lives easier and more enjoyable, we love businesses that keep this',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
    },
    {
      question: 'We believe in the greater good, we strive to do something for people, we aim to make their lives easier and more enjoyable, we love businesses that keep this',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
    }
  ];

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=' text-center'>
      <div className="">
        <div className="accordion">
          {faqData.map((item, index) => (
            <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`} id={`question${index + 1}`}>
              <a className="accordion-link" style={{textDecoration:"none",textAlign:"center"}} href={`#question${index + 1}`} onClick={() => toggleActive(index)}>
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


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const Questions = [
    {
      question: "How do I place an order?",
      answer: "You can browse the menu, select your favorite dishes, and add them to your cart. Once you’re ready, proceed to checkout and follow the prompts to complete your order."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods, including credit/debit cards, PayPal, and online payment options like Stripe. You can also choose to pay cash on delivery if available."
    },
    {
      question: "Can I schedule an order for later?",
      answer: "Yes, you can schedule orders for a later time or date during the checkout process. Simply select your preferred delivery time, and we’ll ensure your food arrives fresh and on time."
    },
    {
      question: "What if I have an issue with my order?",
      answer: "If you encounter any issues with your order, please contact our customer support team immediately through the app or website. We are committed to resolving any problems promptly to ensure your satisfaction."
    },
    {
      question: "Can I customize my order?",
      answer: "Yes, you can customize your order by adding special instructions or selecting specific preferences for your dishes during the ordering process. Our kitchen will do its best to accommodate your requests."
    }
  ];

  return (
    <div className="  p-5">
<div className='text-center' style={{textAlign:"center"}}>   
  
           <h2>Frequently Asked  <b>Questions</b></h2>
           </div>
      {Questions.map((question, index) => (
        <div key={index} className=" mb-3">
          <div
            className="card-header  align-items-center"
            onClick={() => handleAccordionClick(index)}
            style={{ cursor: 'pointer' }}
          >

            <div className='d-flex  justify-content-between '>


            <div className="d-flex align-items-center">
              <div className="rounded-circle me-3" style={{ width: '20px', height: '20px' ,backgroundColor:"#448b76"}}></div>
              <h5 className="mb-0">{question.question}</h5>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
              style={{ width: '16px', height: '16px' }}
            >
              {openIndex === index ? (
                <path d="M18 15L12 9L6 15" />
              ) : (
                <path d="M6 9L12 15L18 9" />
              )}
            </svg>


            </div>
<hr />


          </div>
          {openIndex === index && (
            <div className="">
              <p className="">{question.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};



const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.",
    imgSrc: "/examples/images/clients/1.jpg",
    name: "Paula Wilson",
    details: "Media Analyst / SkyNet",
    rating: 4
  },
  {
    text: "Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.",
    imgSrc: "/examples/images/clients/2.jpg",
    name: "Antonio Moreno",
    details: "Web Developer / SoftBee",
    rating: 4
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.",
    imgSrc: "/examples/images/clients/3.jpg",
    name: "Michael Holz",
    details: "Web Developer / DevCorp",
    rating: 4
  },
  {
    text: "Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.",
    imgSrc: "/examples/images/clients/4.jpg",
    name: "Anna Gora",
    details: "Senior Developer / TechGiant",
    rating: 4
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.",
    imgSrc: "/examples/images/clients/5.jpg",
    name: "Martin Sommer",
    details: "SEO Analyst / RealSearch",
    rating: 4
  },
  {
    text: "Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.",
    imgSrc: "/examples/images/clients/6.jpg",
    name: "John Williams",
    details: "Web Designer / UniqueDesign",
    rating: 4
  },
  {
    text: "Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.",
    imgSrc: "/examples/images/clients/6.jpg",
    name: "John Williams",
    details: "Web Designer / UniqueDesign",
    rating: 4
  }
];

const TestimonialCarousel = () => {
  return (
    <div className="container-lg">
      <div className="row">
        <div className="col-sm-12">			
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div><h2 style={{textAlign:"center"}}>Customer <b>Testimonials</b></h2></div>  
            {/* Carousel indicators */}
            <br /><br />
            <ol className="carousel-indicators" >
              {testimonials.map((_, index) => (
                <li
                  key={index}
                  data-target="#myCarousel"
                  data-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                ></li>
              ))}
            </ol>   
            {/* Wrapper for carousel items */}
            <div className="carousel-inner">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>{testimonial.text}</p>
                      </div>
                      <div className="media">
                        <img src={doctorImage} className="mr-3" alt="" />
                        <div className="media-body">
                          <div className="overview">
                            <div className="name"><b>{testimonial.name}</b></div>
                            <div className="details">{testimonial.details}</div>
                            <div className="star-rating">
                              <ul className="list-inline">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <li key={i} className="list-inline-item"><i className="fa fa-star"></i></li>
                                ))}
                                {[...Array(5 - testimonial.rating)].map((_, i) => (
                                  <li key={i} className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                ))}
                              </ul>
                            </div>
                          </div>										
                        </div>
                      </div>
                    </div>
                    {index + 1 < testimonials.length && (
                      <div className="col-sm-6">
                        <div className="testimonial">
                          <p>{testimonials[index + 1].text}</p>
                        </div>
                        <div className="media">
                          <img src={doctorImage} className="mr-3" alt="" />
                          {/* <img src={testimonials[index + 1].imgSrc} className="mr-3" alt="" /> */}
                          <div className="media-body">
                            <div className="overview">
                              <div className="name"><b>{testimonials[index + 1].name}</b></div>
                              <div className="details">{testimonials[index + 1].details}</div>
                              <div className="star-rating">
                                <ul className="list-inline">
                                  {[...Array(testimonials[index + 1].rating)].map((_, i) => (
                                    <li key={i} className="list-inline-item"><i className="fa fa-star"></i></li>
                                  ))}
                                  {[...Array(5 - testimonials[index + 1].rating)].map((_, i) => (
                                    <li key={i} className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                  ))}
                                </ul>
                              </div>
                            </div>										
                          </div>
                        </div>
                      </div>
                    )}
                  </div>			
                </div>
              ))}
            </div>
            <br /><br />
            {/* Carousel controls */}

            {/* <div style={{backgroundColor:"red", color:"black"}}>
            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
              <i className="fa fa-chevron-left"></i>
            </a>
            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
              <i className="fa fa-chevron-right"></i>
            </a>
            </div> */}
          
          </div>
          <br />

        </div>
      </div>
    </div>
  );
};




  return (
    <div>
      <Navbar />
      <Picture/>
      <StatsCard/>
      <DoctorList />
      <FAQ/>
      <TestimonialCarousel/>
      <Footer/>
      
     
    </div>
  );
}

export default PatientDashboard;
