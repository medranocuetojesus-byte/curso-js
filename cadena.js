//Cadenas = conjunto de caracteres
//1 solo caracter = CHAR

//Existen 3 formas para crear cadenas JS:
const tradicional = "Hola soy un texto"
const simple = 'un gusto conocerte'
const mensaje = `Soy un texto muy especial` //Backticks

//Backticks permite multilínea + inyección
const nombre = 'Jhon'
const carrera = 'programador'

const historia = `
Esta es la historia de ${nombre}
un ${carrera}
que solo quería Vibecodear
`

//console.log(historia)

//Propiedades
const longitud = carrera.length //Total de caracteres
//console.log(longitud)

//Esta constante NO es un arreglo
const amigos = "Luis, Miguel, Juan, José, Raul, Ernesto"

//Métodos
console.log('concat:',carrera.concat(nombre)) //concatenar (unir)
console.log('repeat:', carrera.repeat(3)) //repetir
console.log('replace:', carrera.replace('a', '@')) //reeemplazar primero
console.log('uppercase:', carrera.toUpperCase()) //mayúscula
console.log('lowercase:', carrera.toLowerCase()) //minúscula
console.log('replace all:', carrera.replaceAll('a', '@')) //reemplezar todos
console.log('split:', amigos.split(',')) //Devuelve un array
console.log('trim:', carrera.trim()) //quita espacios vacios extremos

//Extraer los 3 primeros caracteres
console.log('3 primeros:', carrera.substring(0, 3)) //0 = index (inicio), 3 = total

//Extraer "grama" de programador
console.log('caracteres internos:', carrera.substring(3, 8))