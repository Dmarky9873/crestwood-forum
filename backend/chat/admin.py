from django.contrib import admin
from .models import Message


class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'body')


admin.site.register(Message, MessageAdmin)
