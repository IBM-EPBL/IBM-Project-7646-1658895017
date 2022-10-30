from flask import Flask, render_template, redirect
from object_config import object_files

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html', files = object_files)

if __name__=='__main__':
    app.run()