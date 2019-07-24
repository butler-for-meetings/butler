"""Butler server application - implements required api as a REST service."""
import os

from flask_api import FlaskAPI
from mongoengine import connect
from flask import request, session
from gevent.pywsgi import WSGIServer
from butler.api.v1 import users, projects, discussion, tasks

from api.outlook.auth_helper import get_signin_url, get_token_from_code
from api.outlook.outlook_services import get_events, get_me



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


@APP.route('/api/projects')
def index():
    """Example route for testings."""
    return "Hello World!"


@APP.route('/api/outlook/getsigininurl')
def get_outlook_sign_in_url():
    redirect_uri = 'http://localhost:5000/api/outlook/gettoken'
    return get_signin_url(redirect_uri)


@APP.route('/api/outlook/gettoken')
def get_token():
    auth_code = request.args.get('code')
    redirect_uri = 'http://localhost:5000/api/outlook/gettoken'
    token_res = get_token_from_code(auth_code, redirect_uri)
    access_token = token_res['access_token']
    session['outlook_access_token'] = access_token

    return "got token successfully! {}".format(access_token)
    # return token_res['access_token']


@APP.route('/api/outlook/getme')
def getme():
    access_token = session['outlook_access_token']
    user = get_me(access_token)
    return "{}".format(user['displayName'])


@APP.route('/api/outlook/getevents')
def get_outlook_events():
    access_token = session['outlook_access_token']
    events = get_events(access_token)
    return "{}".format(events)


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
