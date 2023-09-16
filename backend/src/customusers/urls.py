from django.urls import path
from . import views
from .views import RegistryCreateView

urlpatterns = [
    path('api/registry/', RegistryCreateView.as_view(), name='registry_create_api'),
]