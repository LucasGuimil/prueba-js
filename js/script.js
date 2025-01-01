// Declarar la función sin parámetros 

function mostrarLibros() {
    console.log("Bienvenido a la biblioteca. ¡Estos son los libros disponibles!");
}

mostrarLibros();

function buscarLibro(titulo) {
    console.log(`Buscando el libro: ${titulo}...`);
}

buscarLibro("El principito");

function calcularMulta(diasRetraso) {
    const multaPorDia = 0.50;
    return diasRetraso * multaPorDia;
}

let multa = calcularMulta(5);
console.log(`La multa total es: $${multa}`);

function agregarLibro(titulo, autor) {
    return {titulo, autor};
}

function mostrarDetalleLibro(libro) {
    console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
}

let libro1 = agregarLibro("1984", "George Orwell");

mostrarDetalleLibro(libro1)

function prestarLibro(titulo, usuario) {
    console.log("El libro "+titulo +" ha sido prestado a "+ usuario+".")
}

prestarLibro("1984", "Ana")

function devolverLibro(titulo, diasRetraso = 0) {
    const multa= diasRetraso * 0.5;
    const mensaje = diasRetraso > 0
        ? `Devuelto con ${diasRetraso} días de retraso. Multa: $${multa}`
        : `Devuelto a tiempo. No hay multa`;
    console.log(`Libro: ${titulo}: ${mensaje}`);
}

devolverLibro("El principito", 4);

(function(){
    let mensaje ="Ejecutada al instante.";
    console.log(mensaje);

})()