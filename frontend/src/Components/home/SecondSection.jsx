import "../../static/home.css";
import SectionHeader from "./SectionHeader";
import nursePhoto from "../../assets/nurse.png";
import FeatureCard from "./FeatureCard";

const SecondSection = () => {
    return (
        <>
        <section className="speciality-section" id="about">
            <SectionHeader topic="ABOUT" caption="About Us" />
            <div className="speciality-cards">
                <div className="speciality-card speciality-primary">
                    <div className="speciality-content">
                        <p>
                            Our platform is dedicated to saving lives by connecting blood donors with those in need. 
                            We provide an easy-to-use system where donors can register, manage their profiles, and participate 
                            in upcoming blood donation events.

                            Through our site, hospitals, patients, and donors can quickly find each other, ensuring that urgent 
                            blood requirements are met efficiently. Beyond connecting donors and recipients, we also aim to raise 
                            awareness about the importance of regular blood donation and encourage a culture of giving within the community.

                            Whether you’re looking to donate, receive blood, or join life-saving events, our website makes 
                            the process simple, safe, and impactful. Together, we can make a difference — one donation at a time.
                        </p>
                        <button className="btn btn-secondary">Learn more</button>
                    </div>
                    <img src={nursePhoto} alt="Nurse" />
                </div>
            </div>
            </section>

             <section id="services">
             <SectionHeader topic="SERVICES" caption="Our Main Services"/>
                <div className="features-grid">
           
                    <FeatureCard className="feature-card feature-highlighted" 
                                icon="For Recepients" 
                                title= "Find Donors" 
                                desc="Quickly search and connect with nearby blood donors when you need it most."
                                req="Find Donors"
                                destination="/findDonors"/>

                    <FeatureCard className="feature-card" 
                                icon="For Recepients" 
                                title= "Post Emergency Blood Requests" 
                                desc="Submit urgent blood requests so nearby donors can respond quickly."
                                req="Post Request"
                                destination="/bloodRequest"/>

                    <FeatureCard className="feature-card feature-highlighted" 
                                icon="For Donors" 
                                title= "Join With Our Donor Community" 
                                desc="Sign up easily to become a blood donor and make a life-saving impact."
                                req="Register Now"/>
                    
                    <FeatureCard className="feature-card" 
                                icon="For Donors" 
                                title= "Health Tips & Awareness" 
                                desc="Learn important tips and guidelines to stay healthy and donate safely."
                                req="Learn More"/>
                </div>
              </section>
        </>
    );
};

export default SecondSection;
