from flask import Blueprint

projects_blueprint = Blueprint('projects', __name__)
@projects_blueprint.route("getProject")
def get_project():
    return "WOAH!"
