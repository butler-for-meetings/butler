from flask import Blueprint


tasks_blueprint = Blueprint('tasks', __name__)


@tasks_blueprint.route('')
def index():
    return 'tasks!!'


@tasks_blueprint.route('create_task')
def create_task():
    return 'created task'


@tasks_blueprint.route('get_task')
def get_task():
    return 'got task'


@tasks_blueprint.route('get_discussion_tasks')
def get_discussion_tasks():
    return 'got ALL tasks and previous tasks'
