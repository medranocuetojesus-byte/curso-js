// Hacer una consulta al API y obtner una lista de los planetas 
// mostar unicamnete los planetas que no haya sido destruidos
// los datos a mostrar son name (id) Ejemplo 
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