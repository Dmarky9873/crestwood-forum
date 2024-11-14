from django.db import models

class Message(models.Model):
    id = models.UUIDField(primary_key=True)
    title = models.CharField(max_length=300)
    body = models.TextField(max_length=10000)

    objects = models.Manager()

    def __str__(self) -> str:
        return str(self.title)
