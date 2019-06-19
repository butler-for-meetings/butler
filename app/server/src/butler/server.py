from flask import Flask
from gevent.pywsgi import WSGIServer


PORT = 5000


app = Flask(__name__)
app.debug = True


@app.route('/')
def index():
    return "Hello World!"


def production():
    http_server = WSGIServer(('0.0.0.0', PORT), app)
    http_server.serve_forever()


def develop():
    app.run(host='0.0.0.0', port=PORT)


if __name__ == '__main__':
    develop()
