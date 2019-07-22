from mongoengine import *
import datetime


class User(Document):
    email = EmailField(required=True)
    first_name = StringField(max_length=64, required=True)
    last_name = StringField(max_length=64, required=True)


class Task(EmbeddedDocument):
    finished = BooleanField(default=False)
    responsible = ReferenceField(User, required=True)
    start_date = DateTimeField(default=datetime.datetime.utcnow)
    end_date = DateTimeField(default=datetime.datetime.utcnow, required=True)


class Comment(Document):
    content = StringField(required=True)
    author = ReferenceField(User, required=True)

class Discussion(Document):
    title = StringField(required=True)
    previous_discussion = LazyReferenceField(document_type="Discussion")
    tasks = EmbeddedDocumentListField(Task)
    date = DateTimeField(required=True)
    host = ReferenceField(User, required=True)
    participants = ListField(ReferenceField(User))
    tags = ListField(StringField)
    purpose = StringField(required=True)
    background = StringField(required=True)
    main_points = ListField(StringField)
    main_points_sum = ListField(StringField)
    comments = ListField(Comment)


class Project(Document):
    title = StringField(required=True)
    participants = ListField(ReferenceField(User))
    start_date = DateTimeField(default=datetime.datetime.utcnow)
    end_date = DateTimeField(required=True)
    discussions = ListField(ReferenceField(Discussion))


class Tag(Document):
    name = StringField(required=True)
