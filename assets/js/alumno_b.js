
let rutasEspeciales = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao"];


rutasEspeciales.splice(2, 1);


rutasEspeciales.reverse();


let palabra = "LOGISTICA";
let palabraInvertida = palabra.split("").reverse().join("");

console.log("Rutas especiales:", rutasEspeciales);
console.log("Palabra invertida:", palabraInvertida);