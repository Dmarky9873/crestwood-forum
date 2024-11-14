from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    uuid = models.UUIDField(primary_key = False)
    username = models.CharField(max_length=255, blank = True, null = True, unique = True, verbose_name=("Username"))
    password = models.CharField(max_length=255)
    email = models.EmailField(unique = True, verbose_name=('Email Address'))
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    objects = models.Manager()

    USERNAME_FIELD = "username"

    EMAIL_FIELD = "email"

    REQUIRED_FIELDS = ["email", "password", "first_name", "last_name"]

    def __str__(self):
        return str(self.username)