
//Yo puedo comentar una sola line con doble slash

/*
var primerNombre = "Gato";
console.log(primerNombre);
var edad = 22;
var sueldo = 1200.45;

console.log(edad);

var tieneTrabajo = false;

console.log(tieneTrabajo);

var puestoDeTrabajo;

console.log(puestoDeTrabajo);

tieneTrabajo = null;

console.log(tieneTrabajo);

*/
/*
var primerNombre, edad, sexo, esSoltero;
primerNombre ='Grover'; 
edad = 34;
sexo = 'masculino';
esSoltero = false;

console.log('El nombre es: ' + primerNombre + ' su edad es: '+ edad + ' y es de sexo: ' + sexo + '. ¿Es soltero? ' + esSoltero);

//mutacion de variables
edad = 'veinte';

*/

/***************************
 * Operadores - Matemáticas*
 */ 

 var edadElver, edadSebas, actualYear;

 edadElver = 22;
 edadSebas = 9;
 yearActual = 2019;

 var diferenciaEdad = edadElver - edadSebas;
 var sumaEdades = edadElver + edadSebas;
 
 var yearElver = yearActual - edadElver;
 var yearSebas = yearActual - edadSebas;

 console.log(diferenciaEdad);
 console.log(sumaEdades);

console.log('la fecha de nacimientod de Elver es: ' + yearElver);
console.log('la fecha de nacimientod de Sebas es: ' + yearSebas);


/************************
 * Operadore Lógicos
 */

var SebasMayor = edadSebas > edadElver;

console.log('Sebas es mayor que Elver? ' + SebasMayor);

//Operador tyoeOf

console.log(typeof edadElver);

//Operadores de tipo Unarios aritmeticos
//++
//--

var edadCarmen = 14;
var edadMaria = 18;

edadCarmen++;
//Cuando ponemos ++edadCarmen el resultado es difernte pues primero ejecuta la sume. similar con --

console.log(edadCarmen);

//Operadores de asignacion (=) Trivial Pasemos al siguiente video :V.

//Ejercicios de codificacion 1.

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

/*Utilizar la siguiente formula para calcular el IMC (indice de masa corporal) de Luis y Carlos, IMC es igual al peso 
dividido la altura al cuadrado, luego comparar e indicar si el IMC de Carlos es superior al de Luis.
//Solucion:
*/
var imcLuis = pesoLuis/(alturaLuis)^2;

var imcCarlos = pesoCarlos/(alturaCarlos)^2

if(imcCarlos>imcLuis){
    console.log('El imc de Carlos es superior al de Luis');
}else{
    console.log('El imc de Luis es mayor al de Carlos');
}

