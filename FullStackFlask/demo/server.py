from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime,timezone


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///demo.db"

db = SQLAlchemy(app)

class User(db.Model):
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(100), nullable = False)
   email = db.Column(db.String(100), nullable = False)
   password = db.Column(db.String(10), nullable = False)
   date_created = db.Column(db.DateTime, default= datetime.now(timezone.utc))


@app.route('/')
def index():
   return render_template("index.html")


@app.route('/adduser')
def adduser():
   new_user = User(name = "Test Name 2", email="Test email 2", password="password 2")

   db.session.add(new_user)

   db.session.commit()

   return "Test"

@app.route('/retrieveusers')
def retrieveusers():
   users = User.query.all()
   
   for user in users:
      print(f"Name:{user.name}, Email:{user.email}")

   return "Test"

@app.route('/retrieveuser/<int:user_id>')
def retrieveuser(user_id):
   user = User.query.get(user_id)


   return f"Name: {user.name} Email:{user.email}, Password: {user.password}"

if __name__ == "__main__":
   with app.app_context():
        db.create_all()
        app.run(debug=True)
