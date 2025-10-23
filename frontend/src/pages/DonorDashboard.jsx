import React from 'react';
import "../static/dashboard.css" 

const DonorDashboard = () => {
  return (
  <div class="container">
    <div class="profile">
      <h2>Profile Details</h2>
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Blood Type:</strong> O+</p>
      <p><strong>City:</strong> Colombo</p>
      <p><strong>Province:</strong> Western Province</p>
      <p><strong>Total Donations:</strong> 5</p>
      <p><strong>Next Eligible Donation:</strong> 2025-12-10</p>
    </div>

    <div class="events">
      <h2>Upcoming Events</h2>

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
  )
}

export default DonorDashboard;
