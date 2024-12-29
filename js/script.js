//Te recomendamos realizar el siguiente desafío en Visual Studio Code:
//1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar Cuántos mundiales vivió una persona.
//Ten en cuenta que se juega un mundial cada 4 años y que se han jugado 21 copas del mundo.

const boton = document.getElementById("boton");
boton.addEventListener('click',() => {
    let edad = parseFloat(prompt('¿Cuántos años tenés?'));
    if (edad <4) {
        console.log("No viviste ningún mundial");
    } else if (edad > 83) {
        console.log("Viviste todos los mundiales");
    } else {
        let cantidadMundiales = Math.floor(edad / 4)
        console.log ("Viviste " + cantidadMundiales + " mundiales.")
    }
    })
