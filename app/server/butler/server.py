"""Butler server application - implements required api as a REST service."""
from flask import Flask, request, session

from gevent.pywsgi import WSGIServer
from api.outlook.auth_helper import get_signin_url, get_token_from_code
from api.outlook.outlook_services import *

PORT = 5000


APP = Flask(__name__)
APP.secret_key = b'_5#y2L"F3Q8z\n\xec]/'


@APP.route('/api/projects')
def index():
    """Example route for testings."""
    return "Hello World!"


@APP.route('/api/outlook/getsigininurl')
def get_outlook_sign_in_url():
    REDIRECT_URI = 'http://localhost:5000/api/outlook/gettoken'
    return get_signin_url(REDIRECT_URI)

@APP.route('/api/outlook/gettoken')
def get_token():
    auth_code = request.args.get('code')
    REDIRECT_URI = 'http://localhost:5000/api/outlook/gettoken'
    token_res = get_token_from_code(auth_code, REDIRECT_URI)
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
    develop()
