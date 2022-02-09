from calculator import views
from django.urls import path

urlpatterns = [
    path('', views.calculator, name='calculator')
]
