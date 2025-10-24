const ProfileDetails = ({title, content}) => {
    return (
        <div className="detail-item">
                  <label>{title}</label>
                  <p>{content}</p>
        </div>
    )
}

export default ProfileDetails;