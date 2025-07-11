from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime,timezone


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///fsa12.db"

db = SQLAlchemy(app)

class User(db.Model):
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(100), nullable = False)
   username = db.Column(db.String(100), nullable = False)
   email = db.Column(db.String(100), nullable = False)
   password = db.Column(db.String(10), nullable = False)
   date_created = db.Column(db.DateTime, default= datetime.now(timezone.utc))

@app.route('/')
def index():
   return render_template("index.html")


@app.route('/register', methods = ['POST'])
def register():
   name = request.form['first_name'] + " " + request.form['last_name'] 
   username = request.form['username']
   email = request.form['email']
   password = request.form['password']

   user = User(name = name, username = username, email = email, password = password)

   db.session.add(user)

   try:
      db.session.commit()
   except Exception as e:
      db.session.rollback()
      print("Error:", e)

   return render_template("data.html", user = user)


@app.route('/login', methods = ['POST'])
def login():
   username = request.form['username']
   password = request.form['password']

   user = User.query.filter_by(username = username, password = password).first() 

   if user == None:
      print("User doesn't exist")
      return redirect('/')

   
   return render_template("welcome.html", username = user.username)

if __name__ == "__main__":
   with app.app_context():
        db.create_all()
        app.run(debug=True, port = 5001)
