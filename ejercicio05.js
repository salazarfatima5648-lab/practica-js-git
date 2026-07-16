// Ejercicio 05: Divisiones y módulo

//  Declaramos los dos numeros enteros 
const a = 47;
const b = 6;

//  Realizamos los cálculos
const divisionReal = a / b;
const cocienteEntero = Math.floor(a / b);
const residuo = a % b;

// Comprobación matemática
const comprobacion = (cocienteEntero * b) + residuo;

//  Confirmamos si el número 'a' es par o impar
const esPar = (a % 2 === 0);

//  Impresión en del resultado
console.log(`División real: ${divisionReal}
Cociente entero: ${cocienteEntero}
Residuo: ${residuo}
Comprobación: ${cocienteEntero} * ${b} + ${residuo} = ${comprobacion}
¿El número ${a} es par?: ${esPar}`);