from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def test():
    return render_template("index.html")

@app.route('/home/<id>')
def home(id):
    return render_template("dynamic.html", id = id)

if __name__ == "__main__":
    app.run(debug=True)   