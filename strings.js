let nombre = 'Alexis';
let apellido = 'Franco';

let estudiante = nombre.concat(' ', apellido);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let contEstudiante = estudiante.length
console.log(contEstudiante);

let primerLetraNombre = nombre.charAt(0);
console.log(primerLetraNombre);

let ultimaLetraApellido = apellido.charAt(5);
console.log(ultimaLetraApellido);

let estudianteTrim = estudiante.trim();
console.log(estudianteTrim);

let verdad = (estudiante.includes('Alexis'));
console.log(verdad);