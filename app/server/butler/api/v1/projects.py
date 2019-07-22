from flask import Blueprint, request, Response
from butler.db.models import Project
from json import *

projects_blueprint = Blueprint('projects', __name__)
@projects_blueprint.route("<string:id>")
def get_project(id):
    project = Project.objects.get(pk=id)
    return project.to_json()

@projects_blueprint.route("create", methods=["POST"])
def create_project():
    data = request.get_json()
    project = Project.objects.create(**data)
    return Response(response=project.to_json(), status=200, mimetype="application/json")

