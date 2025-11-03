from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from extentions import db
from routes.auth_routes import auth_bp 
from routes.user_routes import user_bp 
from routes.findDonors_route import findDonor_bp 
from routes.bloodRequest_route import request_bp 


app = Flask(__name__)
CORS(app) 

app.secret_key = "fslgkjsglkshiw"




#Configure SQLAlchemy
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///blood_donation.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app) 


app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(findDonor_bp, url_prefix='/api')
app.register_blueprint(request_bp, url_prefix='/api')



with app.app_context():
    db.create_all()






if __name__ == "__main__":
    app.run(debug=True) 
