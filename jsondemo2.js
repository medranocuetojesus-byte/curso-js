//https://dragonball-api.com/api/characters/3 
//Paso 1: URL (endpoint)
async function obtnerPersonaje(id) {

//Paso 2 : Funcion asicrona (Tiempos distintos / diferidos) - Latencia (Esperar)
const API_URL = 'https://dragonball-api.com/api/characters/1'

  //Paso 3 : App es propensa a errores ...
  try{

    //paso 4 Realizar la peticion 
    const respuesta = await fetch(API_URL) 

    //paso 5: Exite una respuesta?
    if (!respuesta.ok){
      throw new Error(`No hay comunicacion con el servidor`) // !Stop¡
    }

    // paso 6 si llegamos hasta aqui , entonces hemos recibido los datos (JSON)
    // json (cadena) > object js
    const datos = await respuesta.json()

    //Paso 7 MOSTAR TODO EL JSON
    //console.log(datos)

    const transformaciones = datos.transformations
    transformaciones.forEach(transformacion => {
    console.log(transformacion.name)
  });


  }catch(e){
    console.error(`No se pudo conectar la operacion: ${e}`)
  }
}// fin funcion obtenerPersonaje()


//test
obtnerPersonaje(2)