from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    uuid = models.UUIDField(primary_key=False)
    username = models.CharField(
        max_length=255, blank=True, null=True, unique=True, verbose_name=("Username"))
    password = models.CharField(max_length=255)
    email = models.EmailField(unique=True, verbose_name=('Email Address'))
    firstName = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)

    def __str__(self):
        return str(self.username)
