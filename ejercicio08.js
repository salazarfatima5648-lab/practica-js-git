// Ejercicio 08 - Reglamento de beca

/* 

Prueba 1: promedio = 9.5, materiasReprobadas = 0, esDeportista = false -> Resultado esperado: true
Prueba 2: promedio = 8.5, materiasReprobadas = 0, esDeportista = false -> Resultado esperado: false
Prueba 3: promedio = 7.5, materiasReprobadas = 2, esDeportista = true  -> Resultado esperado: true
*/

// Declaración de variables 
const promedio = 9.5;
const materiasReprobadas = 0;
const esDeportista = false;

// expresión lógica usando && (Y) y || (O)
const obtieneBeca = (promedio >= 9.0 && materiasReprobadas === 0) || esDeportista;

// Impresión del resultado
console.log(`¿El alumno obtiene la beca?: ${obtieneBeca}`);