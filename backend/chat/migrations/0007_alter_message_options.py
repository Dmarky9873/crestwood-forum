# Generated by Django 5.1.3 on 2024-12-01 01:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0006_remove_message_author_uuid_message_author'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='message',
            options={'permissions': [('can_create_message', 'Can create message')]},
        ),
    ]