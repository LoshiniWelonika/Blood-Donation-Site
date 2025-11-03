from extentions import db 

class Request(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    patient_name = db.Column(db.String(30), unique=True, nullable=False)
    blood = db.Column(db.String(4), nullable=False)
    urgency = db.Column(db.String(50), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    hospital = db.Column(db.String(60), nullable=False)
    contact_person = db.Column(db.String(30), nullable=False)
    phone = db.Column(db.String(10), nullable=False)
    notes= db.Column(db.String, nullable=True)
     
    
    def to_dict(self):
        return{
                "id": self.id,
                "patient_name": self.patient_name,
                "blood": self.blood,
                "urgency": self.urgency,
                "quantity": self.quantity,
                "hospital": self.hospital,
                "contact_person": self.contact_person,
                "phone": self.phone,
                "notes": self.notes,
        }