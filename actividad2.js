//Crear un objeto que almacena datos de una mascota
//desestructurar utilizando un minimo de 4 variables
//mostrar en consola.

const mascota = {
    nombre: "Coco",
    especie: "Gato",
    edad: 1,
    color: "Blanco",
    raza: "Persa",
    peso: 4.5,
    sexo: "Macho",
    nombreDueño: "Jesús",
    vacunado: true,
    comidaFavorita: "Atun"
};

const { nombre, edad, especie, raza, peso, vacunado } = mascota;

console.log("La mascota se llama:", nombre);
console.log("Tipo de animal:", especie);
console.log("Años de edad:", edad);
console.log("Raza de la mascota:", raza);
console.log("Peso en kg:", peso);
console.log("Estado de vacunación:", vacunado);
