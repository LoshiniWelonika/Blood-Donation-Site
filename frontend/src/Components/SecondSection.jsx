import "../static/home.css";

const SecondSection = () => {
    return (
        <>
            <section className="intro-section" id="about">
                <div className="container">
                    <h3>Why Blood Donation Matters</h3>
                    <p>
                        A single blood donation can help up to three people. Blood is essential for emergency treatments, surgeries, chronic illnesses, and trauma care, yet there is a constant shortage. Your selfless act ensures hospitals can meet the demand and saves lives every single day. Be a hero—it's in your blood.
                    </p>
                </div>
            </section>

            <section className="stats-section" id="stats">
                <div className="container">
                    <div className="stat-box">
                        <i className="fas fa-users"></i>
                        <div className="number">34,500+</div>
                        <div className="label">Donors Registered</div>
                    </div>
                    <div className="stat-box">
                        <i className="fas fa-heartbeat"></i>
                        <div className="number">12,800+</div>
                        <div className="label">Lives Impacted</div>
                    </div>
                    <div className="stat-box">
                        <i className="fas fa-hospital"></i>
                        <div className="number">150+</div>
                        <div className="label">Partner Hospitals</div>
                    </div>
                </div>
            </section>

            <footer>
                <p>&copy; 2025 LifeStream. All rights reserved.</p>
            </footer>
        </>
    );
};

export default SecondSection; 
