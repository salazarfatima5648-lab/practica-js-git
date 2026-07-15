// Declaración de las seis variables
const entero = 50;
const decimal = 12.5;
const cadena = "HOLA FATY";
const booleano = false;
let sinValor;
let valorNull = null;

// Detector de tipos de datos en pantalla
console.log(`
DETECTOR DE TIPOS DE DATOS
El valor es ${entero} y su tipo es: ${typeof entero}
El valor es ${decimal} y su tipo es: ${typeof decimal}
El valor es ${cadena} y su tipo es: ${typeof cadena}
El valor es ${booleano} y su tipo es: ${typeof booleano}
El valor es ${sinValor} y su tipo es: ${typeof sinValor}
El valor es ${valorNull} y su tipo es: ${typeof valorNull}
`);

/* Nota: Lo de que typeof null de object es por un error viejo de cuando crearon JavaScript en 1995 
   La computadora detectaba los objetos con un código de puros ceros Como el valor de 'null' 
   también se guarda en la memoria usando solo ceros el programa se confundió y lo marcó como objeto 
   nunca lo arreglaron para no romper las páginas web viejitas que ya usaban ese código. */