// Ejercicio 03: Conversor de temperatura


//  Declaracion de tempertura en celciuos
const celsius = 25.4; 

// realizamos la coversion 
const fahrenheit = (celsius * 9/5) + 32;
const kelvin = celsius + 273.15;

//  Impresion de toFixed(2)
console.log(` CONVERSOR DE TEMPERATURA 
Grados Celsius: ${celsius.toFixed(2)}°C
Equivalente en Fahrenheit: ${fahrenheit.toFixed(2)}°F
Equivalente en Kelvin: ${kelvin.toFixed(2)}K`);