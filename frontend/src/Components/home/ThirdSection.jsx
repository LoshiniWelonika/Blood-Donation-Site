import eventImg from "../../assets/event.jpg";
import EventCard from "./EventCard";
import SectionHeader from "./SectionHeader";
import "../../static/home.css";

const ThirdSection = () => {
  return (
    <>
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${eventImg})` }}
      >
        <h1
          className="hero-title"
          style={{ color: "white", fontSize: "36px", marginBottom: "25px" }}
        >
          Why Your Donation Matters <br />
        </h1>

        <div className="hero-container">
          <p className="hero-description" style={{ color: "white" }}>
            Every drop of blood you give can bring hope to someone in need. Blood
            cannot be manufactured — it can only come from generous donors like
            you. By donating blood, you’re helping accident victims, surgery
            patients, cancer survivors, and many others who depend on timely
            transfusions to stay alive. A single donation can save up to three
            lives, making your contribution one of the simplest yet most powerful
            acts of kindness. Join hands with us and make a real difference today.
          </p>
        </div>
      </section>

      <SectionHeader topic="EVENTS" caption="Upcoming Events" />

      <section className="events-section">
        <div className="events-grid">
            <EventCard 
                img={"https://i.pinimg.com/1200x/ca/55/0c/ca550cc93e5f09dd7b8fe16ba54104f5.jpg"}
                eventName={"Blood Donation Drive at City Hall"}
                location={"Red Cross Society"}
                timeLeft={"2 days left"}
            />

            <EventCard 
                img={"https://i.pinimg.com/736x/75/35/f0/7535f08ae2dc9693e9de275135f7a4ab.jpg"}
                eventName={"Community Health Awareness Camp"}
                location={"Health Org"}
                timeLeft={"1 Week left"}
            />

            <EventCard 
              img={"https://i.pinimg.com/736x/55/5f/7a/555f7a1d78b65aa902630f7724fcfabe.jpg"}
              eventName={"Blood Donation Awareness Rally"}
              location={"Red Cross Society"}
              timeLeft={"This Weekend"}
            />        
        </div>
      </section>
    </>
  );
};

export default ThirdSection;
