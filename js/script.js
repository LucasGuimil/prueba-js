// Metodos de modificación de arrays

//Push: añade uno o más elementos al final de un array
let frutas = ["Banana","Manzana","Cereza","Durazno"]
console.log(frutas)
frutas.push("Pera")
console.log(frutas)

//Pop: elimina el último elemento de un array, el mismo se puede guardar en otra variable.
let frutaEliminada = frutas.pop()
console.log(frutaEliminada)
console.log(frutas)

//Shift: elimina el primer elemento del array y desplaza los demás elementos a una posición inferior.
let primeraFruta = frutas.shift()
console.log(primeraFruta)
console.log(frutas)

//Unshift: añade uno o más elementos al inicio del array, modificando los índices de los demás elementos.
frutas.unshift("Pomelo","Kiwi")
console.log(frutas)

//Métodos de busqueda dentro de arrays.

//indexOf: devuelve el primer índice en el que se puede encontrar un elemento dentro del array o -1 si no se encuentra. Es sensible a todo tipo de datos, diferencia entre números, strings, etc.

let nombres = ["Ana", "Juan","Carlos","Marta"]
let indice=nombres.indexOf("Carlos")
console.log(indice)

/*Casos de uso: 
Validación de entrada: Verificar si ya hay un elemento antes de agregarlo a un array.
Localización de elementos para su manipulación: Determinar la posición para actualizar o eliminar un elemento.*/

//includes: determina si el array contiene un determinado elemento, devolviendo un valor true o false. No proporciona la ubicación del elemento, sólo verifica si existe.

let autos = ["Fiat","Ford","Toyota"]
let contiene = autos.includes("Nissan")
console.log(contiene)

/*Casos de uso: 
Condiciones: ejecutar código basado en la presencia de un elemento de un array.
Filtrado de opciones: Verificar rapidamente la inclusión de elementos sin preocuparse por su ubicación exacta*/

