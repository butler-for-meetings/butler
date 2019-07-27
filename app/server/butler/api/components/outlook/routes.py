from flask import Blueprint, request, Response, session
from butler.api.components.outlook.outlook_services import get_events, get_me
from butler.api.components.outlook.auth_helper import get_signin_url, get_token_from_code

outlook_blueprint = Blueprint('outlook', __name__)

@outlook_blueprint.route('get_events')
def get_outlook_events():
    access_token = session['outlook_access_token']
    events = get_events(access_token)
    return "{}".format(events)

@outlook_blueprint.route('get_token')
def get_token():
    auth_code = request.args.get('code')
    redirect_uri = 'http://localhost:5000/api/outlook/get_token'
    token_res = get_token_from_code(auth_code, redirect_uri)
    access_token = token_res['access_token']
    session['outlook_access_token'] = access_token

    return "got token successfully! {}".format(access_token)
    # return token_res['access_token']

@outlook_blueprint.route('get_me')
def get_me():
    access_token = session['outlook_access_token']
    user = get_me(access_token)
    return "{}".format(user['displayName'])
