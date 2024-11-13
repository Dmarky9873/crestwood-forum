from django.http import JsonResponse
from django.middleware.csrf import get_token
# from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MessageSerializer
from .models import Message


class MessageView(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()


def csrf_test_view(request):
    # Get the CSRF token for this session
    token = get_token(request)
    return JsonResponse({'csrftoken': token})
