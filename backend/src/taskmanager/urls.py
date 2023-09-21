from django.urls import path

from . import views

urlpatterns = [
    path('tasks/', views.TaskListView.as_view(), name='task-list'),
    path('tasks/create/', views.create_task, name='task-create'),
    path('taskmanager/tasks/<int:task_id>/update/', views.update_task, name='update-task'),
    path('tasks/<int:task_id>/delete/', views.delete_task, name='task-delete'),
]