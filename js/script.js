//Objetos literales: son colecciones de pares clave-valor encerrados entre llaves {}. A diferencia de los arrays, los datos no están indexados. Para acceder a ellos se realiza a través de claves definidas.

//Array 
const colores = ["rojo","verde","amarillo"]
console.log(colores[0])//Accede al primer elemento.

//Objeto literal
const semaforo = {
    rojo: "Detenerse",
    verde: "Avanzar",
    amarillo: "Cuidado"
}
console.log(semaforo.rojo) //Accede al valor de la clave "rojo".

//Arrays de objetos
//Dentro de los arrays se pueden almacenar objetos, lo que permite almacenar datos de manera más compleja. Se pueden utilizar los métodos de modificación de arrays como push, sort.

const usuarios =[] //se define un array vacío.
//1. Agregar objetos con el metodo "push" permite generar una lista dinámica.
usuarios.push({nombre: "Ana", edad: 45})
usuarios.push({nombre: "Luis", edad: 30}) //Se puede agregar más de un elemento al array separando los objetos con coma (,).
console.log(usuarios)

//2. Ordenar objetos con "sort"
//Se pueden ordenar en base a alguna clave específica de los objetos.
usuarios.sort((a,b)=> a.edad - b.edad)
console.log(usuarios)
//IMPORTANTE: tener cuidado con el método sort cuando es una base de datos grande.

//3. Filtrar con "filter"
//Se pueden filtrar elementos en base a una condición, y almacener subconjuntos de un array en base a las propiedades de los objetos. 
const mayoresDe25 = usuarios.filter(usuario => usuario.edad >32)
console.log(mayoresDe25)

//4. Buscar objeto con "find"
//Encuentra el primer objeto que cumple con una condición específica.
const luis = usuarios.find(usuario => usuario.nombre ==="Luis")
console.log(luis)

/* Mejores Prácticas
Claridad en las Funciones de Comparación: Al usar sort, asegúrate de proporcionar una función clara que determine cómo se deben comparar los objetos.

Inmutabilidad: Al modificar arrays, considera usar métodos que no alteren el array original, como map y filter, para evitar efectos secundarios no deseados.

Eficiencia: Al trabajar con arrays grandes, ten en cuenta la eficiencia de los métodos utilizados, especialmente en operaciones como sort, que pueden ser costosas. */

//Método "for...of"
let arrayObjetos =[]
arrayObjetos.push({id: 1, nombre: "Producto 1"})
arrayObjetos.push({id: 2, nombre: "Producto 2"})
arrayObjetos.push({id: 3, nombre: "Producto 3"})
console.log(arrayObjetos)
//Permite acceder al objeto dentro del array para mostrar algún valor dentro del objeto.
for(let objeto of arrayObjetos) {
    console.log(objeto.nombre)
}

//Se pueden modificar y eliminar propiedades de los objetos:
const persona = {
    nombre: "Lucas",
    edad: 28,
    ciudad: "CABA" 
}
//Añadir o Modificar
persona.profesion = "Empleado"//Se declara la propiedad a añadir o modificar y se define el valor.
console.log(persona)

//Eliminar clave o propiedad
delete persona.edad
console.log(persona)

