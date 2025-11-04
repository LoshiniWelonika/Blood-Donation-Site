import React from "react";
import "../static/healthTips.css"; 

const HealthTips = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="ht-hero" id="home">
        <div className="ht-container ht-hero-container">
          <div className="ht-hero-content">
            <p className="ht-hero-label">WHO WE ARE</p>
            <h1 className="ht-hero-title">
              Ways to help
              <span className="ht-title-underline"></span>
            </h1>
            <div className="ht-hero-text">
              <p>
                This web is totally based on blood donation system. It helps the
                community by providing blood to those in need.
              </p>
              <p>
                In Lahore alone, about 30 blood bottles are needed per hour.
                This system makes blood easier to find.
              </p>
            </div>
          </div>
          <div className="ht-hero-image">
            <img
              src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=450&fit=crop"
              alt="Blood donation illustration"
            />
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="ht-health-tips">
        <div className="ht-container">
          <div className="ht-section-header">
            <h2>Health & Wellness Tips for Regular Blood Donors</h2>
            <p>
              Staying healthy ensures you can continue to donate blood safely
              and help save lives.
            </p>
          </div>

          <div className="ht-tips-grid">
            {/* Each Tip Card (same layout, multiple cards) */}
            <div className="ht-tip-card">
              <div className="ht-tip-icon">
                <i className="fas fa-apple-alt"></i>
              </div>
              <div className="ht-tip-content">
                <h3>Eat Iron-Rich Foods</h3>
                <ul>
                  <li>Spinach, Gotukola, Mukunu Wenna</li>
                  <li>Dhal, chickpeas, soya</li>
                  <li>Fish, chicken, liver</li>
                  <li>Raisins and dates</li>
                </ul>
                <p className="ht-tip-note">
                  💡 Tip: Pair iron-rich foods with Vitamin C.
                </p>
              </div>
            </div>

            <div className="ht-tip-card">
              <div className="ht-tip-icon">
                <i className="fas fa-tint"></i>
              </div>
              <div className="ht-tip-content">
                <h3>Stay Hydrated</h3>
                <p>Drink 6–8 glasses of water daily, especially before donating.</p>
              </div>
            </div>

            <div className="ht-tip-card">
              <div className="ht-tip-icon">
                <i className="fas fa-bed"></i>
              </div>
              <div className="ht-tip-content">
                <h3>Get Enough Rest</h3>
                <p>Sleep 7–8 hours, especially before donation day.</p>
              </div>
            </div>

            <div className="ht-tip-card">
              <div className="ht-tip-icon">
                <i className="fas fa-ban"></i>
              </div>
              <div className="ht-tip-content">
                <h3>Avoid Smoking & Alcohol</h3>
                <p>Avoid smoking 2 hours before & after donation. Avoid alcohol 24 hours before.</p>
              </div>
            </div>

            <div className="ht-tip-card">
              <div className="ht-tip-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <div className="ht-tip-content">
                <h3>Stay Active</h3>
                <p>Light walking 15–30 minutes daily improves circulation.</p>
              </div>
            </div>
          </div>

          <div className="ht-hemoglobin-card">
            <div className="ht-tip-icon">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <div className="ht-tip-content">
              <h3>Check Hemoglobin Regularly</h3>
              <p>Increase iron foods and reduce tea/coffee if low.</p>
            </div>
          </div>

          <div className="ht-remember-box">
            <h3>🤝 Remember</h3>
            <p>
              Your <strong>health comes first</strong>. Stay strong to keep saving lives.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthTips;
