from jinja2 import Environment, FileSystemLoader, select_autoescape

"""
    Utils for the conf
"""
ENV = Environment(
    loader=FileSystemLoader('./templates'),
    autoescape=select_autoescape(['html'])
)


def render_to_confluence(discussion):
    """
    discussion: data form db
    """
    template = ENV.get_template('template01.html')

    comments = []
    for comment in discussion.comments:
        comments.append(
            {
                "author": {
                    "name": f"{comment.author.first_name} "
                            f"{comment.author.first_name}",
                    "link": "#"
                },
                "content": comment.content
            }
        )

    participants = []
    for participant in discussion.participants:
        participants.append(
            {
              "name": participant.first_name + " " + participant.first_name,
              "link": "#"
            }
        )
    tasks = []
    for task in discussion.tasks:
        tasks.append(
            {
                "name": task.name,
                "finished": task.finished,
                "responsible": {
                    "name": f"{task.responsible.first_name} "
                            f"{task.responsible.first_name}",
                    "link": "#"
                },
                "start_date": task.start_date,
                "end_date": task.end_date
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
            "name": f"{discussion.host.first_name} "
                    f"{discussion.host.first_name}",
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
