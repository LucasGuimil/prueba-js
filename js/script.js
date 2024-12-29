//Actividad 02:
//Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".  
let pares = 0;
let impares = 0;    
const boton = document.getElementById("boton");
boton.addEventListener('click',() => {
    let ingreso = prompt('Ingrese un número');
    while (ingreso !== "salir") {
        ingreso = parseFloat(ingreso)
        if (ingreso % 2 === 0) {
            pares++;
            console.log(ingreso);
        } else {
            impares++; 
            console.log(ingreso);
        }
        ingreso = prompt('Ingrese un número')
        }
    console.log('Cantidad total de números pares: ' + pares);
    console.log('Cantidad total de números impares: ' + impares);
    })
//le cuesta detectar los valores inicializados dentro de los condicionales 
