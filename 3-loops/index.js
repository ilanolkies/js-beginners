/**
 * Ejemplo
 * Devuelve la sumatoria de los numeros
 * @param {number[]} numeros Lista de numeros a sumar
 */
function sumatoria(numeros) {
	var resultado = 0;

	var i = 0;
	while(i < numeros.length) {
		resultado += numeros[i];
		i++;
	}

	return resultado;
}

/**
 * Ejemplo
 * Devuelve la concatenacion de palabras separas por un espacio
 * @param {string[]} palabras Lista de palabras a concatenar
 */
function concatenacion(palabras) {
	var resultado = "";

	var i = 0;
	while(i < palabras.length) {
		resultado += palabras[i] + " ";
		i++;
	}

	return resultado;
}

/**
 * Devuelve la productoria de los numeros
 * @param {number[]} numeros Lista de numeros a multiplicar
 */
function productoria(numeros) {
	return "Implementar!";
}

/**
 * Devuelve la sumatoria de los numeros positivos
 * @param {number[]} numeros Lista de numeros a sumar
 */
function sumatoriaPositivos(numeros) {
	return "Implementar!";
}

/**
 * Devuelve la sumatoria de la resta de los numeros de dos listas tomados de apares
 * Ayuda: resultado = sumatoria (a[i]-b[i])
 * @param {number[]} a Lista de numeros a sumar
 * @param {number[]} b Lista de numeros a restar
 */
function sumatoriaDeResta(a, b) {
	return "Implementar!";
}

/**
 * Devuelve la sumatoria de los numeros mas grandes de dos listas tomados de a pares
 * @param {number[]} a Lista de numeros a sumar
 * @param {number[]} b Lista de numeros a sumar
 */
function sumatoriaDeGrandes(a, b) {
	return "Implementar!";
}

/**
 * Devuelve la concatenacion de la plabra mas larga de dos listas tomadas de a pares, separadas por espacios
 * @param {string[]} a Lista de palabras a concatenar
 * @param {string[]} b Lista de palabras a concatenar
 * Ayuda: el tamaño de una palabra se mide con .length
 */
function concatenacionDeLargas(a, b) {
	return "Implementar!";
}

/**
 * Devuelve la concatenacion de una lista de palabras al revez separadas por espacios.
 * @param {string[]} palabras Lista de palabras a concatenar
 */
function concatenacionAlRevez(palabras) {
	return "Implementar!";
}

/**
 * Devuelve dos veces la concatenacion de una lista de palabras separadas por espacios. Primero al derecho, despues
 * @param {string[]} palabras Lista de palabras a concatenar
 */
function concatenacionIdaYVuelta(palabras) {
	return "Implementar!";
}

/**
 * Devuelve la concatenacion de las n primeras palabras
 * @param {string[]} palabras Lista de palabras a concatenar
 * @param {number} n Indica cuantsa palabras concatenar (Pre: n <= palabras.length)
 */
function concatenacionDeNPalabras(palabras, n) {
	return "Implementar!";
}

/**
 * Devuelve la concatenacion de las palabras que empiezan con el caracter c
 * @param {string[]} palabras Lista de palabras a concatenar
 * @param {caracter} c Indica con que caracter comparar la primer letra
 * Ayuda: la primer letra de una palabra es palabra[0]
 * Que interesante! Los strings son listas de caracteres ;)
 */
function concatenacionPorInicial(palabras, c) {
	return "Implementar!";
}

/**
 * Devuelve la concatenacion de las palabras que estan antes de la palabra p
 * @param {string[]} palabras Lista de palabras a concatenar
 * @param {string} p La ultima palabra a concatenar
 * Ayuda: la plabra no necesariamente esta en la lista
 */
function concatenacionHastaPalabra(palabras, p) {
	return "Implementar!";
}

/**
 * Devuelve la lista de numeros positivos de una lista
 * @param {number[]} numero Lista de numeros a seleccionar positivos
 * Ayuda: para agregar elementos a una lista usamos lista.push(elemento)
 */
function listaDePositivos(numeros) {
	return "Implementar!";
}

/**
 * Dada una lista de numeros, sea n la sumatoria de esos numeros
 * Devuelve la concatenacion de las n primeras palabras que empiezan con el caracter c
 * @param {string[]} palabras Lista de palabras a concatenar
 * @param {caracter} c Indica con que caracter comparar la primer letra
 * @param {numeros} numeros Los n numeros a sumar (Pre: no necesariamente palabras.length <= sumatora numeros!)
 */
function terminatorFacil(palabras, c, numeros) {
	return "Implementar!";
}

/**
 * Esta funcion esta jodida! Tiene varios pasos:
 * La lista selector puede tener valores 1 o 2. Esa lista se va a usar para elegir entre dos listas de palabras
 * De dos listas de palabras toma la palabra que indica selector
 * Estas tres listas tienen el mismo tamaño
 * Si la palabra empieza con el caracter c, la agrega a una lista en mayusucla, sino en minuscula
 * Devuelve esa lista de palabras seleccionadas con las respectivas palabras en mayuscula
 * Ayuda: entender el test
 * @param {string[]} a la primer lista de palabras
 * @param {string[]} b la segunda lista de palabras
 * @param {number[]} selector la lista de numeros selector (los valores son 1 o 2)
 * @param {caracter} c el caracter para pasar a mayuscula las palabras
 */
function terminatorDificil(a, b, selector, c) {
	return "Implementar!";
}

/**
 * Hay dos listas de numeros a y b, con n elementos ambos.
 * Hay una lista de palabras de n^2 elementos
 * Devuelve una seleccion de las palabras de una forma muy particular:
 * solo las palabras palabras (i*n + j)-esimas tales que a[i]-b[j] sea mayor a la longitud de la palabra
 */
function terminatorMaxima(a, b, palabras) {
	return "Implementar!";
}

module.exports = {
	sumatoria,
	concatenacion,
	productoria,
	sumatoriaPositivos,
	sumatoriaDeResta,
	sumatoriaDeGrandes,
	concatenacionDeLargas,
	concatenacionAlRevez,
	concatenacionIdaYVuelta,
	concatenacionDeNPalabras,
	concatenacionPorInicial,
	concatenacionHastaPalabra,
	listaDePositivos,
	terminatorFacil,
	terminatorDificil,
	terminatorMaxima
}
