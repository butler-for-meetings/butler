import json
import logging

from flask import Blueprint, request, Response

from butler.db.models import Discussion


logging.basicConfig(level=logging.DEBUG)
DISCUSSIONS_BLUEPRINT = Blueprint('blueprint', __name__)


# Create a new discussion object
@DISCUSSIONS_BLUEPRINT.route('create_discussion', methods=['POST'])
def create_discussion():
    data = request.get_json()
    discussion = Discussion.objects.create(**data)
    return Response(response=discussion.to_json(),
                    status=200,
                    mimetype="application/json")


# Returns all discussions
@DISCUSSIONS_BLUEPRINT.route('get_all_discussion')
def get_all_discussion():
    return Discussion.objects()


# Return saved discussion by id
@DISCUSSIONS_BLUEPRINT.route('get_discussion/<string:id>')
def get_discussion(id):
    return Discussion.objects(pk=id)


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
@DISCUSSIONS_BLUEPRINT.route('get_discussions_by_tag/<string:tag>')
def get_discussions_by_tag(tag):
    discs = []
    for discussion in Discussion.objects:
        if tag in discussion.tags:
            discs.append(discussion)

    return Response(response=json.dumps(discs),
                    status=200,
                    mimetype="application/json")

# Update existing discussion
@DISCUSSIONS_BLUEPRINT.route('update_discussion')
def update_discussion():
    discussion = handle_post()
    discussion.update()
    return discussion


#  Returns all discussions from a earlier to later date
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
