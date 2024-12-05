from django.middleware.csrf import get_token
from rest_framework import viewsets
from .serializers import MessageSerializer
from .models import Message


class MessageView(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()

    def list(self, request, *args, **kwargs):
        # Add the CSRF token to the response
        csrf_token = get_token(request)

        # Get the original list response
        response = super().list(request, *args, **kwargs)

        # Add CSRF token to the response headers
        response['X-CSRFToken'] = csrf_token

        return response
