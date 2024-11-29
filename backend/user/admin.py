from django.contrib import admin
from .models import CustomUser as User

admin.site.register(User)
