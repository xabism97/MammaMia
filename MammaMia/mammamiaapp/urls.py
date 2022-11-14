from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('pizzas', views.index_pizzas, name='pizzas'),
    path('pizzas/<int:pizza_id>/', views.show_pizza, name='pizza_detail'),
    path('ingredientes', views.index_ingredientes, name='ingredientes'),
    path('ingredientes/<int:ingrediente_id>/', views.show_ingrediente, name='ingrediente_detail'),
    path('tiposmasa', views.index_tiposmasa, name='tiposmasa'),
    path('tiposmasa/<int:tipomasa_id>/', views.show_tipomasa, name='tiposmasa_detail'),
    #path('tiposmasa/<int:tipomasa_id>/', views.get_pizzas, name='tiposmasa_detail')
]

