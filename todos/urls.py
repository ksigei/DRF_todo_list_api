from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListTodo.as_view()),
    path('todo/<int:pk>/', views.DetailTodo.as_view()),
    path('todo/new', views.CreateTodoView.as_view()),
]