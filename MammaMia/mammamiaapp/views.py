from django.shortcuts import render

from django.conf import settings
import os
from pathlib import Path
import json
from django.http import JsonResponse

from django.http import HttpResponse
from django.shortcuts import get_object_or_404, get_list_or_404
from .models import Ingrediente, TipoMasa, Pizza

def index(request):
	return render(request, 'index.html')

def index_pizzas(request):
	pizzas = get_list_or_404(Pizza.objects.order_by('nombre'))
	#output = ', '.join([p.nombre for p in pizzas])
	#return HttpResponse(output)
	context = {'lista_pizzas': pizzas}
	return render(request, 'pizzas.html', context)

def show_pizza(request, pizza_id):
	pizza = get_object_or_404(Pizza, pk = pizza_id)
	#output = f'Detalles de la pizza: {pizza.nombre}, {pizza.tipoMasa}, {pizza.ingredientes}, {pizza.precio}'
	#return HttpResponse(output)
	context = {'pizza': pizza}
	return render(request, 'pizzadetail.html', context)

def index_ingredientes(request):
	ingredientes = get_list_or_404(Ingrediente.objects.order_by('nombre'))
	#output = ', '.join(i.nombre for i in ingredientes)
	#return HttpResponse(output)
	context = {'lista_ingredientes': ingredientes}
	return render(request, 'ingredientes.html', context)

def show_ingrediente(request, ingrediente_id):
	ingrediente = get_object_or_404(Ingrediente, pk = ingrediente_id)
	pizzas = get_list_or_404(Pizza.objects.order_by('nombre'))
	#output = f'Detalles del ingrediente: {ingrediente.nombre}'
	#return HttpResponse(output)
	context = {'ingrediente': ingrediente, 'lista_pizzas' : pizzas}
	return render(request, 'ingredientedetail.html', context)

def index_tiposmasa(request):
	tiposmasa = get_list_or_404(TipoMasa.objects.order_by('nombre'))
	#output = ', '.join(t.nombre for t in tiposmasa)
	#return HttpResponse(output)
	context = {'lista_tiposmasa': tiposmasa}
	return render(request, 'tiposmasa.html', context)

def show_tipomasa(request, tipomasa_id):
	tipomasa = get_object_or_404(TipoMasa, pk = tipomasa_id)
	pizzas = get_list_or_404(Pizza.objects.order_by('nombre'))
	#output = f'Detalles de la masa: {tipomasa.nombre}'
	#return HttpResponse(output)
	context = {'tipomasa': tipomasa, 'lista_pizzas' : pizzas}
	return render(request, 'tipomasadetail.html', context)

def loadjson(request):
  my_path = os.path.abspath(os.path.dirname(__file__))

  with open(os.path.join(my_path, 'static/data/mammamiadata.json')) as file:
    file = json.load(file)


  to_json = {
  	"nombre": "value" 
  }

  return HttpResponse(json.dumps(file, indent = 1), content_type='application/json')

  

  