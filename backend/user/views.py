"""

    By: Daniel Markusson


"""

import json
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt  # Temporarily disable CSRF for this view
def api_login(request: object) -> object:
    """ Log in a user using the REST API.

    Args:
        request (object): The request object including a username, password, and CSRF token.

    Returns:
        object: Returns a JSON response with a success or error message.
    """
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            password = data.get("password")
            username = data.get("username")

            user = authenticate(username=username,
                                password=password)
            if user is not None:
                login(request, user)
                return JsonResponse({"message": "Login successful!"}, status=200)

            return JsonResponse({"error": "Invalid credentials."}, status=401)

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Only POST requests are allowed."}, status=405)
