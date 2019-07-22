from flask import Blueprint


users_blueprint = Blueprint('blueprint', __name__)


@users_blueprint.route('')
def index():
    return 'USERS!!'


@users_blueprint.route('create_user')
def create_user():
    return 'CREATED USER'
