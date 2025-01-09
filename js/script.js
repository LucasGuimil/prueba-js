// ACtividad de armar 3 funciones

function ingresarNumeros() {
    let num = parseInt(prompt("Ingrese un número"))
    return num
}

const sumarNumeros = (a, b) => a + b;

function mostrarResultado () {
    const resultado = sumarNumeros(ingresarNumeros(),ingresarNumeros());
    alert(`El resultado de la suma es: ${resultado}.`);
}

document.getElementById("boton").addEventListener('click', ()=> {
    mostrarResultado()
})