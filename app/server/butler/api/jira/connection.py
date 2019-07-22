from ipdb import set_trace
from jira import JIRA
from pprint import pprint
import auth_keys

jira = JIRA('https://butlertest.atlassian.net/',basic_auth=(auth_keys.USER,auth_keys.TOKEN))
issue = jira.issue('but-2')
project=jira.project('BUT')
new_issue = jira.create_issue(project=project.id,summary='New issue from jira-python',issuetype= {'name': 'Task'})
pprint(issue)

