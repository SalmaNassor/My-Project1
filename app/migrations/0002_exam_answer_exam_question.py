# Generated by Django 5.0.7 on 2024-07-14 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='exam',
            name='answer',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='exam',
            name='question',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
