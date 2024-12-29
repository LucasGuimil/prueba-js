//Actividad 01:
//Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese número es par o impar.

const boton = document.getElementById("boton");
boton.addEventListener('click',() => {
    let ingreso = prompt('Ingrese un número');
    if (ingreso % 2 === 0) {
        alert("Es un número par");
    } else {
        alert("Es un número impar")
    }
    })
