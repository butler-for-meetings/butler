"""Butler server application - implements required api as a REST service."""
from flask import Flask
from gevent.pywsgi import WSGIServer
from api.v1 import users, projects

PORT = 5000
API_PREFIX = '/api/v1/{}'

APP = Flask(__name__)

APP.register_blueprint(users.users_blueprint, url_prefix=API_PREFIX.format('users'))
APP.register_blueprint(projects.projects_blueprint, url_prefix=API_PREFIX.format('projects'))

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
