//Almacenar un texto en una variable y luego mostrarlo en orden inverso en la consola
//Ejemplo: "senati" -> "itanes"

let palabra = "Senati";
let resultado = "";

for (let i = palabra.length - 1; i >= 0; i--) {
  resultado += palabra[i];
}

console.log("Texto invertido:", resultado);

//Crear una variable donde almacene una dirección de correo electrónico
//verificar si el correo es válido cuando tiene un solo @
//Ejemplo:
// jhon@gmail.com  [correctp]
// luis@gmail@.com [incorrecto]
// mariagmail.com  [incorrecto]

const email = "jhon@gmail.com";
let arrobas = 0;

for (const caracter of email) {
  //Calcular cuántos @ encuentras...
  if (caracter === "@") {
    arrobas = arrobas + 1;
  }
}

let valido = false;

if (arrobas === 1) {
  valido = true;
}

console.log("Correo ingresado:", email);
console.log("Número de arrobas:", arrobas);
console.log("¿Es correcto?:", valido);