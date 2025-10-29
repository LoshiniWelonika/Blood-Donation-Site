import React, { useState, useEffect } from "react";
import "../static/dashboard.css";
import { useLocation } from "react-router-dom";
import ProfileDetails from "../Components/dashboard/ProfileDetails";

const DonorDashboard = () => {
  const location = useLocation();
  const { userId } = location.state || {}; // get userId passed from registration success
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) return;

    fetch(`http://127.0.0.1:5000/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="card-wrapper">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <h1>Dashboard</h1>
            <h3>Welcome, {user.name} 👋</h3>
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

              {Object.entries(user).map(([key, value]) => (
                <ProfileDetails key={key} title={key} content={value} />
              ))}
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
                      <span>Red Cross Society</span>
                      <span>2 days left</span>
                    </div>
                    <button className="btn attend-btn">Mark Attendance</button>
                  </div>
                </div>

                <div className="event-card">
                  <div className="event-image">🏥</div>
                  <div className="event-content">
                    <h3>Community Health Awareness Camp</h3>
                    <div className="event-meta">
                      <span>Health Org</span>
                      <span>1 week left</span>
                    </div>
                    <button className="btn attend-btn">Mark Attendance</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
