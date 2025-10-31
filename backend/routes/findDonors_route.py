from flask import Blueprint, request, jsonify, session
from extentions import db
from models.user_model import User

findDonor_bp = Blueprint('findDonor_bp', __name__)


@findDonor_bp.route("/donorlist/<string:blood_type>", methods=["GET"])
def get_donors(blood_type):
    donors = User.query.filter_by(blood=blood_type).all()
    if donors:
        return jsonify([donor.to_dict() for donor in donors]), 200
    else:
        return jsonify({"error":"Not Found"}), 404