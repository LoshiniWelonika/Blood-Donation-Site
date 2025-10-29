import "../../static/home.css";
import backgroundImg from "../../assets/background.jpg";
import { Link } from "react-router-dom"; 

const TopicSection = () => {
  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            
            <h1 className="hero-title">
              Donate Blood <br />
              <span className="text-primary">Save Lives</span>
            </h1>
            
            <p className="hero-description">
              A platform built to connect blood donors with those in urgent need. 
              Register as a donor, explore upcoming donation events, and be part 
              of a community that believes in saving lives — one drop at a time.
            </p>
            
            <button className="btn btn-primary btn-lg">Join with us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicSection;
