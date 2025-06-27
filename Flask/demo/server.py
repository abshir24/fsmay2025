from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def test():
    return render_template("index.html")

@app.route('/home')
def home():
    return "<h1> Hello World Flask </h1>"

if __name__ == "__main__":
    app.run(debug=True)   

