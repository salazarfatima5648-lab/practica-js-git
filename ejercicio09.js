

/*
Documentación que se requiere para la inscripción:
Caso 1 (Entra): estaInscrito = true, tieneCredencial = true, tienePermiso = false, tieneAdeudoBiblioteca = false -> Resultado: true
Caso 2 (No entra): estaInscrito = true, tieneCredencial = false, tienePermiso = false, tieneAdeudoBiblioteca = false -> Resultado: false
*/

//  Declaración de las cuatro variables booleanas 
const estaInscrito = true;
const tieneCredencial = true;
const tienePermiso = false;
const tieneAdeudoBiblioteca = false;

//  Construcción de la expresión lógica con &&, || y !
const accesoPermitido = estaInscrito && (tieneCredencial || tienePermiso) && !tieneAdeudoBiblioteca;

// 3. Impresión del resultado
console.log(`¿El acceso al laboratorio está permitido?: ${accesoPermitido}`);