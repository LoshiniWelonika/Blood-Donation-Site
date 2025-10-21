import {Link} from "react-router-dom";
import "../static/Login.css"  

const Login = () => {
    return(
        <div className="container">
        <div className="login-container">
        <h1 className="header">Log In to Our Site</h1>

        <form> 
            <div className="input-group">
                <label htmlFor="email">Email address</label>
                <div className="input-field-container">
                    <i className="fa-regular fa-user"></i>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </div>
            </div>

            <div className="input-group"> 
                <label htmlFor="password">Password</label>
                <div className="input-field-container">
                    <i className="fa-solid fa-key"></i>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
            </div>


            <button type="submit" className="btn primary-btn">Log in</button>
        </form>

        <p className="signup-text">
            Don't have an account?  <Link to="/signup">Sign up</Link>   
        </p>
    </div>
    </div>
    )
}


export default Login