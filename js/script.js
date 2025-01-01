// ACtividad de armar 3 funciones

function ingresarNumeros() {
    let num = prompt("Ingrese un número")
    return Number(num)
}

const sumarNumeros = (a, b) => a + b;

function mostrarResultado () {
    console.log(`El resultado de la suma es: ${sumarNumeros(ingresarNumeros(),ingresarNumeros())}`)
}

document.getElementById("boton").addEventListener('click', ()=> {
    mostrarResultado()
})