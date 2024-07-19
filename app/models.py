from django.db import models
from django.contrib.auth.models import User

class Course(models.Model):
    course_name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.course_name

class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    courses = models.ManyToManyField(Course)

    def __str__(self):
        return self.user.username

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    courses = models.ManyToManyField(Course)

    def __str__(self):
        return self.user.username
    
class Question(models.Model):
    quenstion_desc = models.CharField(max_length=200)

    def __str__(self):
        return self.quenstion_desc

    

class Exam(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    date = models.DateField()

    def __str__(self):
        return self.question.quenstion_desc



class Answer(models.Model):
    answer_desc = models.CharField(max_length=1)
    question = models.OneToOneField(Question, on_delete=models.CASCADE)

    def __str__(self):
        return self.answer_desc


    

class Result(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE)
    score = models.FloatField()

    def __str__(self):
        return self.student
