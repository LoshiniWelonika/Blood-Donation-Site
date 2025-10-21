import logo from "../assets/logo.png"
import "../static/home.css"

const NavBar = () => {
    return(
        <header>
        <div className="logo"><img src={logo} alt="logo"/></div>
        <nav>
            <a href="#about">How To Donate</a>
            <a href="#stats">Eligibility</a>
            <a href="#contact">About Us</a>
        </nav>
       </header>
    )
}

export default NavBar;