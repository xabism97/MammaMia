from django.db import models

# Create your models here.

class TipoMasa(models.Model):
	nombre = models.CharField(max_length = 50)

class Ingrediente(models.Model):
	nombre = models.CharField(max_length = 50)

class Pizza(models.Model):
	nombre = models.CharField(max_length = 50)
	tipoMasa = models.ForeignKey(TipoMasa, on_delete = models.CASCADE)
	ingredientes = models.ManyToManyField(Ingrediente)
	precio = models.FloatField()	