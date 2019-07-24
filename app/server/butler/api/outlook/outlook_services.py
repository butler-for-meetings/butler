import requests
import uuid
import json

graph_endpoint = 'https://graph.microsoft.com/v1.0{0}'

# Generic API Sending
def make_api_call(method, url, token, payload = None, parameters = None):
    # Send these headers with all API calls
    headers = { 'User-Agent': 'python_tutorial/1.0',
                'Authorization': 'Bearer {0}'.format(token),
                'Accept': 'application/json' }

    # Use these headers to instrument calls. Makes it easier
    # to correlate requests and responses in case of problems
    # and is a recommended best practice.
    request_id = str(uuid.uuid4())
    instrumentation = {'client-request-id' : request_id,
                       'return-client-request-id' : 'true' }

    headers.update(instrumentation)

    response = None

    if (method.upper() == 'GET'):
            response = requests.get(url, headers = headers, params = parameters)
    elif (method.upper() == 'DELETE'):
            response = requests.delete(url, headers = headers, params = parameters)
    elif (method.upper() == 'PATCH'):
            headers.update({ 'Content-Type' : 'application/json' })
            response = requests.patch(url, headers = headers, data = json.dumps(payload), params = parameters)
    elif (method.upper() == 'POST'):
            headers.update({ 'Content-Type' : 'application/json' })
            response = requests.post(url, headers = headers, data = json.dumps(payload), params = parameters)

    return response



def get_me(access_token):
        get_me_url = graph_endpoint.format('/me')

        # Use OData query parameters to control the results
        #    - Only return the displayName and mail fields
        query_parameters = {'$select': 'displayName,mail'}

        results = make_api_call('GET', get_me_url, access_token, "", parameters = query_parameters)

        if (results.status_code == 200):
                return results.json()
        else:
                return "{0}: {1}".format(results.status_code, results.text)


def get_events(access_token):
        get_events_url = graph_endpoint.format('/me/events')

        query_parameters = {
                '$select': 'subject,body,bodyPreview,organizer,attendees,start,end,location'
                }

        results = make_api_call('GET', get_events_url, access_token, "", parameters = query_parameters)

        if (results.status_code == 200):
                results = results.json()
                events = []
                for event in results['value']:
                        events.append({
                                "subject": event['subject'],
                                "body": event['bodyPreview'],
                                "organizer": event['organizer']['emailAddress']['name'],
                                "attendees": [att['emailAddress']['name'] for att in event['attendees']],
                                "start": event['start']['dateTime'],
                                "end" : event['end']['dateTime']

                        })
                return events
        else:
                return "{0}: {1}".format(results.status_code, results.text)
