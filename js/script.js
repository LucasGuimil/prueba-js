//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

const boton = document.getElementById("boton");
boton.addEventListener('click',() => {
//Actividad 01:
let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let index = 0; index < cantidad; index++) {
console.log(texto);
}})

//¿Qué tiene que hacer este código? Repetir un texto ingresado, la cantidad de veces que se requiere.
//¿Por qué no cumple con su función? Porque nunca se actualizaba la variable index, siempre era 0 por lo cual se repetía infinitamente ya que la condción siempre iba a ser verdadera