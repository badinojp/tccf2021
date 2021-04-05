# Code Challenge: Filter

El objetivo del challenge es implementar una función que permita filtrar por 
diferentes campos y con varios operadores de comparación sobre una lista de items.

La función ya cuenta con un listado de items sobre el cual se deben aplicar los filtros y no debe ser modificado

La función cuenta con una serie de constantes que validan los tipos de operadores de comparación validos.


## Entrada

##### Parámetros
- **field**: String (Define el campo por el cual se aplicará el filtro)
- **operator**: String [EQUAL, CONTAINS, GREATER_THAN, LESS_THAN] (Define el operador de comparación para aplicar el filtro)
- **value**: String|Number|Boolean (Define el valor para aplicar el filtro)

Ejemplo:
```
filter("product", "CONTAINS", "phone")
```
## Salida

- Array de Objetos 

Ejemplo:  
```
[  
    {id: 1, product: "Drone A200", price: 56, inStock: true},  
    {id: 2, product: "Drone A500", price: 72, inStock: false}  
]
```

## Ejemplo
Si la función filter es llamada por el campo "price", el operador de comparación "EQUAL" y el valor 82, 
debe retornar un array con los dos objetos que tienen el valor 82 en su precio.


- INPUT: 
``` 
filter("price", "EQUAL", 82)
```

- OUTPUT: 
```
[  
  {id: 3, product: "Drone A900", price: 82, inStock: true},  
  {id: 9, product: "TV s100", price: 82, inStock: true},  
]
```


## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Botón: use this template) debe estar autenticado en github.
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos

## Ejecutar Pruebas

Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```
