import React, {useState} from "react";
import "../static/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "", 
    phone: "",
    email: "",
    password: "",
    blood: "",
    city: "",
    province: "",
    times: "",
    lastDonatedDate: "",
    frequency: "",
    isIllness: "",
    illnessDescription: "",
    isMedicine: "",
    medicineDescription: "",
    isSurgery: "",
    surgeryDescription: "",
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const response = await fetch("http://127.0.0.1:5000/auth/register", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
    } catch(error){
      console.error("Error:", error);
    }
  }



    return(
  <div className="page">
    <main className="content">
      <section className="card">
        <h2>Register Now</h2>
        <p className="lead">Become a donor and help save lives — fill the short registration form below.</p>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="field half">
              <label for="name">Name</label>
              <input id="name" type="text" placeholder="Full name" name="name"
              value={formData.name} onChange={handleChange} />
            </div>
            <div className="field half">
              <label for="age">Age</label>
              <input id="age" type="number" min="16" max="100" placeholder="Age" name="age"
              value={formData.age} onChange={handleChange}/>
            </div>
          </div>

          <div className="row">
            <div className="field half">
              <label>Gender</label>
              <div className="radio-group">
                <label className="radio"><input type="radio" name="gender" value="male" chacked={formData.gender === "Male"} onChange={handleChange}/> Male</label>
                <label className="radio"><input type="radio" name="gender" value="female" chacked={formData.gender === "Female"} onChange={handleChange}/> Female</label>
                <label className="radio"><input type="radio" name="gender" value="other" chacked={formData.gender === "Other"} onChange={handleChange}/> Other</label>
              </div>
            </div>
            <div className="field half">
              <label for="phone">Phone</label>
              <input id="phone" type="text" placeholder="07x-xxxxxxx" name="phone"
              value={formData.phone} onChange={handleChange}/>
            </div>
          </div>

          <div className="row">
            <div className="field half">
              <label for="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" name="email"
              value={formData.email} onChange={handleChange}/>
            </div>
            <div className="field half">
              <label for="password">Password</label>
              <input id="password" type="password" placeholder="Choose a password" name="password"
              value={formData.password} onChange={handleChange}/>
            </div>
          </div>

          <div className="row">
            <div className="field half">
              <label for="blood">Blood Type</label>
              <select id="blood" name="blood" value={formData.blood} onChange={handleChange}>
                <option value="">Select Blood Type</option>
                <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
                <option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
              </select>
            </div>
            <div className="field half">
              <label for="city">City</label>
              <input id="city" type="text" placeholder="City" name="city"
              value={formData.city} onChange={handleChange}/>
            </div>
          </div>

          <div className="field">
            <label for="province">Province</label>
            <select id="province" name="province" value={formData.province} onChange={handleChange}>
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
              <input id="times" type="number" min="0" placeholder="0" name="times"
              value={formData.times} onChange={handleChange}/>
            </div>
            <div className="field half">
              <label for="lastDonatedDate">Last Donated Date</label>
              <input id="lastDonatedDate" type="date" name="lastDonatedDate"/>
            </div>
          </div>

          <div className="field">
            <label>I would like to Donate Blood</label>
            <div className="radio-group">
              <label className="radio"><input type="radio" name="frequency" chacked={formData.frequency === "4 months"} onChange={handleChange}/> Every 4 Months</label>
              <label className="radio"><input type="radio" name="frequency" chacked={formData.frequency === "6 months"} onChange={handleChange}/> Every 6 Months</label>
              <label className="radio"><input type="radio" name="frequency" chacked={formData.frequency === "year"} onChange={handleChange}/> Once a Year</label>
            </div>
          </div>

          <div className="row">
            <div className="field half">
              <label>Are you suffering from any long term illness?</label>
              <div className="radio-group">
                <label className="radio"><input type="radio" name="isIllness" chacked={formData.isIllness === "Yes"} onChange={handleChange}/> Yes</label>
                <label className="radio"><input type="radio" name="isIllness" chacked={formData.isIllness === "No"} onChange={handleChange}/> No</label>
              </div>
            </div>
            <div className="field half">
              <label for="illnessDescription">Describe the Illness</label>
              <input id="illnessDescription" type="text" placeholder="If yes, describe" name="illnessDescription"
              value={formData.illnessDescription} onChange={handleChange}/>
            </div>
          </div>

          <div className="row">
            <div className="field half">
              <label>Are you taking any medicine?</label>
              <div className="radio-group">
                <label className="radio"><input type="radio" name="isMedicine" chacked={formData.isMedicine === "Yes"} onChange={handleChange}/> Yes</label>
                <label className="radio"><input type="radio" name="isMedicine" chacked={formData.isMedicine === "No"} onChange={handleChange}/> No</label>             
              </div>
            </div>
            <div className="field half">
              <label for="medicineDescription">Description</label>
              <input id="medicineDescription" type="text" placeholder="If yes, describe" name="medicineDescription"
              value={formData.medicineDescription} onChange={handleChange}/>
            </div>
          </div>

          <div className="row">
            <div className="field half">
              <label>Have you undergone any surgery?</label>
              <div className="radio-group">
                <label className="radio"><input type="radio" name="isSurgery" chacked={formData.isSurgery === "Yes"} onChange={handleChange}/> Yes</label>
                <label className="radio"><input type="radio" name="isSurgery" chacked={formData.isSurgery === "No"} onChange={handleChange}/> No</label>              
              </div>
            </div>
            <div className="field half">
              <label for="surgeryDescription">Description</label>
              <input id="surgeryDescription" type="text" placeholder="If yes, describe" name="surgeryDescription"
              value={formData.surgeryDescription} onChange={handleChange}/>
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