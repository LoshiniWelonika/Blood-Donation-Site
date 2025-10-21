import {Link} from "react-router-dom";
import "../static/Login.css"  

const Login = () => {
    return(
  <div class="page">
      <div class="card">
        <h2>Login</h2>
        <p class="lead">Access your donor or admin account.</p>

        <form action="#" method="post">
          <div class="field">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div class="field">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>

          <div class="actions">
            <button type="submit" class="btn primary">Login</button>
            <a href="register.html" class="btn ghost">Create Account</a>
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