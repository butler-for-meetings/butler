from flask import Blueprint, Response
from butler.db.models import User

users_blueprint = Blueprint('users', __name__)


@users_blueprint.route('')
def index():
    users = User.objects.all()
    return Response(response=users.to_json(), status=200, mimetype="application/json")


@users_blueprint.route('create_user')
def create_user():
    return 'CREATED USER'
