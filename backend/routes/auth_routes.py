from flask import Blueprint, request, redirect, url_for, jsonify, session
from werkzeug.security import generate_password_hash
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

    user = User.query.filter_by(name=name).first()

    if user:
        return jsonify({"error":"User already exists"})
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

    


