from extentions import db 
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=True, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    phone = db.Column(db.String(10), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    password_hash = db.Column(db.String(150), nullable=False)
    blood = db.Column(db.String(4), nullable=False)
    city =  db.Column(db.String(25), nullable=False)
    province = db.Column(db.String(25), nullable=False) 
    times = db.Column(db.Integer, nullable=False)
    lastDonatedDate =  db.Column(db.String, nullable=False)
    frequency = db.Column(db.String, nullable=False)
    isIllness = db.Column(db.String(3), nullable=False)
    illnessDescription = db.Column(db.String, nullable=True)
    isMedicine = db.Column(db.String(3), nullable=False)
    medicineDescription = db.Column(db.String, nullable=True)
    isSurgery = db.Column(db.String(3), nullable=False)
    surgeryDescription = db.Column(db.String, nullable=True)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password) 
    
    def to_dict(self):
        return{
                "id": self.id,
                "name": self.name,
                "age": self.age,
                "gender": self.gender,
                "phone": self.phone,
                "email": self.email,
                "blood": self.blood,
                "city": self.city,
                "province": self.province,
                "times": self.times,
                "lastDonatedDate": self.lastDonatedDate,
                "frequency": self.frequency,
                "isIllness": self.isIllness,
                "illnessDescription": self.illnessDescription,
                "isMedicine": self.isMedicine,
                "medicineDescription": self.medicineDescription,
                "isSurgery": self.isSurgery,
                "surgeryDescription": self.surgeryDescription
        }