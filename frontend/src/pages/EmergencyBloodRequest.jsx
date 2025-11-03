import "../static/bloodRequest.css";
import photo from "../assets/bloodRequest.png";


const EmergencyBloodRequest = () => {
  return (
    <div class="container">
        <div class="form-card">
           
            <div class="header">
                <img src={photo} alt="Medical cityscape illustration" class="header-image" />
                <h1>Emergency Blood Request</h1>
                <p class="subtitle">Fill in the details to request blood urgently</p>
            </div>

            <form id="bloodRequestForm" class="form">
                <div class="form-group">
                    <label for="patientName">Patient Name (Optional)</label>
                    <input type="text" id="patientName" name="patientName" placeholder="Enter patient name" />
                </div>

                <div class="form-group">
                    <label for="bloodGroup">Blood Group Needed *</label>
                    <select id="bloodGroup" name="bloodGroup" required>
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

                <div class="form-group">
                    <label for="urgency">Urgency *</label>
                    <select id="urgency" name="urgency" required>
                        <option value="">Select urgency level</option>
                        <option value="Immediately (within 3 hours)">Immediately (within 3 hours)</option>
                        <option value="Within 6 hours">Within 6 hours</option>
                        <option value="Within 12 hours">Within 12 hours</option>
                        <option value="Within 24 hours">Within 24 hours</option>
                        <option value="Within 2-3 days">Within 2-3 days</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="quantity">Quantity Needed *</label>
                    <select id="quantity" name="quantity" required>
                        <option value="">Select quantity</option>
                        <option value="1 Unit">1 Unit</option>
                        <option value="2 Units">2 Units</option>
                        <option value="3 Units">3 Units</option>
                        <option value="4 Units">4 Units</option>
                        <option value="5+ Units">5+ Units</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="hospital">Hospital / Location *</label>
                    <input type="text" id="hospital" name="hospital" placeholder="e.g., ABC General Hospital, Colombo" required maxlength="200" />
                </div>

                <div class="form-group">
                    <label for="contactPerson">Contact Person *</label>
                    <input type="text" id="contactPerson" name="contactPerson" placeholder="Your name" required maxlength="100" />
                </div>

                <div class="form-group">
                    <label for="contactNumber">Contact Number *</label>
                    <input type="tel" id="contactNumber" name="contactNumber" placeholder="07X XXX XXXX" required minlength="9" maxlength="15" />
                </div>

                <div class="form-group">
                    <label for="notes">Additional Notes (Optional)</label>
                    <textarea id="notes" name="notes" placeholder="e.g., For surgery, donor must be male" rows="3" maxlength="500"></textarea>
                </div>

                <button type="submit" class="submit-btn">SUBMIT REQUEST</button>
            </form>
        </div>
    </div>

    
    


  )
}

export default EmergencyBloodRequest