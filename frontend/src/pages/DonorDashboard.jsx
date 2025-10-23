import React from 'react';
import "../static/dashboard.css" 

const DonorDashboard = () => {
  return (
  <div class="container">
    <div class="card-wrapper">

      <nav class="navigation">
        <div class="logo">
          <div class="logo-icon red"></div>
          <div class="logo-icon yellow"></div>
          <div class="logo-icon green"></div>
          <div class="logo-icon blue"></div>
        </div>
        <div class="nav-buttons">
          <button class="nav-btn active">
            <span class="icon">🏠</span>
            Dashboard
          </button>
          <button class="nav-btn">
            <span class="icon">📅</span>
            Events
          </button>
          <button class="nav-btn">
            <span class="icon">👤</span>
            Profile
          </button>
          <button class="nav-btn">
            <span class="icon">⚙️</span>
            Settings
          </button>
        </div>
      </nav>

    
      <header class="header">
        <div class="header-left">
          <h1>Dashboard</h1>
        </div>
        <div class="header-right">
          <button class="icon-btn">
            <span class="icon">🔔</span>
            <span class="badge">3</span>
          </button>
          <div class="avatar avatar-user">J</div>
        </div>
      </header>

     
      <div class="metrics-grid">

     
        <div class="metric-card default">
          <div class="metric-header">
            <p class="metric-title">Profile Details</p>
          </div>
          <div class="metric-content profile-content">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Blood Type:</strong> O+</p>
            <p><strong>City:</strong> Colombo</p>
            <p><strong>Province:</strong> Western Province</p>
            <p><strong>Total Donations:</strong> 5</p>
            <p><strong>Next Eligible Donation:</strong> 2025-12-10</p>
          </div>
        </div>

        <div class="metric-card default">
          <div class="metric-header">
            <p class="metric-title">Upcoming Events</p>
          </div>
          <div class="metric-content events-content">

            <div class="event-card">
              <div class="event-details">
                <p><strong>Event:</strong> Blood Donation Camp - Colombo</p>
                <p><strong>Date:</strong> 2025-11-05</p>
                <p><strong>Time:</strong> 9:00 AM - 5:00 PM</p>
              </div>
              <button class="btn">Mark Attendance</button>
            </div>

            <div class="event-card">
              <div class="event-details">
                <p><strong>Event:</strong> University Blood Drive</p>
                <p><strong>Date:</strong> 2025-11-20</p>
                <p><strong>Time:</strong> 10:00 AM - 4:00 PM</p>
              </div>
              <button class="btn">Mark Attendance</button>
            </div>

            <div class="event-card">
              <div class="event-details">
                <p><strong>Event:</strong> Community Health Camp</p>
                <p><strong>Date:</strong> 2025-12-01</p>
                <p><strong>Time:</strong> 8:30 AM - 3:30 PM</p>
              </div>
              <button class="btn">Mark Attendance</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

  )
}

export default DonorDashboard;
