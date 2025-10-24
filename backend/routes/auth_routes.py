from flask import Blueprint, request, jsonify, session
from extentions import db
from models.user_model import User

auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data.get("name")
    age = data.get("age")
    gender = data.get("gender") 
    phone = data.get("phone")
    email = data.get("email")
    password = data.get("password")
    blood = data.get("blood")
    city = data.get("city")
    province = data.get("province")
    times = data.get("times")
    lastDonatedDate = data.get("lastDonatedDate")
    frequency = data.get("frequency")
    isIllness = data.get("isIllness")
    illnessDescription = data.get("illnessDescription")
    isMedicine = data.get("isMedicine")
    medicineDescription = data.get("medicineDescription")
    isSurgery = data.get("isSurgery")
    surgeryDescription = data.get("surgeryDescription")

    existing_user = User.query.filter_by(email=email).first()

    if existing_user:
        return jsonify({"error": "User already exists"}), 400
    
    else:
        new_user = User(
            name=name,
            age = age,
            gender = gender,
            phone = phone,
            email = email,
            blood = blood,
            city = city,
            province = province,
            times = times,
            lastDonatedDate = lastDonatedDate,
            frequency = frequency,
            isIllness = isIllness,
            illnessDescription = illnessDescription,
            isMedicine = isMedicine,
            medicineDescription = medicineDescription,
            isSurgery = isSurgery,
            surgeryDescription = surgeryDescription
            )
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()
        session['name'] = name

        return jsonify({"message":"New User Registered",
                        "user_id": new_user.id}), 201


@auth_bp.route('/login', methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")  

    user = User.query.filter_by(email=email).first()

    if user and user.check_password(password):
        session['user_id'] = user.id
        session['user_name'] = user.name

        return jsonify({"message":"User Successfully Logged In",
                        "user_id": user.id}), 200
    else:
        return jsonify({"error":"Invalid email or password"})


