let arrayDatosFruta = [
  {
    id: "Manzana",
    nombre: "Manzana",
    precio: 1.6,
    peso: 0,
    importe: 0,
  },
  {
    id: "Naranja",
    nombre: "Naranja",
    precio: 1.8,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Cereza",
    precio: 2.0,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Frambuesa",
    precio: 1.9,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Limón",
    precio: 1.4,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Fresa",
    precio: 2.5,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Melocotón",
    precio: 2.1,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Arandano",
    precio: 2.2,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Coco",
    precio: 3.0,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Sandia",
    precio: 3.2,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Aguacate",
    precio: 2.95,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Granada",
    precio: 3.1,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Piña",
    precio: 3.0,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Kiwi",
    precio: 2.4,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Platano",
    precio: 3.2,
    peso: 0,
    importe: 0,
  },
];

const tFruta = document.getElementById("fruta");
const tPrecio = document.getElementById("precio");
const tPeso = document.getElementById("peso");
const tResult = document.getElementById("precioFinal");

let frutaGuardada = "";
let pesoRandom = 0;
let sigo = true;
let noSigo = false;

//Ver datos de Frutas
function producto(fruta) {
  arrayDatosFruta.forEach((objeto) => {
    if (fruta == objeto.nombre) {
      frutaGuardada = objeto.nombre;
      tFruta.innerHTML = objeto.nombre;
      tPrecio.innerHTML = objeto.precio;
    }
  });
}

//Pesar
function pesar() {
  pesoRandom = (Math.random() * 8 + 0.4).toFixed(2);
  tPeso.innerHTML = pesoRandom;

  arrayDatosFruta.forEach((fruta) => {
    if (fruta.nombre == frutaGuardada) {
      fruta.peso = pesoRandom;
      fruta.importe = (pesoRandom * fruta.precio).toFixed(2);
      tResult.innerHTML = fruta.importe;
    }
  });
  console.log(arrayDatosFruta);
}

//Calcular
function calcular() {
  // arrayDatosFruta.forEach((fruta) => {
  //   if (fruta.nombre == frutaGuardada) {
  //     fruta.peso = pesoRandom;
  //     fruta.importe = (pesoRandom * fruta.precio).toFixed(2);
  //     tResult.innerHTML = fruta.importe;
  //   }
  // });
  // console.log(arrayDatosFruta);
}

function limpiar(){
  arrayDatosFruta.forEach((fruta) => {
    if (fruta.peso<0, fruta.importe<0) {
      fruta.peso = 0;
      fruta.importe = 0;
    }
  });
  tFruta.innerHTML= "";
  tPrecio.innerHTML= null;
  tPeso.innerHTML= null;
  tResult.innerHTML= null;
}
