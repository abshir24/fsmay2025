from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/display-name/<name>')
def displayname(name):
    return render_template("name.html", name=name)

@app.route('/display-food/<food>')
def displayfood(food):
    return render_template("food.html", food=food)

@app.route('/display-vacation/<vacation>')
def displayvacation(vacation):
    return render_template("vacation.html", vacation=vacation)

if __name__ == "__main__":
    app.run(debug=True)  