//Se requiren tenga claves :
// 2 Cadenas
// 2 numericos (entero , decimal)
// 1 null
// 1 logical (false / true)
// 1 array (cadenas)
// 1 array (objetos)
// 1 objeto (Arrays)

const peliculas = {
  titulo: "Inception",
  director: "Christopher Nolan",
  anio: 2010,
  calificacion: 8.8,
  premioOscar: null,
  esClasica: false,
  generos: ["Ciencia ficción", "Acción", "Suspenso"],

  actores: [
    { nombre: "Leonardo DiCaprio", personaje: "Cobb" },
    { nombre: "Elliot Page", personaje: "Ariadne" },
  ],

  taquilla: {
    nacional: [10000000, 15000000, 20000000],
    internacional: [30000000, 45000000, 60000000],
  },
};

//mostrara el ultimo elemento de genero 
console.log(peliculas.generos[peliculas.generos.length -1]) //suspenso

// cual es el primer actor y mostrara solo personaje
console.log(peliculas.actores[0].personaje)

// cual es el ultimo personaje 
console.log(peliculas.actores[peliculas.actores.length -1])

//mostra toda la taquilla internacional
const internacional = peliculas.taquilla.internacional
  internacional.forEach(internacional => {
    console.log(internacional)
  })
