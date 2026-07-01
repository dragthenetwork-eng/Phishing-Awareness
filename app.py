from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("index.html")


@app.route("/modules")
def modules():
    return render_template("index.html")


@app.route("/quiz")
def quiz():
    return render_template("index.html")


@app.route("/tips")
def tips():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)