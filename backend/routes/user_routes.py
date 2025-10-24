from flask import Blueprint, request, jsonify, session
from extentions import db
from models.user_model import User

user_bp = Blueprint('user_bp', __name__)


@user_bp.route("/user/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = User.query.get(user_id)
    if user:
        return jsonify(user.to_dict())
    else:
        return jsonify({"error":"User not found"}), 404