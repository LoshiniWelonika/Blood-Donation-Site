import React from 'react'

const RequestCard = ({patient, hospital, urgency}) => {
  return (
    <div className="event-card">
                  <div className="event-content">
                    <h3>{patient}</h3>
                    <div className="event-meta">
                      <span>{hospital}</span>
                      <span>{urgency}</span>
                    </div>
                    <button className="btn attend-btn">See Details</button>
                  </div>
                </div>
  )
}

export default RequestCard