// objeto se define con una clave|:valor
const automovil = {
  marca:    "Toyota",
  modelo:    "Rav4",
  anio:       2025,
  operativo:  true,
  valor:      120000,
  placa:      "ABC-123",
  propietarios: [
    { Titular: "Roxana", Fecha: "2025-01-10", precio:118000},
    { Titular: "Hugo", Fecha: "2025-11-15", precio:115000},
    { Titular: "Pedro", Fecha: "2026-06-05", precio:119000}
  ]
}

//¿Es posible actualizar la informacion?
automovil.anio = 2024
automovil["anio"]= 2024

automovil.propietarios[0].Titular = "Patricia"
automovil.propietarios[2].precio= 122000 

//¿Sera posible agrgar una nueva clave y valor?
automovil["color"] = "blanco"
automovil["equipado"] = "FULL"

console.log(automovil);