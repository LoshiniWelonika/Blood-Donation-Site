import "../static/Login.css"  
import { Link } from "react-router-dom";

const Login = () => {
    return(
  <div className="page">
    <main className="content">
      <section className="card">
        <h2>Register Now</h2>
        <p className="lead">Become a donor and help save lives — fill the short registration form below.</p>

        <form>
          <div className="row">
            <div className="field half">
              <label for="name">Name</label>
              <input id="name" type="text" placeholder="Full name" />
            </div>
            <div className="field half">
              <label for="age">Age</label>
              <input id="age" type="number" min="16" max="100" placeholder="Age" />
            </div>
          </div>

          <div className="row">
            <div className="field half">
              <label>Gender</label>
              <div className="radio-group">
                <label className="radio"><input type="radio" name="gender" value="male"/> Male</label>
                <label className="radio"><input type="radio" name="gender" value="female"/> Female</label>
                <label className="radio"><input type="radio" name="gender" value="other"/> Other</label>
              </div>
            </div>
            <div className="field half">
              <label for="phone">Phone</label>
              <input id="phone" type="text" placeholder="07x-xxxxxxx" />
            </div>
          </div>

          <div className="row">
            <div className="field half">
              <label for="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="field half">
              <label for="password">Password</label>
              <input id="password" type="password" placeholder="Choose a password" />
            </div>
          </div>

          <div className="row">
            <div className="field half">
              <label for="blood">Blood Type</label>
              <select id="blood">
                <option value="">Select Blood Type</option>
                <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
                <option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
              </select>
            </div>
            <div className="field half">
              <label for="city">City</label>
              <input id="city" type="text" placeholder="City" />
            </div>
          </div>

          <div className="field">
            <label for="province">Province</label>
            <select id="province">
              <option value="">Select Province</option>
              <option>Central Province</option>
              <option>Eastern Province</option>
              <option>Northern Province</option>
              <option>North Central Province</option>
              <option>North Western Province</option>
              <option>Sabaragamuwa Province</option>
              <option>Southern Province</option>
              <option>Uva Province</option>
              <option>Western Province</option>
            </select>
          </div>

          <div className="row">
            <div className="field half">
              <label for="times">Number of Times Donated</label>
              <input id="times" type="number" min="0" placeholder="0" />
            </div>
            <div className="field half">
              <label for="last">Last Donated Date</label>
              <input id="last" type="date" />
            </div>
          </div>

          <div className="field">
            <label>I would like to Donate Blood</label>
            <div className="radio-group">
              <label className="radio"><input type="radio" name="freq"/> Every 4 Months</label>
              <label className="radio"><input type="radio" name="freq"/> Every 6 Months</label>
              <label className="radio"><input type="radio" name="freq"/> Once a Year</label>
            </div>
          </div>

          <div className="row">
            <div className="field half">
              <label>Are you suffering from any long term illness?</label>
              <div className="radio-group"><label className="radio"><input type="radio" name="illness"/> Yes</label><label className="radio"><input type="radio" name="illness"/> No</label></div>
            </div>
            <div className="field half">
              <label for="illnessdesc">Describe the Illness</label>
              <input id="illnessdesc" type="text" placeholder="If yes, describe" />
            </div>
          </div>

          <div className="row">
            <div className="field half">
              <label>Are you taking any medicine?</label>
              <div className="radio-group"><label className="radio"><input type="radio" name="meds"/> Yes</label><label className="radio"><input type="radio" name="meds"/> No</label></div>
            </div>
            <div className="field half">
              <label for="meddesc">Description</label>
              <input id="meddesc" type="text" placeholder="If yes, describe" />
            </div>
          </div>

          <div className="row">
            <div className="field half">
              <label>Have you undergone any surgery?</label>
              <div className="radio-group"><label className="radio"><input type="radio" name="surg"/> Yes</label><label className="radio"><input type="radio" name="surg"/> No</label></div>
            </div>
            <div className="field half">
              <label for="surgdesc">Description</label>
              <input id="surgdesc" type="text" placeholder="If yes, describe" />
            </div>
          </div>

          <div className="actions">
            <button type="submit" className="btn primary">Register</button>
            <button type="reset" className="btn ghost">Reset</button>
          </div>
        </form>
      </section>

      <aside className="sidebar">
        <div className="card info">
          <img src="" alt="logo" className="logo-img" />
          <h3>Need Blood?</h3>
          <p>If you need blood or want to donate in Sri Lanka, register and get notified when there's a match.</p>
          <p className="availability">24x7 — 365 Days</p>
        </div>

        <div className="card">
          <h4>Contact</h4>
          <p>contact@blooddonation.lk</p>
          <p>srilanka · Map link</p>
        </div>

        <div className="card footer-card">
          <small>© 2024 All Rights Reserved by Blood Finder</small>
        </div>
      </aside>
    </main>
  </div>
    )
}


export default Login