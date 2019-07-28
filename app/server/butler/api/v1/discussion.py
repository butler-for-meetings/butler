import json
import logging

from flask import Blueprint, request, Response

from butler.db.models import Discussion


logging.basicConfig(level=logging.DEBUG)
DISCUSSIONS_BLUEPRINT = Blueprint('blueprint', __name__)


def handle_post():
    return json.dumps(dict(**request.data))


@DISCUSSIONS_BLUEPRINT.route('')
def index():
    return 'DISCUSSIONS!!'


# Create a new discussion object
@DISCUSSIONS_BLUEPRINT.route('create_discussion', methods=['POST'])
def create_discussion():
    dict_discussion = dict(**request.data)
    discussions = handle_post()
    discussions.save()

    return Response(response=dict_discussion,
                    status=201,
                    mimetype="application/json")


# Returns all discussions
@DISCUSSIONS_BLUEPRINT.route('get_all_discussion')
def get_all_discussion():
    return Discussion.objects()


# Return saved discussion by id
@DISCUSSIONS_BLUEPRINT.route('get_discussion')
def get_discussion():
    discussion_id = request.args.get("id", type=str)
    return Discussion.objects(_id=discussion_id)


# Return saved discussion by title
@DISCUSSIONS_BLUEPRINT.route('get_discussion_by_name')
def get_discussion_by_name():
    title = request.args.get("title", type=str)
    discussions = Discussion.objects(title=title)
    return Response(response=discussions.to_json(),
                    status=200,
                    mimetype="application/json")


# Return previous discussion by title
@DISCUSSIONS_BLUEPRINT.route('get_previous_discussion')
def get_previous_discussion():
    title = request.args.get("title", type=str)
    discussion = Discussion.objects(title=title)
    return discussion.previous_discussion

# Return discussions by tag word
@DISCUSSIONS_BLUEPRINT.route('get_discussions_by_tag')
def get_discussions_by_tag():
    discs = []
    desired_tag = request.args.get("tag", type=str)
    for discussion in Discussion.objects:
        tag_words = discussion.tags
        if tag_words.count(desired_tag) > 0:
            discs.append(discussion)
    return json.dumps(discs)

# Update existing discussion
@DISCUSSIONS_BLUEPRINT.route('update_discussion')
def update_discussion():
    discussion = handle_post()
    discussion.update()
    return discussion


#  Returns all discussions from a earlier to latter date
@DISCUSSIONS_BLUEPRINT.route('get_discussions_by_date')
def get_discussions_by_date():
    discs = []
    early_date = request.args.get("early_date", type=str)
    late_date = request.args.get("late_date", type=str)
    for discussion in Discussion.objects:
        disc_date = discussion.date
        if early_date <= disc_date <= late_date:
            discs.append(discussion)
    return json.dumps(discs)


# Returns next discussion
@DISCUSSIONS_BLUEPRINT.route('get_next_discussion')
def get_next_discussion():
    title = request.args.get("title", type=str)
    for discussion in Discussion.objects:
        if discussion.previous_discussion.title == title:
            return discussion
    return 'NO PREVIOUS DISCUSSIONS WERE FOUND!!!'

@DISCUSSIONS_BLUEPRINT.route("get_discussions_by_project")
def get_discussions_by_project(id):
    return Project.objects.get(pk=id).discussions
