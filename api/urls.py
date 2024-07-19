from django.urls import path
from app import views

urlpatterns = [
    path('courses/', views.course_list),
    path('courses/<int:pk>/', views.course_detail),
    path('teachers/', views.teacher_list),
    path('teachers/<int:pk>/', views.teacher_detail),
    path('students/', views.student_list),
    path('students/<int:pk>/', views.student_detail),
    path('exams/', views.exam_list),
    path('exams/<int:pk>/', views.exam_detail),
    path('results/', views.result_list),
    path('results/<int:pk>/', views.result_detail),
    path('register/', views.register),
    # path('questions/', views.question),
    # path('login/', views.login),
]
