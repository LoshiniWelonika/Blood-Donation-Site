import "../static/bloodRequest.css";
import photo from "../assets/bloodRequest.png";
import { useState } from "react";


const EmergencyBloodRequest = () => {
    const [formData, setFormData] = useState({     
        patient_name: "",
        blood: "",
        urgency: "",
        quantity: "",
        hospital: "",
        contact_person: "",
        phone: "",
        notes: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://127.0.0.1:5000/api/bloodRequest",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if(response.ok){
                alert("Your Request was posted successfully. Our donors will contact you immediatly.");

                 setFormData({
                patient_name: "",
                blood: "",
                urgency: "",
                quantity: "",
                hospital: "",
                contact_person: "",
                phone: "",
                notes: ""
            });

            }else{
                alert("Posting Failed")
            }
        }catch (error){
            alert("Something went wrong. Try again!")
        }
    }



  return (
    <div className="container">
        <div className="form-card">
           
            <div className="header">
                <img src={photo} alt="Medical cityscape illustration" className="header-image" />
                <h1>Emergency Blood Request</h1>
                <p className="subtitle">Fill in the details to request blood urgently</p>
            </div>

            <form id="bloodRequestForm" className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="patientName">Patient Name (Optional)</label>
                    <input type="text" id="patientName" name="patient_name" placeholder="Enter patient name" 
                        value={formData.patient_name}
                        onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label for="bloodGroup">Blood Group Needed *</label>
                    <select id="bloodGroup" name="blood" value={formData.blood}
                        onChange={handleChange} required>
                        <option value="">Select blood group</option>
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

                <div className="form-group">
                    <label for="urgency">Urgency *</label>
                    <select id="urgency" name="urgency" value={formData.urgency}
                        onChange={handleChange} required>
                        <option value="">Select urgency level</option>
                        <option value="Immediately (within 3 hours)">Immediately (within 3 hours)</option>
                        <option value="Within 6 hours">Within 6 hours</option>
                        <option value="Within 12 hours">Within 12 hours</option>
                        <option value="Within 24 hours">Within 24 hours</option>
                        <option value="Within 2-3 days">Within 2-3 days</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="quantity">Quantity Needed *</label>
                    <select id="quantity" name="quantity" value={formData.quantity}
                        onChange={handleChange} required>
                        <option value="">Select quantity</option>
                        <option value="1 Unit">1 Unit</option>
                        <option value="2 Units">2 Units</option>
                        <option value="3 Units">3 Units</option>
                        <option value="4 Units">4 Units</option>
                        <option value="5+ Units">5+ Units</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="hospital">Hospital / Location *</label>
                    <input type="text" id="hospital" name="hospital" placeholder="e.g., ABC General Hospital, Colombo" 
                        value={formData.hospital} onChange={handleChange} required maxlength="200" />
                </div>

                <div className="form-group">
                    <label for="contactPerson">Contact Person *</label>
                    <input type="text" id="contactPerson" name="contact_person" placeholder="Your name" 
                    value={formData.contact_person} onChange={handleChange}required maxlength="100" />
                </div>

                <div className="form-group">
                    <label for="contactNumber">Contact Number *</label>
                    <input type="tel" id="contactNumber" name="phone" placeholder="07X XXX XXXX" 
                    value={formData.phone} onChange={handleChange} required minlength="9" maxlength="15" />
                </div>

                <div className="form-group">
                    <label for="notes">Additional Notes (Optional)</label>
                    <textarea id="notes" name="notes" placeholder="e.g., For surgery, donor must be male" rows="3" maxlength="500"
                    value={formData.notes} onChange={handleChange}></textarea> 
                </div>

                <button type="submit" className="submit-btn">SUBMIT REQUEST</button>
            </form>
        </div>
    </div>

    
    


  )
}

export default EmergencyBloodRequest