from django.urls import path
from . import views

urlpatterns = [
    path('sortear/', views.sorteador_topicos)
]