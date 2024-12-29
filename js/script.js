//Te recomendamos realizar el siguiente desafío en Visual Studio Code:
//1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar si te alcanza para comprar figuritas del mundial.
//A. Si tienes menos de $20 ó $20 debe devolver por consola un mensaje que diga "Te puedo ofrecer 2 caramelos"
//B. Si tienes entre de $21 y $49 debe devolver por consola un mensaje que diga "Estas cerca, pero no puedo fiarte, vuelve mañana."
//C. Si tienes $50 o más debe devolver por consola un mensaje que diga "Aquí tienes tus figuritas del mundial"

const boton = document.getElementById("boton");
boton.addEventListener('click',() => {
    let dinero = parseFloat(prompt('¿Cuánto dinero tenés? Ingresar valor en $'));
        if (dinero <= 20) {
            console.log("Te puedo ofrecer 2 caramelos");
        } else if (dinero <= 49){
            console.log("Estas cerca, pero no puedo fiarte, vuelve mañana.");
        } else {
            console.log("Aquí tienes tus figuritas del mundial");
        }
    })
 
