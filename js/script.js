//Te recomendamos realizar el siguiente desafío en Visual Studio Code:<br>
//1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar si.<br>
//A. Cometiste un delito
//B. Eres inocente
//En caso de estar haber cometido un delito debe devolver por consola un mensaje que diga "Iras a la cárcel"
//En caso de ser inocente debe devolver por consola un mensaje que diga "Puedes ir a casa"
let pares = 0;
let impares = 0;    
const boton = document.getElementById("boton");
boton.addEventListener('click',() => {
    let ingreso = prompt('El resultado de la investigación fue que:');
        if (ingreso == "Cometiste un delito") {
            console.log("Irás a la cárcel");
        } else if (ingreso == "Eres inocente"){
            console.log("Puedes ir a casa");
        }
    })
//le cuesta detectar los valores inicializados dentro de los condicionales 
