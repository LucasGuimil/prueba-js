//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

const boton = document.getElementById("boton");
boton.addEventListener('click',() => {
//Actividad 02:
let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
if (lados < 3) {
    alert("Faltan lados");
    break;
} else {
    let cuenta = index + 1;
    alert("lado" + cuenta);
}
}
})

//¿Qué tiene que hacer este código? Parecería que hay que ingresar la cantidad de lados de un polígono y verifica si la cantidad de lados es correcta.
//¿Por qué no cumple con su función? Porque la alerta está fuera del condicional.
//¿Qué propuesta podrías hacer para que tenga sentido su uso? Agregar más detalles a la alerta y ubicarla en el condicional.