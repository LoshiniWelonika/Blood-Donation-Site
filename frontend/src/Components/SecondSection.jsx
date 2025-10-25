import "../static/home.css";
import SectionHeader from "./SectionHeader";
import nursePhoto from "../assets/nurse.png";

const SecondSection = () => {
    return (
        <section className="speciality-section">
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
                    <img src={nursePhoto} alt="" />
                </div>
            </div>
    </section>
    );
};

export default SecondSection; 
