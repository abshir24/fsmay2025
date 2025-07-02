from flask import Flask, render_template,request

app = Flask(__name__)

@app.route('/')
def test():
    return render_template("index.html", test = "Test")

@app.route('/formdata', methods = ["POST"])
def formdata():
    return render_template("data.html", age = request.form['age'], username = request.form['username'])

if __name__ == "__main__":
    app.run(debug=True)   