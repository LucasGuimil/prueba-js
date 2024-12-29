//Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado
const boton = document.getElementById("boton");
boton.addEventListener('click',() => {
    let cantidad = prompt('Ingrese cantidad de saludos a mostrar');
    cantidad = Number(cantidad);
    for (let i = 0; i !== cantidad; i++) {
        console.log("Hola");
    }
})