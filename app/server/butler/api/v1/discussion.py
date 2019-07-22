from flask import Blueprint, request
from  butler.db.models import *

discussions_blueprint = Blueprint('blueprint', __name__)


@discussions_blueprint.route('')
def index():
    return 'DISCUSSIONS!!'

# Create a new discussion object
@discussions_blueprint.route('create_discussion', methods=['GET, POST'])
def create_discussion():
    discussions = Discussion.from_json(request.form)
    return discussions
    #Discussion(Document).save()
    #return Discussion.object()

# Returns all discussions
@discussions_blueprint.route('get_all_discussion')
def get_all_discussion():
    return Discussion.objects()


# Return saved discussion by id
@discussions_blueprint.route('get_discussion')
def get_discussion():
    id = request.args.get("id", type=str)
    return Discussion.objects(id=id)


# Return saved discussion by title
@discussions_blueprint.route('get_discussion_by_name')
def get_discussion_by_name():
    id = request.args.get("title", type=str)
    return Discussion.objects(title=title)
