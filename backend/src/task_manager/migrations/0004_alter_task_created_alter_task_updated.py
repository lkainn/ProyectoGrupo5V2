# Generated by Django 4.2.5 on 2023-09-23 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task_manager', '0003_task_created_task_updated'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='created',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='updated',
            field=models.DateField(auto_now_add=True),
        ),
    ]
