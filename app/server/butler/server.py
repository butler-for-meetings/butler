"""Butler server application - implements required api as a REST service."""
import os

from flask_api import FlaskAPI
from mongoengine import connect
from gevent.pywsgi import WSGIServer

from flask import request
from butler.api.v1 import users, projects, discussion, tasks
from butler.api.components.outlook.routes import outlook_blueprint


PORT = 5000
API_PREFIX = '/api/v1/{}'

APP = FlaskAPI(__name__)
APP.secret_key = b'_5#y2L"F3Q8z\n\xec]/'

APP.register_blueprint(users.users_blueprint,
                       url_prefix=API_PREFIX.format('users'))

APP.register_blueprint(projects.projects_blueprint,
                       url_prefix=API_PREFIX.format('projects'))

APP.register_blueprint(discussion.discussions_blueprint,
                       url_prefix=API_PREFIX.format('discussion'))

APP.register_blueprint(tasks.tasks_blueprint,
                       url_prefix=API_PREFIX.format('tasks'))

APP.register_blueprint(outlook_blueprint,
                       url_prefix=API_PREFIX.format('outlook'))

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
    connection_string = os.getenv('BUTLER_CONNECTION_STRING')
    if connection_string:
        connect(host=connection_string)
    develop()
