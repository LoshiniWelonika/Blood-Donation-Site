const FeatureCard = ({className, icon, title, desc, req}) => {
    return (
        <div className={className}>
                        <div className="feature-icon">
                            {icon}
                        </div>
                        <h3 className="feature-title">{title}</h3>
                        <p className="feature-description">{desc}</p>
                        <button className="btn btn-primary btn-sm">{req}</button>
        </div>
    )
}

export default FeatureCard;