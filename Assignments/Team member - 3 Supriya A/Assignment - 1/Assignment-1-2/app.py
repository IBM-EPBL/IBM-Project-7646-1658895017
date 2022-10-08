from flask import Flask
import flask_appbuilder 
import flask_bootstrap
import flask_authorize
import flask_login
import flask_security

app = Flask(__name__) 
 
@app.route('/') 
def home():  
    return "Hello world!";  
  
if __name__ =='__main__':  
    app.run(debug = True)  