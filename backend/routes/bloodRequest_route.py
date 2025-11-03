from flask import Blueprint, request, jsonify, session
from extentions import db
from models.bloodRequest_model import BloodRequest

request_bp = Blueprint('request_bp', __name__)

@request_bp.route('/bloodRequest', methods=['POST'])
def bloodRequest():
    data = request.get_json()
    patient_name = data.get("patient_name")
    blood = data.get("blood")
    urgency = data.get("urgency")
    quantity = data.get("quantity")
    hospital = data.get("hospital")
    contact_person = data.get("contact_person")
    phone = data.get("phone")
    notes= data.get("notes")

    new_bloodRequest = BloodRequest(
            patient_name=patient_name,
            blood = blood,
            urgency = urgency,
            quantity = quantity,
            hospital = hospital,
            contact_person = contact_person,
            phone = phone,
            notes = notes
    )

    db.session.add(new_bloodRequest)
    db.session.commit()

    return jsonify ({"message":"New Blood Request Posted",
                     "patient_name": new_bloodRequest.patient_name}), 201