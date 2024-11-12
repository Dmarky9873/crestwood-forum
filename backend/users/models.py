from django.db import models


class User(models.Model):
    id = models.UUIDField(primary_key=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    age = models.IntegerField()
    grade = models.IntegerField()

    def __str__(self) -> str:
        return str(self.username)
