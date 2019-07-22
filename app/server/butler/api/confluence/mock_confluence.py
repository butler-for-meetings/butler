from mongoengine import *
import datetime
from confluenceClient import dump_to_confluence


class User(Document):
    email = EmailField(required=True)
    first_name = StringField(max_length=64)
    last_name = StringField(max_length=64)
    required = BooleanField(default=False)

class Task(EmbeddedDocument):
    finished = BooleanField(default=False)
    responsible = ReferenceField(User)
    start_date = DateTimeField(default=datetime.datetime.utcnow, required=True)
    end_date = DateTimeField(required=True)

class Comment(Document):
    content = StringField(required=True)
    author = User(required=True)

class Discussion(Document):
    title = StringField()
    previous_discussion = ReferenceField(document_type="Discussion")
    tasks = EmbeddedDocumentListField(Task)
    date = DateTimeField(required=True)
    host = ReferenceField(User)
    participants = ListField(ReferenceField(User))
    tags = ListField(StringField)
    purpose = StringField(required=True)
    background = StringField(required=True)
    main_points = ListField(StringField)
    main_points_sum = ListField(StringField)
    comments = ListField(Comment)

class Project(Document):
    participants = ListField(ReferenceField(User))
    start_date = DateTimeField(default=datetime.datetime.utcnow, required=True)
    end_date = DateTimeField(required=True)
    discussions = ListField(ReferenceField(Discussion))

class Tag(Document):
    name = StringField(required=True)


AUTHENTICATION = dict({
    'uname': 'admin',
    'password': '159357'
})

if __name__ == '__main__':

    discussion = Discussion()

    discussion.title = "test discussion"

    prev = Discussion()
    prev.title = "another one"
    discussion.previous_discussion = prev

    task = Task()
    task.name = "name"
    task.finished = 1
    usr = User()
    usr.first_name = "first"
    usr.last_name = "last"
    task.responsible = usr
    discussion.tasks = [task]
    discussion.date = datetime.datetime.now()

    discussion.host = usr
    discussion.participants = [usr]
    discussion.tags = ["tag"]
    discussion.purpose = "purpose"
    discussion.background = "background"
    discussion.main_points = ["main_points"]
    discussion.main_points_sum = ["main_points_sum"]

    comm = Comment()
    comm.content = "content"
    comm.author = usr
    discussion.comments = [comm]

    # ret = render_to_confluence(discussion)
    #
    # print(ret)

    status = dump_to_confluence(AUTHENTICATION, discussion, "i am a test")



    print(status)
