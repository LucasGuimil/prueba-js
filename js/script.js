// ACtividad de armar 3 funciones

function ingresarNumeros() {
    let num = prompt("Ingrese un número")
    return Number(num)
}

const sumarNumeros = (a, b) => a + b;

function mostrarResultado () {
    const resultado = sumarNumeros(ingresarNumeros(),ingresarNumeros());
    console.log(`El resultado de la suma es: ${resultado}.`);
}

document.getElementById("boton").addEventListener('click', ()=> {
    mostrarResultado()
})