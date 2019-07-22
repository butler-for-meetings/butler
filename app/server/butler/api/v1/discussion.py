from flask import Blueprint, request, Response
from butler.db.models import *
import json
import logging
logging.basicConfig(level=logging.DEBUG)

discussions_blueprint = Blueprint('blueprint', __name__)


@discussions_blueprint.route('')
def index():
    return 'DISCUSSIONS!!'


# Create a new discussion object
@discussions_blueprint.route('create_discussion', methods = ['POST'])
def create_discussion():
    print("requset", request.data)
    dict_discussion = dict(**request.data)
    #  fixme change this
    discussions = Discussion.from_json(json.dumps(dict_discussion))
    discussions.save()

    return Response(response=dict_discussion, status=201, mimetype="application/json")


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
    title = request.args.get("title", type=str)
    return Discussion.objects(title=title)


# Return previous discussion by title
@discussions_blueprint.route('get_previous_discussion')
def get_previous_discussion():
    title = request.args.get("title", type=str)
    discussion = Discussion.objects(title=title)
    return discussion.previous_discussion

# Return discussions by tag word
@discussions_blueprint.route('get_discussions_by_tag')
def get_discussions_by_tag():
    discs = []
    desired_tag = request.args.get("tag", type=str)
    for discussion in Discussion.objects:
        tag_words = discussion.tags
        if tag_words.count(desired_tag) > 0:
            discs.append(discussion)
    return json.dumps(discs)
