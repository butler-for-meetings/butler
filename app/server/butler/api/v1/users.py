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
    data = request.get_json()
    try:
        user = User.objects.create(**data)
        return Response(response=user.to_json(),
                        status=200,
                        mimetype="application/json")
    except TypeError:
        return creation_error(e)

    return "An unknown error occured"
