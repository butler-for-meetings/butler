from urllib.parse import urlencode
import requests

# Client ID and secret
CLIENT_ID = '2a0705b6-372d-48c9-897a-14a0caa923aa'
CLIENT_SECRET = '-7YKJR9wxHQ]Zcu1iFzwOA5vBDNnMe?['

# Constant strings for OAuth2 flow
# The OAuth authority
AUTHORITY = 'https://login.microsoftonline.com'

# The authorize URL that initiates
# the OAuth2 client credential flow for admin consent
AUTHORIZE_URL = '{0}{1}'.format(AUTHORITY, '/common/oauth2/v2.0/authorize?{0}')

# The token issuing endpoint
TOKEN_URL = '{0}{1}'.format(AUTHORITY, '/common/oauth2/v2.0/token')

# The scopes required by the app
SCOPES = ['openid',
          'User.Read',
          'Mail.Read',
          'Calendars.Read']


def get_signin_url(redirect_uri):
    """Build the query parameters for the signin url"""
    params = {
        'client_id': CLIENT_ID,
        'redirect_uri': redirect_uri,
        'response_type': 'code',
        'scope': ' '.join(str(i) for i in SCOPES)
    }

    sign_in_url = AUTHORIZE_URL.format(urlencode(params))

    return sign_in_url


def get_token_from_code(auth_code, redirect_uri):
    # Build the post form for the token request
    post_data = {
        'grant_type': 'authorization_code',
        'code': auth_code,
        'redirect_uri': redirect_uri,
        'scope': ' '.join(str(i) for i in SCOPES),
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET
    }

    response = requests.post(TOKEN_URL, data=post_data)

    try:
        return response.json()

    except Exception:  # pylint: disable=broad-except
        return 'Error retrieving token: {0} - {1}'.format(
            response.status_code, response.text)
