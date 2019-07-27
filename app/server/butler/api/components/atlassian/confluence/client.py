from atlassian import Confluence


from utils import render_to_confluence


"""
    This module connects to confluence instance and adds / updates pages
"""

CONFIG = dict({
    'url': 'http://localhost:8090',
    'space': 'BUT'
})


# TODO - figure out data issue
def dump_to_confluence(authentication, data, title):
    """
    :param authentication:
    :param data:
    :return:
    """
    confluence = Confluence(
        url=CONFIG['url'],
        username=authentication['uname'],
        password=authentication['password'])

    page = confluence.get_page_by_title(
        space=CONFIG['space'],
        title=title
    )

    if not page:

        creation = confluence.create_page(
            space=CONFIG['space'],
            title=title,
            body=render_to_confluence(data)
        )

        if not creation:
            raise Exception('Error creating page')

        print('new page created')

    else:

        updating = confluence.update_existing_page(
            page_id=page['id'],
            title=title,
            body=render_to_confluence(data)
        )

        if not updating:
            raise Exception('Error updating page')

        print('page updated')


if __name__ == '__main__':
    AUTHENTICATION = dict({
        'uname': 'admin',
        'password': '159357'
    })

    DATA = dict({
        'title': 'new conf page',
        'body': 'discussion body - updating'
    })

    dump_to_confluence(AUTHENTICATION, DATA, "dwda")
