import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../static/success.css";

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-card">
        <CheckCircle className="success-icon" size={80} />
        <h2>Registration Successful!</h2>
        <p>
          Thank you for joining us. Now you can start your journey.
        </p>
        <button className="login-btn" onClick={() => navigate("/donordashboard")}>
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
