# from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import JsonResponse


def login_user(request):
    """ Logs in a user from a POST request.

    Args:
        request (any): The request object that contains the user's login information.

    Returns:
        JsonResponse: The response to the frontend on whether or not the user was successfully 
        logged in.
    """
    username = request.POST["username"]
    password = request.POST["password"]
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({"status": "ok", "message": "Login successful"})

    return JsonResponse({"status": "error", "message": "Invalid credentials"}, status=401)
