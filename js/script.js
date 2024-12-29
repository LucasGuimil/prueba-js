//Te recomendamos realizar el siguiente desafío en Visual Studio Code:<br>
//1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar si.<br>
//A. Esta lloviendo<br>
//B. Esta soleado<br>
//En caso de estar lloviendo debe devolver por consola un mensaje que diga "Lleva paraguas"<br>
//En caso de estar soleado debe devolver por consola un mensaje que diga "No olvides tus shorts"</p>

let pares = 0;
let impares = 0;    
const boton = document.getElementById("boton");
boton.addEventListener('click',() => {
    let ingreso = prompt('¿Cómo está el clima hoy');
        if (ingreso == "Esta lloviendo") {
            console.log("Lleva paraguas");
        } else if (ingreso == "Esta soleado"){
            console.log("No olvides tus shorts");
        }
    })
//le cuesta detectar los valores inicializados dentro de los condicionales 
