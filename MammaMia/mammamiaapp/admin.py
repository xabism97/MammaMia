from django.contrib import admin
from .models import Ingrediente, TipoMasa, Pizza

# Register your models here.
admin.site.register(Ingrediente)
admin.site.register(TipoMasa)
admin.site.register(Pizza)