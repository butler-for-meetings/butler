import json

from flask import Blueprint, request, Response
from butler.db.models import Project

PROJECTS_BLUEPRINT = Blueprint('projects', __name__)
@PROJECTS_BLUEPRINT.route("<string:project_id>")
def get_project(project_id):
    project = Project.objects.get(pk=project_id)
    return project.to_json()


@PROJECTS_BLUEPRINT.route("")
def get_all_projects():
    projects = []
    for i in Project.objects:
        projects.append(json.loads(i.to_json()))

    resp = Response(response=json.dumps(projects),
                    status=200,
                    mimetype="application/json")

    resp.headers["Access-Control-Allow-Origin"] = "*"
    return resp


@PROJECTS_BLUEPRINT.route("create", methods=["POST"])
def create_project():
    data = request.get_json()
    try:
        project = Project.objects.create(**data)
        return Response(response=project.to_json(),
                        status=200,
                        mimetype="application/json")
    except TypeError:
        return creation_error(e)
        
    return "An unknown error occured"


@PROJECTS_BLUEPRINT.route("discussions/<string:projid>")
def get_discussions(projid):
    return Project.objects.get(pk=projid).discussions
