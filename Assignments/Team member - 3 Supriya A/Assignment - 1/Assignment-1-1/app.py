from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
   return render_template('index.html')
details = []
@app.route('/display-details', methods =["GET", "POST"])
def display_details():
    details = []
    if request.method == "POST":
       name = request.form.get("name")
       email = request.form.get("email")
       number = request.form.get("number")
       details = [name, email, number]
    #    return "Your details is " + name + " " + email + " " + number
    return render_template("form.html", data = details)
if __name__=='__main__':
    app.run()
