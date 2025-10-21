import "../static/home.css"
import backgroundImg from "../assets/background.jpg"


const TopicSection = () => {
    return(
    <section className="hero-section" style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="hero-content"> 
            <h1>Blood Matters</h1>
            <h2>Donate Blood, Save Lives.</h2>
            <p>Every donation is a lifeline. Join our community and make a real difference today.</p>
            <div className="cta-buttons">
                <a href="/register.html" className="btn btn-primary"><i className="fas fa-hand-holding-heart"></i> Register as Donor</a>
                <a href="/find.html" className="btn btn-secondary"><i className="fas fa-search"></i> Find Donor</a>
            </div>
        </div>
    </section>
    )
}

export default TopicSection;
