from flask import Blueprint, request, Response
from butler.db.models import *
import json
import logging
logging.basicConfig(level=logging.DEBUG)

discussions_blueprint = Blueprint('blueprint', __name__)


def handle_post():
    return json.dumps(dict(**request.data))

@discussions_blueprint.route('')
def index():
    return 'DISCUSSIONS!!'


# Create a new discussion object
@discussions_blueprint.route('create_discussion', methods = ['POST'])
def create_discussion():
    dict_discussion = dict(**request.data)
    #  fixme change this
    discussions = handle_post()
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
    return Discussion.objects(_id=id)


# Return saved discussion by title
@discussions_blueprint.route('get_discussion_by_name')
def get_discussion_by_name():
    title = request.args.get("title", type=str)
    discussions = Discussion.objects(title=title)
    return Response(response=discussions.to_json(), status=200, mimetype="application/json")


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

# Update existing discussion
@discussions_blueprint.route('update_discussion')
def update_discussion():
    discussion = handle_post()
    discussion.update()
    return discussion


#  Returns all discussions from a earlier to latter date
@discussions_blueprint.route('get_discussions_by_date')
def get_discussions_by_date():
    discs = []
    early_date = request.args.get("early_date", type=str)
    late_date = request.args.get("late_date", type=str)
    for discussion in Discussion.objects:
        disc_date = discussion.date
        if disc_date >= early_date and late_date <= late_date:
            discs.append(discussion)
    return json.dumps(discs)


# Returns next discussion
@discussions_blueprint.route('get_next_discussion')
def get_next_discussion():
    title = request.args.get("title", type=str)
    for discussion in Discussion.objects:
        if discussion.previous_discussion.title == title:
            return discussion
    return 'NO PREVIOUS DISCUSSIONS WERE FOUND!!!'
