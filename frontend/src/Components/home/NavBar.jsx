import logo from "../../assets/logo.png";
import "../../static/home.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <img src={logo} width="100px" alt="logo" />
        </div>

        <div className="nav-links">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a href="#why-donate" onClick={(e) => scrollToSection(e, 'why-donate')}>Why Donate</a>
          <a href="#events" onClick={(e) => scrollToSection(e, 'events')}>Events</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a> 
        </div>

        <div className="button-line">
          <Link to="/signup" className="btn btn-primary btn-sm">
            Register as Donor
          </Link>
          <Link to="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
