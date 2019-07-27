"""
Jira class, manages the connection to jira.
"""
from jira import JIRA
from butler.api.components.atlassian.atlasian import Atlassian


class Jira(Atlassian):
    """
    jira class
    """
    def _authenticate(self, basic_auth):
        self.jira_handler = JIRA(self._url, basic_auth=basic_auth)

        self.logger.info('Finished Authentication with Jira.')

    def __init__(self, url):
        super(Jira, self).__init__(url, 'JiraLogger')
        self.jira_handler = NotImplemented

    def add_issue(self, project_key, summary='',
                  description=None, issue_type='Task'):
        """
        :param project_key: project key
        :param summary: issue summary
        :param description: issue description
        :param issue_type: issue type
        """
        self.jira_handler.create_issue(project=project_key, summary=summary,
                                       description=description,
                                       issuetype={'name': issue_type})

        self.logger.info('Create issue to project with ket: {} '
                         'with type {}'.
                         format(project_key, issue_type))

    # only from project manager's user
    def delete_issue(self, key):
        """
        :param key:  issue key
        """
        issue_to_delete = self.jira_handler.issue(key)
        issue_to_delete.delete()
        self.logger.info('Issue with key: {} was deleted.'.format(key))

    def update_issue(self, key, fields):
        """
        :param key: issue key
        :param fields: dictionary of fields
        """
        issue_to_update = self.jira_handler.issue(key)
        issue_to_update.update(fields)
        self.logger.info('Issue with key: {} was updated.'.format(key, fields))

    def get_project_issues(self, project_key):
        """
        :param project_key: project key
        :return: dictionary <issue-key,issue-fields>
        """
        issues_in_project = self.jira_handler.search_issues(
            'project={}'.format(project_key))
        issues = {}
        for issue in issues_in_project:
            issues[issue.key] = issue.fields

        self.logger.info('Return issues from project with key: {}.'.
                         format(project_key))

        return issues

    def find_issue(self, key):
        """
        :param key: issue key
        :return: issue
        """
        self.logger.info('Return issue with key: {}.'.format(key))

        return self.jira_handler.issue(key)

    def add_comment(self, key, comment):
        """
        :param key: issue key
        :param comment: issue comment
        """
        issue = self.find_issue(key)
        self.jira_handler.add_comment(issue, comment)

        self.logger.info('Add comment to issue with key: {}.'.format(key))

    def add_attachment(self, file_path, key):
        """
        :param file_path: file path of attachment
        :param key: issue key
        """
        issue = self.find_issue(key)
        self.jira_handler.add_attachment(issue=issue, attachment=file_path)

        self.logger.info('Add attachment to issue with key: {}.'.format(key))


if __name__ == '__main__':
    jira = Jira('https://butlertest.atlassian.net/')
    jira.authenticate_on_cloud(user='tugmica@gmail.com',
                               token='Im9IWQIOtnIkf2Ab0w9s15A7')
    from ipdb import set_trace
    set_trace()
