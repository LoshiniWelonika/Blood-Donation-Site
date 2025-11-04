import React, { useState, useEffect } from "react";
import "../static/dashboard.css";
import { useLocation } from "react-router-dom";
import ProfileDetails from "../Components/dashboard/ProfileDetails";
import RequestCard from "../Components/dashboard/RequestCard";

const DonorDashboard = () => {
  const location = useLocation();
  const { userId } = location.state || {};

  const [user, setUser] = useState(null);
  const [bloodReqs, setBloodReqs] = useState([]); 

  useEffect(() => {
    if (!userId) return;

    fetch(`http://127.0.0.1:5000/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [userId]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/allRequests`)
      .then((response) => response.json())
      .then((data) => setBloodReqs(data))
      .catch((error) => console.error("Error fetching blood requests:", error));
  }, []); 

  if (!user) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">
      <div className="card-wrapper">

        <header className="dashboard-header">
          <div className="header-left">
            <h1>Dashboard</h1>
            <h3>Welcome, {user.name} 👋</h3>
          </div>
        </header>

        <div className="metrics-grid">

          {/* Profile Section */}
          <div className="metric-card default">
            <div className="profile-card">
              <h2>Profile</h2>
              {Object.entries(user).map(([key, value]) => (
                <ProfileDetails key={key} title={key} content={value} />
              ))}
            </div>
          </div>

          {/* Emergency Requests Section */}
          <div className="metric-card default">
            <section className="events-section">
              <h2>Emergency Blood Requests</h2>

              <div className="events-grid">
                {bloodReqs.length > 0 ? (
                  bloodReqs.map((req, index) => (
                    <RequestCard
                      key={index}
                      patient={req.patient_name}
                      hospital={req.hospital}
                      urgency={req.urgency} 
                    />
                  ))
                ) : (
                  <p>No Emergency blood requests currently</p>
                )}
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
