from flask import Blueprint
from butler.db.models import Project

projects_blueprint = Blueprint('projects', __name__)
@projects_blueprint.route("get/<string:id>")
def get_project(id):
    project = Project.objects.filter(refs__in=[id])
    print(project)
    return ""

@projects_blueprint.route("create", methods=["POST"])
def create_project():
    new = Project.objects.create(title="NIssg")
    return "a"
