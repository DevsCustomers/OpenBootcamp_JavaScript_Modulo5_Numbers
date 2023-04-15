// EJERCICIO MODULO 5 = Numeros en JavaScript
// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga tu altura en centímetros (entero)
// - Una variable que contenga tu altura en metros (número de coma flotante)
// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
// - Una variable que contenga tu altura en metros redondeada hacia arriba
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

const alturaEnCentimetros = 175;
const alturaEnMetros = alturaEnCentimetros / 100;
const pesoEnKilogramos = 65.5;
const alturaRedondeadaHaciaArriba = Math.ceil(pesoEnKilogramos);
const pesoRedondeadoHaciaAbajo = Math.floor(pesoEnKilogramos);
const maximoValorEnJS = Number.MAX_SAFE.INTEGER;
const maximoValorEnJSmasUno = maximoValorEnJS +1;
const comparacion = maximoValorEnJSmasUno === maximoValorEnJS;

console.log("Altura en centimetros: " + alturaEnCentimetros);
console.log("Altura en metros: " + alturaEnMetros);
console.log("Peso en kilogramos: " + pesoEnKilogramos);
console.log("Altura redondeada hacia arriba: " + alturaRedondeadaHaciaArriba);
console.log("Peso redondeado hacia abajo: " + pesoRedondeadoHaciaAbajo);
console.log("Maximo valor en JS + 1 es igual a maximo valor en JS? " + comparacion);

