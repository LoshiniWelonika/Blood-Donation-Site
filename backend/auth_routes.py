from flask import Blueprint, request, redirect, session, url_for
from werkzeug.security import generate_password_hash
from app import db
from models.user_model import User

auth_bp = Blueprint('auth_bp', __name__)

