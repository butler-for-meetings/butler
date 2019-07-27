"""
Jira class, manages the connection to jira.
"""
from jira import JIRA
import logging
import logging.handlers


@property
def is_jira_authenticated(func):
    def decorator(self, *args, **kwargs):
        if not self._is_authenticated:
            self.logger.info('Jira_was_not_authenticated!')

        else:
            return func(self, *args, **kwargs)

    return decorator


class Jira:
    """
    jira class
    """
    @staticmethod
    def get_logger():
        logger = logging.getLogger('JiraLogger')
        logger.setLevel(logging.INFO)
        handler = logging.handlers.SysLogHandler(address='/dev/log')
        logger.addHandler(handler)
        return logger

    def __init__(self, user, token):
        self._is_authenticated = False

        self.jira_handler = JIRA('https://butlertest.atlassian.net/',
                                 basic_auth=(auth_keys.USER, auth_keys.TOKEN))

    def add_issue(self, project, summary, description=None, issue_type='Task'):
        """
        :param project: project key
        :param summary: issue summary
        :param description: issue description
        :param issue_type: issue type
        """
        self.jira_handler.create_issue(project=project, summary=summary,
                                       description=description,
                                       issuetype={'name': issue_type})

    # only from project manager's user
    def delete_issue(self, key):
        """
        :param key:  issue key
        """
        issue_to_delete = self.jira_handler.issue(key)
        issue_to_delete.delete()

    def update_issue(self, key, fields):
        """
        :param key: issue key
        :param fields: dictionary of fields
        """
        issue_to_update = self.jira_handler.issue(key)
        issue_to_update.update(fields)

    def get_project_issues(self, project_key):
        """
        :param project_key: project key
        :return: dictionary <issue-key,issue-fields>
        """
        issues_in_proj = self.jira_handler.search_issues(
            'project={}'.format(project_key))
        lst_of_issues = {}
        for iss in issues_in_proj:
            lst_of_issues[iss.key] = iss.fields
        return lst_of_issues

    def find_issue(self, key):
        """
        :param key: issue key
        :return: issue
        """
        return self.jira_handler.issue(key)

    def add_comment(self, key, comment):
        """
        :param key: issue key
        :param comment: issue comment
        """
        issue = self.find_issue(key)
        self.jira_handler.add_comment(issue, comment)

    def add_attachment(self, file_path, key):
        """
        :param file_path: file path of attachment
        :param key: issue key
        """
        issue = self.find_issue(key)
        self.jira_handler.add_attachment(issue=issue, attachment=file_path)
