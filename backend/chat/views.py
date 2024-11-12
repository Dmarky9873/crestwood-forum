from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MessageSerializer
from .models import Message


class MessageView(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()
