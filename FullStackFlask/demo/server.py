from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime,timezone
import os
from werkzeug.utils import secure_filename


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///demo.db"

app.config['UPLOAD_FOLDER'] = '/Users/abshir24/Desktop/fsmay2025/FullStackFlask/demo/uploads'

db = SQLAlchemy(app)

class User(db.Model):
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(100), nullable = False)
   email = db.Column(db.String(100), nullable = False)
   password = db.Column(db.String(10), nullable = False)
   date_created = db.Column(db.DateTime, default= datetime.now(timezone.utc))


@app.route('/')
def index():
   all_users = User.query.all()
   return render_template("index.html", users = all_users)


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

@app.route('/getuser/<int:user_id>')
def getuser(user_id):
   user = User.query.get(user_id)


   return f"Name: {user.name} Email:{user.email}, Password: {user.password}"

@app.route('/update/<int:id>')
def update_user(id):
   user = User.query.get(id)

   user.name = "Updated Name"
   user.email = "update@update.com"

   try:
      db.session.commit()
   except Exception as e:
      db.session.rollback()
      print("Error:", e)


   return redirect('/')

@app.route('/delete/<int:id>')
def delete_user(id):
   user = User.query.get(id)

   db.session.delete(user)

   try:
      db.session.commit()
   except Exception as e:
      db.session.rollback()
      print("Error:", e)


   return redirect('/')

@app.route('/uploadfile', methods=['POST'])
def uploadfile():
   file = request.files['file']

   filename = secure_filename(file.filename)

   file.save( os.path.join(app.config['UPLOAD_FOLDER'], filename ))

   return "File upload"

if __name__ == "__main__":
   with app.app_context():
        db.create_all()
        app.run(debug=True)