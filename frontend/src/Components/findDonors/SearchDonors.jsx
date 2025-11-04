import { useState } from "react";
import "../../static/findDonors.css";

const SearchDonors = () => { 
  const [blood, setBlood] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setBlood(e.target.value);
  };

  const findingDonor = (e) => {
    e.preventDefault(); 

    fetch(`http://127.0.0.1:5000/api/donorlist/${blood}`)
      .then((response) => response.json())
      .then((data) => setResult(data))
      .catch((error) => console.error("Error fetching donor:", error));
  };

  return (
    <>
      {/* Search Form Section */}
      <div className="search-page">
        <div className="search-card">
          <h2>Find Blood Donors</h2>
          <p className="lead">Find and contact the blood donors quickly and easily.</p>

          <form onSubmit={findingDonor}>
            <div className="field">
              <label htmlFor="bloodType">Blood Type:</label>
              <select id="bloodType" required value={blood} onChange={handleChange}>
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="actions">
              <button type="submit" className="btn primary">Find Donors</button>
            </div>
          </form>
        </div>
      </div>

      {/* Table Section - OUTSIDE CARD */}
      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Province</th>
              <th>City</th>
            </tr>
          </thead>

          {result.length > 0 ? (
            <tbody>
              {result.map((donor, index) => (
                <tr key={index}>
                  <td>{donor.name}</td>
                  <td>{donor.phone}</td>
                  <td>{donor.email}</td>
                  <td>{donor.province}</td>
                  <td>{donor.city}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No donors found
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default SearchDonors;
