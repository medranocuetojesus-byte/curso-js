//Estructuras = obejetos
// Desestructuras = abrir obejetos
const persona = {
  apellidos: "Medrano Cueto",
  nombres:  "Jesus Antonio",
  edad:    19,
  skills: ["PHP", "JAVA", "JAVASCRIPT", "SQL" , "Python"]
}

//GUARDAR APELLIDOS , NOMBRES , EDAD EN VARIABLES
/* 
const persona = persona,apellidos
const nombres = persona.nombres
const edad = persona.edad
*/

// Desestructurar es separar datos provenientes de un objeto
// NOTA : no es neceesario recuperar toda la coleccion
// Nota : La variable deben coinciden con las claves
const {  nombres , skills } = persona

console.log( nombres, skills)

