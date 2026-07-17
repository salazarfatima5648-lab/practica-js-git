// Ejercicio 10

const nombreEmpleado = "Andrea";
const sueldoDiario = 300;
const diasTrabajados = 15;
const horasExtra = 5;

// operaciones
const sueldoBase = sueldoDiario * diasTrabajados;

const costoHora = sueldoDiario / 8;
const pagoHorasExtra = horasExtra * (costoHora * 2);

const sueldoBruto = sueldoBase + pagoHorasExtra;
const retenciones = sueldoBruto * 0.09;

// validacion del bono
const recibeBono = diasTrabajados >= 15 && horasExtra <= 10;

let sueldoNeto = sueldoBruto - retenciones;

if (recibeBono === true) {
    sueldoNeto = sueldoNeto + 500;
}

// imprimir resultado
console.log("Empleado: " + nombreEmpleado);
console.log("Sueldo diario: $" + sueldoDiario.toFixed(2));
console.log("Días trabajados: " + diasTrabajados);
console.log("Horas extra: " + horasExtra);
console.log("Sueldo Base: $" + sueldoBase.toFixed(2));
console.log("Pago Horas Extra: $" + pagoHorasExtra.toFixed(2));
console.log("Sueldo Bruto: $" + sueldoBruto.toFixed(2));
console.log("Retenciones (9%): $" + retenciones.toFixed(2));
console.log("¿Tiene bono?: " + recibeBono);
console.log("TOTAL NETO: $" + sueldoNeto.toFixed(2));