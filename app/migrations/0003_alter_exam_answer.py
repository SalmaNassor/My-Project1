# Generated by Django 5.0.7 on 2024-07-14 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_exam_answer_exam_question'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exam',
            name='answer',
            field=models.CharField(max_length=1, null=True),
        ),
    ]