// Ejercicio 06: Segundos a formato de tiempo

//  Declaracion de la variable en segundos 
const segundosTotales = 7385;

//  Calculamos horas, minutos y segundos
const horas = Math.floor(segundosTotales / 3600);
const minutos = Math.floor((segundosTotales % 3600) / 60);
const segundos = segundosTotales % 60;

// impresion del resultado
console.log(`${horas} h ${minutos} min ${segundos} s`);