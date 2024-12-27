//Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

let numeroInicial = prompt("Ingrese el primer valor");
numeroInicial = Number(numeroInicial)
for (let i = 0; i <10 ; i++) {
    let numeroSuma = prompt("Ingrese valor a sumar");
    numeroSuma = Number(numeroSuma)
    suma = numeroInicial + numeroSuma;
    console.log(suma);
    numeroInicial = suma;
}