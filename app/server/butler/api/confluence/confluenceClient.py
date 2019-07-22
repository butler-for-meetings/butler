from atlassian import Confluence

config = dict({
    'url': 'http://localhost:8090',
    'space': 'BUT'
})


def render_conf_page(data):
    return data['body']


def dump_to_confluence(authentication, data):

    confluence = Confluence(
        url=config['url'],
        username=authentication['uname'],
        password=authentication['password'])

    page = confluence.get_page_by_title(
        space=config['space'],
        title=data['title']
    )

    if not page:

        creation = confluence.create_page(
            space=config['space'],
            title=data['title'],
            body=render_conf_page(data)
        )

        if not creation:
            raise Exception('Error creating page')

        print('new page created')

    else:

        updating = confluence.update_existing_page(
            page_id=page['id'],
            title=data['title'],
            body=render_conf_page(data)
        )

        if not updating:
            raise Exception('Error updating page')

        print('page updated')


if __name__ == '__main__':

    authentication = dict({
        'uname': 'kobi',
        'password': '12345'
    })

    data = dict({
        'title': 'new conf page',
        'body': 'discussion body - updating'
    })

    dump_to_confluence(authentication, data)


# status = confluence.create_space(
#     space_key='BUTLER',
#     space_name="testSpace"
# )

# status = confluence.get_all_spaces()

# status = confluence.get_all_pages_from_space(space='BUT')

# status = confluence.get_page_by_id(page_id=65614)
