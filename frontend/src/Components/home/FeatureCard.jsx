import { Link } from "react-router-dom";

const FeatureCard = ({className, icon, title, desc, req, destination}) => {
    return (
        <div className={className}>
                        <div className="feature-icon">
                            {icon}
                        </div>
                        <h3 className="feature-title">{title}</h3>
                        <p className="feature-description">{desc}</p>
                        <Link to={destination} className="btn btn-primary btn-sm">{req}</Link>
        </div>
    )
}

export default FeatureCard;