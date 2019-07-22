from flask import Blueprint, Response, request
from butler.db.models import User

users_blueprint = Blueprint('users', __name__)


@users_blueprint.route('')
def index():
    users = User.objects.all()
    return Response(response=users.to_json(), status=200, mimetype="application/json")


@users_blueprint.route('create', methods=['POST'])
def create_user():
    user = User.objects.create(**request.get_json())
    return Response(response=user.to_json(), status=200, mimetype="application/json")
