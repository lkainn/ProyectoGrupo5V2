# Generated by Django 4.2.5 on 2023-09-24 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task_manager', '0004_alter_task_created_alter_task_updated'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='created',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]