import os
import json

my_path = os.path.abspath(os.path.dirname(__file__))

with open(os.path.join(my_path, 'static/data/mammamiadata.json')) as file:
    file = json.load(file)

df = file

pizzas = []
for i in df:
    if i['model'] == 'mammamiaapp.pizza':
        pizzas.append(i)
        print(i['fields']['nombre'])

print(pizzas)