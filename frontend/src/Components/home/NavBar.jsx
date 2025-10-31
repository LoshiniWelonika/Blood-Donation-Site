import logo from "../../assets/logo.png";
import "../../static/home.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <img src={logo} width="100px" alt="logo" />
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
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
