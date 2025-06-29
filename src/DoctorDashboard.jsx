import React, { useState } from 'react';
import "./DoctorDashboard.css"
import logo from "../public/logo.png";
import { FaArrowLeft, FaArrowRight, FaBriefcase, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';



function DoctorDashboard() {
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [showReminders, setShowReminders] = useState(false);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleToggleReminders = () => {
    setShowReminders(!showReminders);
  };


  const YearStats = () => {
    return (
      <div className="bg-dark text-secondary rounded p-4 flex-column justify-content-between">
  <div className="overflow-hidden max-h-170">
    <div className="d-flex flex-nowrap overflow-auto">
      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez'].map((month, index) => (
        <div
          key={month}
          className={`cursor-pointer d-flex flex-column align-items-center ${index === 4 ? 'selected' : ''}`}
          style={{ height: '110px', margin: '10px' }}
        >
          <div
            className={`bg-secondary rounded mb-2 ${index % 4 === 0 ? 'h-100' : index % 4 === 1 ? 'h-50' : index % 4 === 2 ? 'h-75' : 'h-25'}`}
            style={{ width: '20px' }}
          />
          <p className={`text-center ${index === 4 ? 'text-white' : ''}`}>{month}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Stats Info */}
  <div className="mt-4 d-flex align-items-center justify-content-around position-relative">
    <div className="position-relative d-flex flex-column align-items-center">
      <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: '120px', height: '120px' }}>
        <svg viewBox="0 0 36 36" className="position-absolute w-100 h-100">
          <path className="stroke-primary fill-none" style={{ strokeWidth: '3', strokeDasharray: '100,100' }} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path className="stroke-warning fill-none" style={{ strokeWidth: '3', strokeDasharray: '85,100' }} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path className="stroke-info fill-none" style={{ strokeWidth: '3', strokeDasharray: '60,100' }} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path className="stroke-success fill-none" style={{ strokeWidth: '3', strokeDasharray: '30,100' }} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
        <p className="text-white text-center position-absolute" style={{ fontSize: '12px' }}>Total: $2075</p>
      </div>
    </div>

    <div className="d-flex flex-column">
      <p className="mb-2">Most expensive category <br /><span className="text-white">Restaurants & Dining</span></p>
      <p className="mb-2">Updated categories <span className="text-white">2</span></p>
      <p>Bonus payments <span className="text-white">$92</span></p>
    </div>
  </div>
</div>
    );
  };
  


  return (
    <div className="container-fluid h-100 d-flex flex-row">
      <div className="sidebar bg-light p-3 w-25">
        <div className="center align-items-center mx-auto">
          <img src={logo} alt="EasyReport Logo " height={"100px"} className="text-center align-self-center" />
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex align-items-center text-secondary hover-text-primary">
  <svg className="me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px' }}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
  <span>Overview</span>
</li>


<li class="list-group-item d-flex align-items-center text-gray-700 hover:text-blue-500 hover:bg-light">
  <svg class="mr-2" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
  </svg>
  <span>Logout</span>
</li>



<li className="list-group-item d-flex align-items-center text-gray-700 hover:text-blue-500">
  <svg className="me-2" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm-6 9h12" />
  </svg>
  <span>Statistics</span>
</li>

<li className="list-group-item d-flex align-items-center text-gray-700 hover:text-blue-500">
<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H5l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
</svg>

  <span>Messages</span>
</li>

<li className="list-group-item d-flex align-items-center text-gray-700 hover:text-blue-500" onClick={handleToggleReminders}>
  <svg className="me-2" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
  {/* <span>Reminders {showReminders ? ' - ' : ''}</span> */}
  <span>Reminders </span>
  {/* {showReminders && <span className="ms-1 text-blue-500">+ 6</span>} */}
</li>

<li className="list-group-item d-flex align-items-center text-gray-700 hover:text-blue-500">
  <svg className="me-2" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.573-1.065z" />
  </svg>
  <span>Settings</span>
</li>

<li class="list-group-item d-flex align-items-center text-gray-700 hover:text-blue-500">
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
  </svg>
  <span class="ml-3">Logout</span>
</li>


        </ul>
      </div>
      
      <div className="flex-1 bg-light p-3">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h4 className="text-2xl fw-bold">Dashboard Overview</h4>

          <div className="d-flex align-items-center ">
  <input 
    type="text" 
    placeholder="Search any keywords" 
    className="form-control w-100 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow-1" 
  />
  
  <button className="btn btn-outline-secondary ml-2 w-25">
    <svg width="20" height="20" className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </button>

  <button className="btn btn-outline-secondary ml-2 w-25">
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H5l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
    </svg>
  </button>
</div>

         
        </div>
        <div className="mb-4 shadow-sm bg-info rounded-2 d-flex justify-content-between px-5 py-4 align-items-center">
      <div className="text-black">
        <h4 className="fw-bold mb-4">
          <span className='text-secondary'>Hello</span> Tassy Omah,
        </h4>
        <p className="card-text mb-4">
          Have a nice day and don't forget to <br /> take care of your health!
        </p>
        <button className="btn text-success btn-link  text-decoration-none d-flex align-items-center">
          Learn more <FaArrowRight className="ms-2" />
        </button>
      </div>
      <div className="text-center">
        <img src={logo} height="100px" alt="Logo" />
      </div>
    </div>
       

<div className="container-fluid">
      <div className="row">
        <div className="col-md-8">

        <div className="bg-white text-secondary rounded p-4 flex-column justify-content-between">
  <div className="overflow-hidden max-h-170">
    <div className="d-flex flex-nowrap overflow-auto">
      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez'].map((month, index) => (
        <div
          key={month}
          className={`cursor-pointer d-flex flex-column align-items-center ${index === 4 ? 'selected' : ''}`}
          style={{ height: '110px', margin: '10px' }}
        >
          <div
            className={`bg-secondary rounded mb-2 ${index % 4 === 0 ? 'h-100' : index % 4 === 1 ? 'h-50' : index % 4 === 2 ? 'h-75' : 'h-25'}`}
            style={{ width: '20px' }}
          />
          <p className={`text-center ${index === 4 ? 'text-white' : ''}`}>{month}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Stats Info */}
  <div className="mt-4 d-flex align-items-center justify-content-around position-relative">
    <div className="position-relative d-flex flex-column align-items-center">
      <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: '120px', height: '120px' }}>
        <svg viewBox="0 0 36 36" className="position-absolute w-100 h-100">
          <path className="stroke-primary fill-none" style={{ strokeWidth: '3', strokeDasharray: '100,100' }} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path className="stroke-warning fill-none" style={{ strokeWidth: '3', strokeDasharray: '85,100' }} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path className="stroke-info fill-none" style={{ strokeWidth: '3', strokeDasharray: '60,100' }} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path className="stroke-success fill-none" style={{ strokeWidth: '3', strokeDasharray: '30,100' }} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
        <p className="text-white text-center position-absolute" style={{ fontSize: '12px' }}>Total: $2075</p>
      </div>
    </div>

    <div className="d-flex flex-column bg-light p-4 rounded-3 shadow-sm">
      <p className="mb-2">
        <strong>Specialties:</strong> <br />
        <span className="text-primary">Cardiology, Neurology</span>
      </p>
      <p className="mb-2">
        <strong>Patients Treated:</strong> <span className="text-primary">150</span>
      </p>
      <p>
        <strong>Upcoming Consultations:</strong> <span className="text-primary">5</span>
      </p>
    </div>
  </div>
</div>
          {/* <div className="card">
            <div className="card-header">
              Activity
            </div>
            <div className="card-body">
              <canvas id="activityChart" width="400" height="200"></canvas>
            </div>
          </div> */}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Reminders
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <i className="fas fa-running" />
                      <p className="card-text">
                        48min
                        <br />
                        Stretching
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <i className="fas fa-brain" />
                      <p className="card-text">
                        32min
                        <br />
                        Mind training
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Reports
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <i className="fas fa-users" />
                      <p className="card-text">
                        Patients Visit
                        <br />
                        <small className="text-muted">
                          80% decrease
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <i className="fas fa-star" />
                      <p className="card-text">
                        Patient's ratings
                        <br />
                        <small className="text-muted">
                          78% Increase
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <i className="fas fa-bell" />
              <h5 className="card-title">Hourly Rate</h5>
              <p className="card-text">
                $1100
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>


        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-lg font-bold mb-4">Activity</h4>
                <canvas id="activityChart" className="h-64" />
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-lg font-bold mb-4">Reminders</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      <span className="ml-2">48min</span>
                    </div>
                    <span className="text-gray-600">Stretching</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="ml-2">32min</span>
                    </div>
                    <span className="text-gray-600">Mind training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-lg font-bold mb-4">Reports</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="ml-2">Patients Visit</span>
                    </div>
                    <span className="text-gray-600">80% decrease</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="ml-2">Patient's ratings</span>
                    </div>
                    <span className="text-gray-600">78% increase</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="ml-2">Hourly Rate</span>
                  </div>
                  <span className="text-blue-500 font-bold text-xl">1100 $</span>
                </div>
                <div className="position-relative w-32 h-32">
                  <svg className="position-absolute top-0 left-0 w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div className="position-absolute top-50 start-50 translate-middle text-2xl font-bold text-white">86%</div>
                </div>
                <p className="text-center mt-4 text-gray-600">You have achieved 86% of your goals this month</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-lg font-bold mb-4">Charles Robbie</h4>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <img src="/profile-picture.jpg" alt="Profile Picture" className="rounded-circle w-12 h-12" />
                  <div className="text-gray-600">
                    <p>25 years old</p>
                    <p>New York, USA</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <p className="text-gray-600 font-bold">Blood</p>
                    <p className="text-gray-600">O+</p>
                  </div>
                  <div className="col-4">
                    <p className="text-gray-600 font-bold">Height</p>
                    <p className="text-gray-600">186cm</p>
                  </div>
                  <div className="col-4">
                    <p className="text-gray-600 font-bold">Weight</p>
                    <p className="text-gray-600">90kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h4 className="card-title text-lg font-bold mb-4">March</h4>
                  <button className="btn btn-primary">Add reminder</button>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Mon</th>
                      <th scope="col">Tues</th>
                      <th scope="col">Wed</th>
                      <th scope="col">Thu</th>
                      <th scope="col">Fri</th>
                      <th scope="col">Sat</th>
                      <th scope="col">Sun</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>9</td>
                      <td>10</td>
                      <td className="text-blue-500 font-bold">11</td>
                      <td>12</td>
                      <td className="text-blue-500 font-bold">13</td>
                      <td>14</td>
                      <td>15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-lg font-bold mb-4">Upcoming</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="ml-2">Health appointment</span>
                    </div>
                    <span className="text-gray-600">Mr Dok tomm</span>
                  </li>
                  <li className="list-group-item text-gray-600">09:20AM - 11:30</li>
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="ml-2">Meeting with Tok Dalang</span>
                    </div>
                    <span className="text-gray-600">07:00AM - Due Soon</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="ml-2">Hourly Rate</span>
                    </div>
                    <span className="text-blue-500 font-bold text-xl">1100 $</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
