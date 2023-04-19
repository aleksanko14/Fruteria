

const tFruta = document.getElementById("fruta");
const tPrecio = document.getElementById("precio");
const tPeso = document.getElementById("peso");
const tResult = document.getElementById("precioFinal");

let frutaGuardada;
let sigo = true;
let noSigo = false;

let arrayDatosFruta = [
  {
    nombre: "Manzana",
    precio: 1.6,
    peso: 0,
    importe: 0,
  },
  {
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

//Ver datos de Frutas
function producto(fruta){
    
    arrayDatosFruta.forEach((objeto)=> {

    if(fruta==objeto.nombre){
        tFruta.innerHTML=(objeto.nombre);
        tPrecio.innerHTML=(objeto.precio);
    }
}
 )
};


//Pesar
function pesar(){
    let pesoRandom = (Math.random()*8+0.4).toFixed(2);
    let fruta = producto();
    arrayDatosFruta.forEach((objeto)=> {

      if(fruta==objeto.nombre){
        pesoRandom=(objeto.peso);
        console.log (objeto.peso);
      }
    })
    
    tPeso.innerHTML =  pesoRandom;  
        
    };

//Calcular
function calcular(){
    
  if (pesar && producto){
  
    let result = (busca.precio*pesoRandom);
    
    console.log(result);

  }
}

