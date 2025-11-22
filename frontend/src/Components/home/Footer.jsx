import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import "../../static/home.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h3 className="footer-title">BloodCare</h3>
          <p className="footer-text">
            Saving lives, one drop at a time. Join our mission to make blood easily available for all in need.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#donate">Become a Donor</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Mail size={20} /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BloodCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
