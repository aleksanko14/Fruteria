function producto(fruta){
    console.log(fruta)
}

function accion1(){
    console.log("Flama")
}

function accion2(){
    console.log("Flama")
}

function accion3(){
    console.log("Flama")
}

function accion4(){
    console.log("De lujo")
}
//-----------------------------------------------------------------//

const tFruta= document.getElementById('fruta')
const tPrecio= document.getElementById('precio')
const tpeso= document.getElementById('peso')
const tResult= document.getElementById('precioFinal')

let pManzana = {
    nombre: "Manzana",
    precio: "1.60"
}

function producto(fruta){
    tFruta.innerHTML=fruta;
    if (fruta){
        tPrecio.innerHTML=pManzana;
    }
}