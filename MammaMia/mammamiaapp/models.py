from django.db import models

# Create your models here.

class TipoMasa(models.Model):
	nombre = models.CharField(max_length = 50)

	def __str__(self):
		return self.nombre

class Ingrediente(models.Model):
	nombre = models.CharField(max_length = 50)

	def __str__(self):
		return self.nombre

class Pizza(models.Model):
	nombre = models.CharField(max_length = 50)
	tipoMasa = models.ForeignKey(TipoMasa, on_delete = models.CASCADE)
	ingredientes = models.ManyToManyField(Ingrediente)
	precio = models.FloatField()	

	def __str__(self):
		return self.nombre