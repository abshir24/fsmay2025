from flask import Flask, render_template,request,session,redirect

app = Flask(__name__)

app.secret_key = "secret"

@app.route('/')
def index():
    if "counter" not in session:
        session['counter'] = 1
    else:
        session['counter'] += 1

    return render_template("index.html")

@app.route('/addtwo')
def addtwo():
    if "counter" not in session:
        session['counter'] = 2
    else:
        session['counter'] += 2

    return render_template("index.html")

@app.route('/reset')
def reset():
    del session['counter']

    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)   