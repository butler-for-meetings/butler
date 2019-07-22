from jinja2 import Environment, FileSystemLoader, select_autoescape

env = Environment(
    loader = FileSystemLoader('./templates'),
    autoescape = select_autoescape(['html'])
)

def render_to_confluence(discussion):
  template = env.get_template('template01.html')

  comments = []
  for c in discussion.comments:
    comments.append(
      {
        "author": {
          "name": c.author.first_name + " " + c.author.first_name,
          "link": "#"
        },
        "content": c.content
      }
    )

  participants = []
  for p in discussion.participants:
    participants.append(
      {
        "name": p.first_name + " " + p.first_name,
        "link": "#"
      }
    )
  tasks = []
  for t in discussion.tasks:
    tasks.append(
      {
        "name": t.name,
        "finished": t.finished,
        "responsible": {
          "name": t.responsible.first_name + " " + t.responsible.first_name,
          "link": "#"
        },
        "start_date": t.start_date,
        "end_date": t.end_date
      }
    )
  data = {
    'title': discussion.title,
    'previous_discussion': {
      'title': discussion.previous_discussion.title,
      "link": "#"
    },
    'tasks': tasks,
    'date': discussion.date,
    "user": {
      "name": discussion.first_name + " " + discussion.first_name,
      "link": "#"
    },
    "participants": participants,
    "tags": discussion.tags,
    "purpose": discussion.purpose,
    "background": discussion.background,
    "main_points": discussion.main_points,
    "main_points_sum": discussion.main_points_sum,
    "comments": comments
  }
  return template.render(data)
