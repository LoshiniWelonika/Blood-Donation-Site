import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import "../static/Login.css"  

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response status:", response.status);
      console.log("Response data:", data);

      if (response.ok) {
        navigate(`/donordashboard/${ data.user_id}`, { state:  {userId: data.user_id} });
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again!");
    }
  };

    return(
  <div class="page">
      <div class="card">
        <h2>Login</h2>
        <p class="lead">Access your donor or admin account.</p>

        <form action="#" method="post">
          <div class="field">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" 
            value={formData.email}
            onChange={handleChange} required />
          </div>

          <div class="field">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password"
             value={formData.password}
             onChange={handleChange} required />
          </div>

          <div class="actions">
            <button type="submit" class="btn primary" onClick={handleSubmit}>Login</button>
            <Link to={'/signup'} class="btn ghost">Create Account </Link>
          </div>
        </form>
      </div>

     
      <aside class="sidebar">
        <div class="card info">
          <div class="logo-img"></div>
          <h3>Welcome Back!</h3>
          <p>Thank you for being a part of Sri Lanka’s life-saving blood donor community. Please log in to continue.</p>
        </div>

        <div class="card footer-card">
          <small>&copy; 2025 Blood Donation Sri Lanka. All Rights Reserved.</small>
        </div>
      </aside>
    </div>
    )
}


export default Login