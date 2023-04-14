

const tFruta = document.getElementById("fruta");
const tPrecio = document.getElementById("precio");
const tPeso = document.getElementById("peso");
const tResult = document.getElementById("precioFinal");

let arrayDatosFruta = [
  {
    nombre: "Manzana",
    precio: 1.6,
    peso: "",
    importe: "",
  },
  {
    nombre: "Naranja",
    precio: 1.8,
    peso: "",
    importe: "",
  },
  {
    nombre: "Cereza",
    precio: 2.0,
    peso: "",
    importe: "",
  },
  {
    nombre: "Frambuesa",
    precio: 1.9,
    peso: "",
    importe: "",
  },
  {
    nombre: "Limón",
    precio: 1.4,
    peso: "",
    importe: "",
  },
  {
    nombre: "Fresa",
    precio: 2.5,
    peso: "",
    importe: "",
  },
  {
    nombre: "Melocotón",
    precio: 2.1,
    peso: "",
    importe: "",
  },
  {
    nombre: "Arandano",
    precio: 2.2,
    peso: "",
    importe: "",
  },
  {
    nombre: "Coco",
    precio: 3.0,
    peso: "",
    importe: "",
  },
  {
    nombre: "Sandia",
    precio: 3.2,
    peso: "",
    importe: "",
  },
  {
    nombre: "Aguacate",
    precio: 2.95,
    peso: "",
    importe: "",
  },
  {
    nombre: "Granada",
    precio: 3.1,
    peso: "",
    importe: "",
  },
  {
    nombre: "Piña",
    precio: 3.0,
    peso: "",
    importe: "",
  },
  {
    nombre: "Kiwi",
    precio: 2.4,
    peso: "",
    importe: "",
  },
  {
    nombre: "Platano",
    precio: 3.2,
    peso: "",
    importe: "",
  },
];


//Ver datos de Frutas
function producto(fruta){
    
    arrayDatosFruta.forEach((busca)=> {

    if(fruta==busca.nombre){
        tFruta.innerHTML=(busca.nombre);
        tPrecio.innerHTML=(busca.precio);
    }
}
 )
};


//Pesar
function accion1(){
    tPeso.innerHTML= (Math.random()*8+0.4).toFixed(2);    
        
    };

//Calcular
function accion4(){
    arrayDatosFruta.forEach(busca) => {

        
    }
}
