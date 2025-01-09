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
