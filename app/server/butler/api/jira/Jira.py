from jira import JIRA
import auth_keys

class Jira:
    def __init__(self):
        self.jira_handler = JIRA('https://butlertest.atlassian.net/', basic_auth=(auth_keys.USER, auth_keys.TOKEN))

    def add_issue(self, project, summary, description=None, type='Task'):
        self.jira_handler.create_issue(project=project, summary=summary, description=description, issuetype={'name': type})
        print('Issue {0} created successfully on project {1}'.format(summary, project))

    #todo: user can enter key or name of issue, not only key
    #todo: only from project mngr's user
    def delete_issue(self, key):
        issue_to_delete = self.jira_handler.issue(key)
        issue_to_delete.delete()
        print('Issue {0} deleted successfully'.format(key))

    def update_issue(self, key, fields):
        issue_to_update = self.jira_handler.issue(key)
        issue_to_update.update(fields)
        print('Issue {0} updated successfully'.format(key))


    def get_project_issues(self, project_key):
        # returns a dictionary <issue-key,issue-fields>
        issues_in_proj = self.jira_handler.search_issues('project={}'.format(project_key))
        lst_of_issues = {}
        for iss in issues_in_proj:
            lst_of_issues[iss.key] = iss.fields
        return lst_of_issues


