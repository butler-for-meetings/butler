from flask import Blueprint, request, Response
from butler.db.models import Project


PROJECTS_BLUEPRINT = Blueprint('projects', __name__)
@PROJECTS_BLUEPRINT.route("<string:project_id>")
def get_project(project_id):
    project = Project.objects.get(pk=project_id)
    return project.to_json()


@PROJECTS_BLUEPRINT.route("create", methods=["POST"])
def create_project():
    data = request.get_json()
    project = Project.objects.create(**data)
    return Response(response=project.to_json(),
                    status=200,
                    mimetype="application/json")
