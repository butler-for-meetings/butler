# pylint: disable=too-few-public-methods,arguments-differ
import datetime

from mongoengine import (
    Document,
    EmailField,
    StringField,
    EmbeddedDocument,
    BooleanField,
    ReferenceField,
    DateTimeField,
    LazyReferenceField,
    EmbeddedDocumentListField,
    ListField,
    QuerySet
)
from bson import json_util


class User(Document):
    email = EmailField(required=True)
    username = StringField(max_length=64, required=True)
    first_name = StringField(max_length=64, required=True)
    last_name = StringField(max_length=64, required=True)


class Task(EmbeddedDocument):
    finished = BooleanField(default=False)
    responsible = ReferenceField(User, required=True)
    start_date = DateTimeField(required=True)
    end_date = DateTimeField(required=True)
    description = StringField(required=True)
    jiraLink = StringField(required=True)


class Comment(Document):
    content = StringField(required=True)
    author = ReferenceField(User, required=True)


class Discussion(Document):
    title = StringField(required=True)
    previous_discussion = LazyReferenceField(document_type="Discussion")
    prior_tasks = EmbeddedDocumentListField(Task)
    continue_tasks = EmbeddedDocumentListField(Task)
    date = DateTimeField(required=True)
    host = ReferenceField(User, required=True)
    participants = ListField(ReferenceField(User))
    tags = ListField(StringField())
    purpose = StringField(required=True)
    background = StringField(required=True)
    main_points = ListField(StringField())
    main_points_sum = ListField(StringField())
    comments = ListField(Comment)

    class DiscussionQuerySet(QuerySet):
        def create(self, date, host, **kwargs):
            if isinstance(date, int):
                date = datetime.datetime.fromtimestamp(date / 1000)
            return super(Discussion.DiscussionQuerySet, self).create(
                date=date, host=host, **kwargs)

    meta = {
        "queryset_class": DiscussionQuerySet
    }

    def to_json(self, *args, **kwargs):
        data = super(Discussion, self).to_mongo(*args, **kwargs)
        participants = []
        for participant in data["participants"]:
            participant = User.objects.get(pk=participant)
            participants.append(participant.to_mongo())

        data["participants"] = participants
        host = User.objects.get(pk=data["host"])
        data["host"] = host.to_mongo()
        return json_util.dumps(data)


class Project(Document):
    title = StringField(required=True)
    participants = ListField(ReferenceField(User))
    start_date = DateTimeField(default=datetime.datetime.utcnow)
    end_date = DateTimeField(required=True)
    discussions = ListField(ReferenceField(Discussion))

    class ProjectQuerySet(QuerySet):
        def create(self, end_date, start_date, **kwargs):
            if isinstance(start_date, int):
                start_date = datetime.datetime.fromtimestamp(start_date / 1000)
            if isinstance(end_date, int):
                end_date = datetime.datetime.fromtimestamp(end_date / 1000)
            return super(Project.ProjectQuerySet, self).create(
                start_date=start_date, end_date=end_date, **kwargs)

    meta = {
        "queryset_class": ProjectQuerySet
    }

    def to_json(self, *args, **kwargs):
        data = super(Project, self).to_mongo(*args, **kwargs)
        participants = []
        for participant in data["participants"]:
            participant = User.objects.get(pk=participant)
            participants.append(participant.to_mongo())

        data["participants"] = participants
        return json_util.dumps(data)


class Tag(Document):
    name = StringField(required=True)
