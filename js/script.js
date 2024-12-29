//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
let cadena ="";
let valor;
const boton = document.getElementById("boton");
boton.addEventListener('click',() => {
    valor = prompt("Ingrese valor a sumar");
    while (valor != "ESC") {
        cadena += valor;
        console.log(cadena);
        valor = prompt("Ingrese valor a sumar");
    } 
})
