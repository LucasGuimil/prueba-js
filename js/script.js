//Ordenar arrays

//Método sort(): sirve para ordenar un array desordenado de manera creciente o de manera decreciente. Cuando no se determina ninguna función dentro del paréntesis, toma el sistema Unicode que ordena en base al primer caractér.

let numeros = [40,5,200,30,9]
numeros.sort((a,b)=> a - b) /*Esta función flecha compara el primer parámetro con el segundo, ordenandolo de manera creciente. Si se pone al revés, ordena de manera decreciente.*/
console.log(numeros)

let palabras = ["Auto","zorro","Pelota","casa"]
/*Si no se define una función en el paréntesis, las palabras en mayúsculas siempre quedaran primeras.*/
palabras.sort((a,b)=> a.localeCompare(b))//La función localeCompare realiza la comparación del orden alfábetico, ignorando las mayúsculas y minúsculas.
console.log(palabras)


//Método reverse(): invierte el orden del array.
numeros.reverse()
console.log(numeros)



//Concatenar arrays
//Metodo join(): convierte un array en una cadena de texto, permitiendo definir el separador de los elementos dentro del paréntesis. Si no se proporciona un separador, se concatenan con una coma (,). Si el separador es una cadena vacía (""), se concatenan sin ningún espacio entre ellos.

//1. Uso básico con coma (default)
let colores = ["Rojo" , "Azul", "Negro"]
let resultado = colores.join();
console.log(resultado)

//2. Uso con separador de espacio 
let nombres = ["Ana" , "Juan" , "Carlos"]
let listaNombres= nombres.join(" ")
console.log(listaNombres)

//3. Uso con separador de guión 
let elementos = ["Hidrógeno", "Oxígeno", "Carbono"]
let formula = elementos.join("-")
console.log(formula)

//4. Uso con separador vacío
let letras = ["J", "a","v","a"]
let palabra = letras.join("")
console.log(palabra)

/*Casos de uso: 
- Formato de visualización: Transformar un array de datos en una forma legible para ser mostrada en interfaces de usuario o en documentos.
- Preparación de datos para envío: Convertir arrays a strings para ser enviados a través de peticiones de red donde solo se pueden enviar strings. 
- Logs y depuración: Facilitar la revisión de datos en desarrollo, permitiendo ver fácilmente el contenido de arrays complejos.*/

