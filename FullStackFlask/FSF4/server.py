from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime,timezone


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///fsf4.db"

db = SQLAlchemy(app)

class User(db.Model):
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(100), nullable = False)
   email = db.Column(db.String(100), nullable = False)
   created_at = db.Column(db.DateTime, default= datetime.now(timezone.utc))
  
@app.route('/')
def index():
   users = User.query.all() #[<User>]

   return render_template("index.html", users = users)

@app.route('/adduserform')
def adduserform():
   return render_template("createuser.html")


@app.route('/create', methods = ['POST'])
def create():
   name = request.form['name']
   email = request.form['email']

   user = User(name = name, email = email)

   db.session.add(user)

   try:
      db.session.commit()
   except Exception as e:
      print("Error: ", e)
      db.session.rollback()

   return redirect('/')

@app.route('/edituser/<int:id>', methods = ['POST'])
def edituser(id):
   name = request.form['name']
   email = request.form['email']

   user = User.query.get(id)

   user.name = name
   user.email = email

   try:
      db.session.commit()
   except Exception as e:
      print("Error: ", e)
      db.session.rollback()

   return redirect('/')

@app.route('/show/<int:id>')
def show(id):
   user = User.query.get(id)

   return render_template("user.html", user = user)

@app.route('/edituserform/<int:id>')
def edituserform(id):
   return render_template("edituser.html", id = id)


@app.route('/delete/<int:id>')
def delete(id):
   user = User.query.get(id)

   db.session.delete(user)

   try:
      db.session.commit()
   except Exception as e:
      print("Error: ", e)
      db.session.rollback()

   return redirect('/')

if __name__ == "__main__":
   with app.app_context():
        db.create_all()
        app.run(debug=True)