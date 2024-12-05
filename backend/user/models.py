import uuid
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager


class CustomUser(AbstractUser):
    username = models.CharField(
        max_length=150,
        unique=True,
        blank=False,
        null=False,
    )

    uuid = models.UUIDField(
        primary_key=False,
        editable=False,
        default=uuid.uuid4,
    )

    email = models.EmailField(_("email address"), unique=True)

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    objects = CustomUserManager()

    def __str__(self):
        return str(self.username)
