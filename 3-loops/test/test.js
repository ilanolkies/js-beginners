var index = require('../index.js')
var assert = require('assert')

describe('Ejemplos', function () {
	describe('sumatoria(numeros)', function() {
		it('deberia sumar todos los numeros', function() {
			assert.equal(index.sumatoria([1, 2, 3]), 6)
			assert.equal(index.sumatoria([1, 2, -3]), 0)
			assert.equal(index.sumatoria([100, -200, 300]),200)
		})
	})

	describe('concatenacion(palabras)', function() {
		it('deberia concatenar todas las palabras', function() {
			assert.equal(index.concatenacion(['hola', 'js', 'beginners']), 'hola js beginners ')
			assert.equal(index.concatenacion(['tolo', 'de', 'bizdev']), 'tolo de bizdev ')
			assert.equal(index.concatenacion(['maxi', 'del', 'hoyo']), 'maxi del hoyo ')
		})
	})
})

describe('Numeros', function() {
	describe('productoria(numeros)', function() {
		it('deberia multiplicar todos los numeros', function() {
			assert.equal(index.productoria([2, 3, 4]), 24)
			assert.equal(index.productoria([2, 3, -4]), -24)
			assert.equal(index.productoria([20, 0.5, -1]), -10)
			assert.equal(index.productoria([20, 0.5, 0]), 0)
		})
	})

	describe('sumatoriaPositivos(numeros)', function() {
		it('deberia sumar los positivos', function() {
			assert.equal(index.sumatoriaPositivos([1, 2, 3]), 6)
			assert.equal(index.sumatoriaPositivos([1, -2, 3]), 4)
			assert.equal(index.sumatoriaPositivos([1, 2, -3]), 3)
			assert.equal(index.sumatoriaPositivos([-1, -2, 3]), 3)
			assert.equal(index.sumatoriaPositivos([-1, -2, -3]), 0)
		})
	})

	describe('sumatoriaDeResta(a, b)', function() {
		it('sumar la resta de a pares', function() {
			assert.equal(index.sumatoriaDeResta(
				[10, 20, 30],
				[5, 5, 5]),
			45)
			assert.equal(index.sumatoriaDeResta(
				[1, 2, 3],
				[5, 5, 5]),
			-9)
			assert.equal(index.sumatoriaDeResta(
				[3, -2, 4],
				[-1, -4, 3]),
			7)
		})
	})

	describe('sumatoriaDeGrandes(a, b)', function() {
		it('deberia sumar los mas grandes de a pares', function() {
			assert.equal(index.sumatoriaDeGrandes(
				[10, 20, 30],
				[0, 0, 0]),
			60)
			assert.equal(index.sumatoriaDeGrandes(
				[10, 0, 30],
				[0, 20, 0]),
			60)
			assert.equal(index.sumatoriaDeGrandes(
				[10, 20, 30],
				[0, 40, 30]),
			80)
			assert.equal(index.sumatoriaDeGrandes(
				[-10, -20, 30],
				[0, -30, 0]),
			10)
			assert.equal(index.sumatoriaDeGrandes(
				[0],
				[0]),
			0)
		})
	})
})

describe('Strings', function (){
	describe('concatenacionDeLargas(palabras, n)', function() {
		it('deberia concatenar las palabras mas grandes que n', function() {
			var palabras = ['ilan', 'maximiliano', 'tololo']
			assert.equal(index.concatenacionDeLargas(palabras, 2), 'ilan maximiliano tololo ')
			assert.equal(index.concatenacionDeLargas(palabras, 4), 'maximiliano tololo ')
			assert.equal(index.concatenacionDeLargas(palabras, 5), 'maximiliano tololo ')
			assert.equal(index.concatenacionDeLargas(palabras, 6), 'maximiliano ')
			assert.equal(index.concatenacionDeLargas(palabras, 7), 'maximiliano ')
			assert.equal(index.concatenacionDeLargas(palabras, 100), '')
		})
	})

	describe('concatenacionAlRevez(palabras', function() {
		it('deberia concatenar las palabras de fin a principio', function() {
			assert.equal(index.concatenacionAlRevez(
				['ilan', 'tolo', 'maxi']),
			'maxi tolo ilan ')
			assert.equal(index.concatenacionAlRevez(
				['ilan']),
			'ilan ')
			assert.equal(index.concatenacionAlRevez(
				[]),
			'')
		})
	})

	describe('concatenacionIdaYVuelta(palabras)', function() {
		it('deberia concatenar las palabras de principio a fin y de fin a principio', function() {
			assert.equal(index.concatenacionIdaYVuelta(
				['ilan', 'tolo', 'maxi']),
			'maxi tolo ilan ilan tolo maxi ')
			assert.equal(index.concatenacionIdaYVuelta(
				['ilan']),
			'ilan ilan ')
			assert.equal(index.concatenacionIdaYVuelta(
				[]),
			'')
		})
	})

	describe('concatenacionDeNPalabras(palabras, n)', function() {
		it('deberia concatenar las primeras n palabras', function() {
			var palabras = ['ilan', 'tolo', 'maxi']
			assert.equal(index.concatenacionIdaYVuelta(palabras, 3), 'maxi tolo ilan ')
			assert.equal(index.concatenacionIdaYVuelta(palabras, 2), 'maxi tolo ')
			assert.equal(index.concatenacionIdaYVuelta(palabras, 1),'maxi ')
			assert.equal(index.concatenacionIdaYVuelta(palabras, 0), '')
		})
	})

	describe('concatenacionPorInicial(palabras, c)', function() {
		it('deberia concatenar las palabras que empiezan con c', function() {
			var palabras = ['ilan', 'tolo', 'maxi', 'martin', 'ilario', 'tito', 'mario']
			assert.equal(index.concatenacionPorInicial(palabras, 'i'), 'ilan ilario ')
			assert.equal(index.concatenacionPorInicial(palabras, 't'), 'tolo tito ')
			assert.equal(index.concatenacionPorInicial(palabras, 'm'), 'maxi martin mario ')
			assert.equal(index.concatenacionPorInicial(palabras, 'k'), '')
		})
	})

	describe('concatenacionHastaPalabra(palabras, p)', function() {
		it('deberia concatenar las palabras que estan antes de p', function() {
			var palabras = ['ilan', 'tolo', 'maxi', 'martin', 'ilario', 'tito', 'mario']
			assert.equal(index.concatenacionHastaPalabra(palabras, 'ilan'), 'ilan ')
			assert.equal(index.concatenacionHastaPalabra(palabras, 'martin'), 'ilan tolo maxi martin')
			assert.equal(index.concatenacionHastaPalabra(palabras, 'mario'), 'ilan tolo maxi martin ilario tito mario ')
			assert.equal(index.concatenacionHastaPalabra(palabras, 'juan'), 'ilan tolo maxi martin ilario tito mario ')
		})
	})
})

describe('Con push', function () {
	describe('listaDePositivos', function () {
		it('deberia devolver los positivos de la lista', function () {
			assert.deepEqual(index.listaDePositivos([1, 2, 3]), [1, 2, 3])
			assert.deepEqual(index.listaDePositivos([1, -2, 3]), [1, 3])
			assert.deepEqual(index.listaDePositivos([1, 2, -3]), [1, 2])
			assert.deepEqual(index.listaDePositivos([-1, 2, -3]), [2])
		})
	})
})

describe('Terminator', function () {
	describe('terminatorFacil(palabras, c, numeros)', function() {
		it('deberia devolver las (sumatora de numeros) palabras que empiezan con c', function() {
			var palabras = ['ilan', 'tolo', 'maxi', 'martin', 'ilario', 'tito', 'mario']
			assert.equal(index.terminatorFacil(
				palabras,
				'i',
				[2, -1]),
			'ilan ')
			assert.equal(index.terminatorFacil(
				palabras,
				'i',
				[2, -1, 1, 0]),
			'ilan ilario ')
			assert.equal(index.terminatorFacil(
				palabras,
				'i',
				[2, -1, 100]),
			'ilan ilario ')
			assert.equal(index.terminatorFacil(
				palabras,
				'i',
				[2, -1, 4, -3]),
			'maxi martin ')
			assert.equal(index.terminatorFacil(
				palabras,
				'i',
				[2, -1, 4, -3, 1]),
			'maxi martin mario')
			assert.equal(index.terminatorFacil(
				palabras,
				't',
				[2, -1, 4, -3]),
			'tolo tito ')
			assert.equal(index.terminatorFacil(
				palabras,
				'p',
				[2, -1, 4, -3]),
			'')
		})
	})

	describe('terminatorDificil(a, b, selector, c)', function () {
		it('deberia devolver lo que dice en index', function () {
			assert.deepEqual(index.terminatorDificil(
				['pablo', 'tolo', 'maxi'],
				['banana', 'pera', 'sandia'],
				[1, 2, 1],
				'p'),
			['pablo', 'pera'])
			assert.deepEqual(index.terminatorDificil(
				['pablo', 'tolo', 'maxi'],
				['banana', 'pera', 'sandia'],
				[2, 2, 1],
				'p'),
			['pera'])
			assert.deepEqual(index.terminatorDificil(
				['pablo', 'tolo', 'maxi'],
				['salmon', 'pera', 'sandia'],
				[2, 2, 2],
				's'),
			['snadia'])
		})
	})

	describe('terminatorMaxima(a, b, palabras)', function () {
		it('deberia devolver lo que dice en index', function () {
			assert.deepEqual(index.terminatorMaxima(
				[1, 2],
				[2, 2],
				['avion', 'tren', 'colectivo', 'camion']),
			['avion', 'tren', 'colectivo', 'camion'])
			assert.deepEqual(index.terminatorMaxima(
				[1, 2],
				[2, 3],
				['avion', 'tren', 'colectivo', 'camion']),
			['avion', 'tren', 'colectivo'])
			assert.deepEqual(index.terminatorMaxima(
				[3, 2],
				[2, 2],
				['avion', 'tren', 'colectivo', 'camion']),
			['colectivo', 'camion'])
			assert.deepEqual(index.terminatorMaxima(
				[3, 2],
				[2, 3],
				['avion', 'tren', 'colectivo', 'camion']),
			['colectivo'])
		})
	})
})




/*

	describe('', function() {
		it('', function() {
			assert.equal(index.(), )
		})
	})

*/