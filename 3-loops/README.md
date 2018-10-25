# Loops

Implementar las funciones usando la la expresion `while`.

## Requisitos
- Node
- npm

## Setup

Abrir una consola sobre la carpeta _3-loops_ y correr el siguiente comando
```bash
npm install
```

## Como probar el codigo

Abrir una consola sobre la carpeta _3-loops_ y correr el siguiente comando
```bash
npm test
```

## Entendiendo los tests

Las pruebas del codigo estan escritas en el archivo _test/test.js_. 

La funcion `decribe` separa las pruebas en distintos modulos, es por un tema de belleza :D. 

La funcion `it` describe que deberia hacer la prueba que se va a realizar

La funcion `assert.equal` comapra la igualdad de dos valores. Tiene dos parametros:
- `assert`: evaluacion de la funcion a testear
- `expected`: el valor esperado de retorno de la funcion

Al correr el comando `npm test` estamos pasando por todos los tests. Estos tests imprimen en la consola los resultados. Vamos a ver en verde los tests de las funciones que fueron implementadas correctamente y en rojo las erroneas. Un poco mas abajo podemos leer la descripcion del error: cual fue el resultado del assert, y cual era el resultado esperado.

## TDD

Esta tecnica de programacion se llama TDD: Test-driven development. Ayuda a realizar desarrollo corto y concreto. El proceso consta de escribir primero que resultado esperamos de una funcion, y luego programarla. Es un ciclo repetitvo: una vez que progamamos correctamente la funcion, agregamos nuevos tests que impliquen mejorarla.

Para este ejercicio les dejo escritos los tests, y ustedes tiene que escrbir las funciones.

Es importante entender que se esta probando. Para eso analicemos el ejemplo `sumatoria`:
```js
describe('sumatoria(numeros)', function() { // vamos a probar la fucion sumatoria
	it('deberia sumar todos los numeros', function() { // describimos que esperamos de la funcion
		//           pruebo la funcion        // y este es el esultado esperado
		assert.equal(index.sumatoria([1, 2, 3]), 6) // assert.equal compara que ambos sean iguales e imprime el resultado en pantalla
	})
})
```
