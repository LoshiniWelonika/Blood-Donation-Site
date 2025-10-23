import React from 'react';
import "../static/dashboard.css";

const DonorDashboard = () => {
  return (
    <div className="container">
      <div className="card-wrapper">  

        {/* Header */}
        <header className="header">
          <div className="header-left">
            <h1>Dashboard</h1>
          </div>
        </header>

        {/* Main Content */}
        <div className="metrics-grid">

          {/* Profile Section */}
          <div className="metric-card default">
            <div className="profile-card">
              <div className="profile-header">
                <h2>Profile</h2>
              </div>

              <div className="profile-details">
                <div className="detail-item">
                  <label>Name</label>
                  <p>John Doe</p>
                </div>
                <div className="detail-item">
                  <label>Email</label>
                  <p>john@example.com</p>
                </div>
                <div className="detail-item">
                  <label>Location</label>
                  <p>Colombo</p>
                </div>
                <div className="detail-item">
                  <label>Blood Type</label>
                  <p>O+</p>
                </div>
                <div className="detail-item">
                  <label>Province</label>
                  <p>Western Province</p>
                </div>
                <div className="detail-item">
                  <label>Total Donations</label>
                  <p>5</p>
                </div>
                <div className="detail-item">
                  <label>Next Eligible Donation</label>
                  <p>2025-12-10</p>
                </div>
              </div>
            </div>
          </div>

          {/* Events Section */}
          <div className="metric-card default">
            <section className="events-section">
              <h2>Upcoming Events</h2>

              <div className="events-grid">
                <div className="event-card">
                  <div className="event-image">🩸</div>
                  <div className="event-content">
                    <h3>Blood Donation Drive at City Hall</h3>
                    <div className="event-meta">
                      <span><i className="fa-regular fa-user"></i> Red Cross Society</span>
                      <span><i className="fa-regular fa-clock"></i> 2 days left</span>
                    </div>
                    <button className="btn attend-btn">Mark Attendance</button>
                  </div>
                </div>

                <div className="event-card">
                  <div className="event-image">🏥</div>
                  <div className="event-content">
                    <h3>Community Health Awareness Camp</h3>
                    <div className="event-meta">
                      <span><i className="fa-regular fa-user"></i> Health Org</span>
                      <span><i className="fa-regular fa-clock"></i> 1 week left</span>
                    </div>
                    <button className="btn attend-btn">Mark Attendance</button>
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div> {/* end metrics-grid */}
      </div> {/* end card-wrapper */}
    </div>   /* end container */
  );
};

export default DonorDashboard;
