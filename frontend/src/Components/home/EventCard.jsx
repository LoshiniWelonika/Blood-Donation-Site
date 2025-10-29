const EventCard = ({ img, eventName, location, timeLeft }) => {
  return (
    <div className="event-card">
      
      <div 
        className="event-image"
        style={{ 
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      <div className="event-content">
        <h3 className="event-title">{eventName}</h3>

        <div className="event-meta">
          <span>{location}</span>
          <span>{timeLeft}</span>
        </div>
      </div>

    </div>
  );
};

export default EventCard;
