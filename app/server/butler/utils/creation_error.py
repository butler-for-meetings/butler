import json

from flask import Response

def creation_error(e):
    error = f"Missing fields: {str(e).split('argument: ')[1]}"
    response = {
        "message": error.replace("'", "")
    }
    return Response(response=json.dumps(response),
                    status=500,
                    mimetype="application/json")
