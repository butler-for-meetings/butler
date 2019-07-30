import json

from flask import Blueprint, request, Response

from butler.db.models import Discussion

from mongoengine import DoesNotExist

DISCUSSIONS_BLUEPRINT = Blueprint('discussions', __name__)


# Create a new discussion object
@DISCUSSIONS_BLUEPRINT.route('create_discussion', methods=['POST'])
def create_discussion():
    data = request.get_json()
    discussion = Discussion.objects.create(**data)
    return Response(response=discussion.to_json(),
                    status=200,
                    mimetype="application/json")


# Returns all discussions
@DISCUSSIONS_BLUEPRINT.route('get_all_discussions')
def get_all_discussion():
    return Discussion.objects()


# Return saved discussion by id
@DISCUSSIONS_BLUEPRINT.route('<string:id>')
def get_discussion(discussion_id):
    try:
        result = Discussion.objects.get(pk=discussion_id)
        resp = Response(response=result.to_json(),
                        status=200,
                        mimetype="application/json")
        resp.headers["Access-Control-Allow-Origin"] = "*"
        return resp
    except DoesNotExist:
        return Response(
                        response=json.dumps({
                            "message": "Couldn't find the desired discussion"
                        }),
                        status=404,
                        mimetype="application/json")
    return "TODO, shouldn't occur."


# Return saved discussion by title
@DISCUSSIONS_BLUEPRINT.route('get_discussion_by_name/<string:title>')
def get_discussion_by_name(title):
    discussions = Discussion.objects(title=title)
    return Response(response=discussions.to_json(),
                    status=200,
                    mimetype="application/json")


# Return previous discussion by title
@DISCUSSIONS_BLUEPRINT.route('get_previous_discussion/<string:title>')
def get_previous_discussion(title):
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
@DISCUSSIONS_BLUEPRINT.route(
    'update_discussion/<string:id>',
    methods=["PATCH"])
def update_discussion(discussion_id):
    discussion = Discussion.objects.get(pk=discussion_id)
    data = request.get_json()
    discussion.update(**data)
    discussion.reload()  # Reload the new data from the database
    return Response(response=discussion.to_json(),
                    status=200,
                    mimetype="application/json")


#  Returns all discussions from a earlier to later date
# Required querystring!
@DISCUSSIONS_BLUEPRINT.route('get_discussions_by_date')
def get_discussions_by_date():
    discs = []
    early_date = request.args.get("early_date", type=str)
    late_date = request.args.get("late_date", type=str)
    for discussion in Discussion.objects:
        disc_date = discussion.date
        if early_date <= disc_date <= late_date:
            discs.append(discussion)
    return Response(response=json.dumps(discs),
                    status=200,
                    mimetype="application/json")


# Returns next discussion
@DISCUSSIONS_BLUEPRINT.route('get_next_discussion')
def get_next_discussion():
    title = request.args.get("title", type=str)
    for discussion in Discussion.objects:
        if discussion.previous_discussion.title == title:
            return discussion
    return 'NO PREVIOUS DISCUSSIONS WERE FOUND!!!'
