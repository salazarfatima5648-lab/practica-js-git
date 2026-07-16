//Ejercicio 04 — Ticket de venta con IVA//

// Declaracion de precios de los productos//

let producto1 =  140.5;
let producto2 = 45.8;
let producto3 = 30;
let producto4 = 90;

// calcular el subtotal de los productos //
const subtotal = producto1 + producto2 + producto3 + producto4;

// se calcula el IVA (16%) y el total con el IVA incluido
const iva = subtotal * 0.16;
let total = subtotal + iva;

// se aplica el descuento que es del 10% con el operador (*=)
//se resta el 10% ( total = total * 0.90)
total *=0.90;

// // imprimimos
console.log(`
- TICKET DE VENTA -
Subtotal: $${subtotal.toFixed(2)}
IVA (16%): $${iva.toFixed(2)}
Total con IVA: $${(subtotal + iva).toFixed(2)}
Total Final (con 10% de descuento): $${total.toFixed(2)}`);