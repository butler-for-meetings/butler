import auth_keys
from jira import JIRA


class Jira:
    def __init__(self):
        self.jira_handler = JIRA('https://butlertest.atlassian.net/',
                                 basic_auth=(auth_keys.USER, auth_keys.TOKEN))

    def add_issue(self, project, summary, description=None, type='Task'):
        self.jira_handler.create_issue(project=project, summary=summary,
                                       description=description,
                                       issuetype={'name': type})

    # only from project manager's user
    def delete_issue(self, key):
        issue_to_delete = self.jira_handler.issue(key)
        issue_to_delete.delete()

    def update_issue(self, key, fields):
        issue_to_update = self.jira_handler.issue(key)
        issue_to_update.update(fields)

    def get_project_issues(self, project_key):
        # returns a dictionary <issue-key,issue-fields>
        issues_in_proj = self.jira_handler.search_issues(
            'project={}'.format(project_key))
        lst_of_issues = {}
        for iss in issues_in_proj:
            lst_of_issues[iss.key] = iss.fields
        return lst_of_issues

    def find_issue(self, key):
        return self.jira_handler.issue(key)

    def add_comment(self, key, comment):
        issue = self.find_issue(key)
        self.jira_handler.add_comment(issue, comment)
        return

    def add_attachment(self, file_path, key):
        issue = self.find_issue(key)
        self.jira_handler.add_attachment(issue=issue, attachment=file_path)
