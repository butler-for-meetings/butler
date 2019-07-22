
class Issue:
    def __init__(self, project, summary, description=None, type='Task', status='To Do', assignee=None):
        self.project = project
        self.summary = summary
        self.description = description
        self.type = type
        self.status = status
        self.assignee = assignee
