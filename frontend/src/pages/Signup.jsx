import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/Login.css";
import logo from "../assets/logo.png";

const Signup = () => {
  const navigate = useNavigate();

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
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle radio buttons (checked => set value)
    if (type === "radio") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/auth/register", {
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
        navigate("/successMessage", { state:  {userId: data.user_id} }); // navigate on successful registration
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <div className="page">
      <main className="content">
        <section className="card">
          <h2>Register Now</h2>
          <p className="lead">
            Become a donor and help save lives — fill the short registration form below.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Name & Age */}
            <div className="row">
              <div className="field half">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field half">
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  type="number"
                  name="age"
                  min="16"
                  max="100"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Gender & Phone */}
            <div className="row">
              <div className="field half">
                <label>Gender</label>
                <div className="radio-group">
                  {["Male", "Female", "Other"].map((g) => (
                    <label key={g} className="radio">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={formData.gender === g}
                        onChange={handleChange}
                        required
                      />{" "}
                      {g}
                    </label>
                  ))}
                </div>
              </div>
              <div className="field half">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="07x-xxxxxxx"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email & Password */}
            <div className="row">
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field half">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Choose a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Blood Type & City */}
            <div className="row">
              <div className="field half">
                <label htmlFor="blood">Blood Type</label>
                <select
                  id="blood"
                  name="blood"
                  value={formData.blood}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Blood Type</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="field half">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Province */}
            <div className="field">
              <label htmlFor="province">Province</label>
              <select
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
              >
                <option value="">Select Province</option>
                {[
                  "Central Province",
                  "Eastern Province",
                  "Northern Province",
                  "North Central Province",
                  "North Western Province",
                  "Sabaragamuwa Province",
                  "Southern Province",
                  "Uva Province",
                  "Western Province",
                ].map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Donations & Date */}
            <div className="row">
              <div className="field half">
                <label htmlFor="times">Number of Times Donated</label>
                <input
                  id="times"
                  type="number"
                  name="times"
                  min="0"
                  placeholder="0"
                  value={formData.times}
                  onChange={handleChange}
                />
              </div>
              <div className="field half">
                <label htmlFor="lastDonatedDate">Last Donated Date</label>
                <input
                  id="lastDonatedDate"
                  type="date"
                  name="lastDonatedDate"
                  value={formData.lastDonatedDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Frequency */}
            <div className="field">
              <label>I would like to Donate Blood</label>
              <div className="radio-group">
                {["4 months", "6 months", "year"].map((f) => (
                  <label key={f} className="radio">
                    <input
                      type="radio"
                      name="frequency"
                      value={f}
                      checked={formData.frequency === f}
                      onChange={handleChange}
                      required
                    />{" "}
                    {f === "year" ? "Once a Year" : `Every ${f}`}
                  </label>
                ))}
              </div>
            </div>

            {/* Illness, Medicine, Surgery */}
            {["isIllness", "isMedicine", "isSurgery"].map((field) => (
              <div className="row" key={field}>
                <div className="field half">
                  <label>
                    {field === "isIllness"
                      ? "Are you suffering from any long term illness?"
                      : field === "isMedicine"
                      ? "Are you taking any medicine?"
                      : "Have you undergone any surgery?"}
                  </label>
                  <div className="radio-group">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="radio">
                        <input
                          type="radio"
                          name={field}
                          value={option}
                          checked={formData[field] === option}
                          onChange={handleChange}
                          required
                        />{" "}
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="field half">
                  <label htmlFor={`${field}Description`}>Description</label>
                  <input
                    id={`${field}Description`}
                    type="text"
                    name={`${field}Description`}
                    placeholder="If yes, describe"
                    value={formData[`${field}Description`]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}

            <div className="actions">
              <button type="submit" className="btn primary">
                Register
              </button>
              <button type="reset" className="btn ghost">
                Reset
              </button>
            </div>
          </form>
        </section>

        {/* Sidebar Info */}
        <aside className="sidebar">
          <div className="card info">
            <img src={logo} alt="logo" className="logo-img" />
            <h3>Need Blood?</h3>
            <p>
              If you need blood or want to donate in Sri Lanka, register and get notified when there's a match.
            </p>
            <p className="availability">24x7 — 365 Days</p>
          </div>

          <div className="card">
            <h4>Contact</h4>
            <p>contact@blooddonation.lk</p>
            <p>
              Sri Lanka ·{" "}
              <a href="https://goo.gl/maps/" target="_blank" rel="noopener noreferrer">
                Map link
              </a>
            </p>
          </div>

          <div className="card footer-card">
            <small>© 2024 All Rights Reserved by Blood Finder</small>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Signup;
