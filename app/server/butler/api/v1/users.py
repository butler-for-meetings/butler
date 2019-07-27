from butler.db.models import User
from flask import Blueprint, Response, request

USERS_BLUEPRINT = Blueprint('users', __name__)


@USERS_BLUEPRINT.route('')
def index():
    users = User.objects.all()
    return Response(response=users.to_json(),
                    status=200,
                    mimetype="application/json")


@USERS_BLUEPRINT.route('create', methods=['POST'])
def create_user():
    user = User.objects.create(**request.get_json())
    return Response(response=user.to_json(),
                    status=200,
                    mimetype="application/json")
