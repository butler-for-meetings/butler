import json
from flask import Blueprint, Response

from butler.db.models import Discussion


tasks_blueprint = Blueprint('tasks', __name__)


@tasks_blueprint.route('get_discussion_tasks/<discussion_id>', methods=["GET"])
def get_discussion_tasks(discussion_id):
    discussion = Discussion.objects.get(pk=discussion_id)
    return Response(
        response=json.dumps({
            "tasks": discussion.tasks,
            "previous_discussion": discussion.previous_discussion
        }),
        status=200,
        mimetype="application/json"
    )
