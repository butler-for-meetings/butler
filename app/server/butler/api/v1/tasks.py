from flask import Blueprint, request, Response
from butler.db.models import Task, Discussion
import datetime


tasks_blueprint = Blueprint('tasks', __name__)


@tasks_blueprint.route('create_task', methods=["POST"])
def create_task():
    if request.is_json:
        content = request.get_json()
        discussion_id = content.pop('discussion_id')
        print(content)
        print(discussion_id)
        new_task = Task(**content)
        Discussion.objects(id=discussion_id)
        return Response(response=new_task.to_json(), status=201, mimetype="application/json")

    return 'Invalid format'


@tasks_blueprint.route('get_task/<disc_id>/<task_id>', methods=["GET"])
def get_task(disc_id, task_id):
    return str(disc_id) + ' : ' + str(task_id)


@tasks_blueprint.route('get_discussion_tasks', methods=["GET"])
def get_discussion_tasks():
    return 'got ALL tasks and previous tasks'
