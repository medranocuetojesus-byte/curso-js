// Crear una funcion que reciba el id del planeta , haga uso del API dragon Ball
// Y retorne una lista de personajes (name , race , affiliation) Ejemplo:
// Piccolo -- Namekian - Z fighter
// Ginyu - Frieza Race  - Army of frieza 
// Dende - Namekian - Z figther
async function obtenerPlanetas() {
  const API_URL = "https://dragonball-api.com/api/planets/";

  try {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) {
      throw new Error(`No hay comunicación con el servidor`);
    }
    const datos = await respuesta.json()
    const planetas = datos.items

    planetas.forEach(planeta => {
      if (!planeta.isDestroyed){
        //console.log(`Planeta: ${planeta.name} - destruido: ${planeta.isDestroyed}`)
        console.log(planeta.name)
      }
    });

  } catch (e) {
    console.error(`No se pudo concretar la operación: ${e}`);
  }
}

obtenerPlanetas();