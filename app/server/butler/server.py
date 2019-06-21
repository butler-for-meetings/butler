"""Butler server application - implements required api as a REST service."""
from flask import Flask
from gevent.pywsgi import WSGIServer


PORT = 5000


APP = Flask(__name__)


@APP.route('/api/projects')
def index():
    """Example route for testings."""
    return "Hello World!"


def production():
    """Start server application in production mode - wsgi server."""
    http_server = WSGIServer(('0.0.0.0', PORT), APP)
    http_server.serve_forever()


def develop():
    """Start server application in development mode - wsgi server."""
    APP.run(host='0.0.0.0', port=PORT, debug=True)


if __name__ == '__main__':
    develop()
