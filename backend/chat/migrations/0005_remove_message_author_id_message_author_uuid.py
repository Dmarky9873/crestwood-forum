# Generated by Django 5.1.3 on 2024-11-30 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0004_message_author_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='author_id',
        ),
        migrations.AddField(
            model_name='message',
            name='author_uuid',
            field=models.UUIDField(default=1),
            preserve_default=False,
        ),
    ]