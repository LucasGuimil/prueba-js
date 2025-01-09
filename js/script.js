/* Declarar arrays  */


let numeros = [1,2,3,4,5]
console.log(numeros)

let palabras = ["manzana", "pera", "auto","progamacion"]
console.log(palabras[3])

let booleanos = [true, false,true,false]
console.log(booleanos)

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matriz)
console.log(matriz[0][2])

/*Uso de for para recorrer un array */ 

let numbers = [10,20,30,40,50]
for (let i=0;i<numbers.length;i++) {
    console.log(numbers[i])
}

const frutas = ["Manzana","Banana","Cereza"]
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[frutas.length-1])