from django.urls import path
from . import views

urlpatterns = [
    path('/', views.sorteador_topicos)
]