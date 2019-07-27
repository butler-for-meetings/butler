from flask import Blueprint, request, Response, session
from butler.api.components.outlook.outlook_services import get_events, get_me
from butler.api.components.outlook.auth_helper import get_signin_url, get_token_from_code

outlook_blueprint = Blueprint('outlook', __name__)

@outlook_blueprint.route('get_events')
def get_outlook_events():
    access_token = session['outlook_access_token']
    events = get_events(access_token)
    return "{}".format(events)
