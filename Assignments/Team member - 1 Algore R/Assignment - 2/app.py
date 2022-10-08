import ibm_db
import sys
import traceback
from flask import Flask, request, render_template, session, redirect, url_for, flash
from db2_config import get_connection
from db2_operation import insert_user_data, isAuthenticate, isUserExists
from flask_debugtoolbar import DebugToolbarExtension
app = Flask(__name__)
app.config['SECRET_KEY'] = 'a'
conn = get_connection()


@app.route('/')
@app.route('/registration', methods=["GET", "POST"])
def registration():
    msg = ""
    details = []
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        rollno = request.form.get("rollno")
        password = request.form.get("password")
        details = [name, email, rollno, password]
        # conn = get_connection(details=details)
        try:
            acc = isUserExists(conn=conn, username=name)
            print("register acc:", acc)
            if acc == False:
                insert_user_data(conn=conn, details=details)
                return redirect(url_for('login'))
            else:
                msg = f"User {name} already exists"
                flash(msg)
        except Exception as exp:
            print("insert failed", exp.__traceback__)
            traceback.print_exc()
            # return "Your details is " + name + " " + email + " " + number
    # return render_template("form.html", data = details)
    return render_template('register.html')
# details = []


@app.route('/login', methods=["GET", "POST"])
def login():
    global user_id
    msg = ''
    print("lg")
    if request.method == 'POST':
        print("post method")
        username = request.form.get("name")
        password = request.form.get('password')
        print(username, password)
        try:
            account = isAuthenticate(conn=conn, username=username, password=password)
            print("statement executed")
            # account = isAuthenticate(username=username, password=password)
            print("login satus", account)
            if (account):
                print(f"acc user name = {account['USERNAME']}")
                session['loggedin'] = True
                session['id'] = account['USERNAME']
                session['USERNAME'] = account['USERNAME']
                user_id = account['USERNAME']

                msg = "Login sucessfull"
                return redirect(url_for('welcome'))
            else:
                msg = "login failed"
            print(msg)
            flash(msg)
        except Exception as exp:
            print("Authentication failed", exp.__traceback__)
        # account = isAuthenticate(username=username, password=password)
      #   return msg
    return render_template('login.html', msg=msg)


@app.route('/welcome')
def welcome():
    return f"<h1>Welcome {user_id}!</h1>"


if __name__ == '__main__':
    # toolbar = DebugToolbarExtension(app)
    app.debug = True
    app.run()
