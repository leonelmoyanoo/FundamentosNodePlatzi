const fileSystem = require('fs')

function leer(ruta, cb) {
    /* Ruta del archivo a leer y funcion que usa el archivo*/
    fileSystem.readFile(ruta, (error, data) => {
        error ?
            console.error(`No se ha podido leer el archivo.\n${error}`)
            :
            cb(data.toString());
    })
}
function escribir(ruta, contenido, cb) {
    /* Escribir en el archivo */
    fileSystem.writeFile(ruta, contenido, (error, data) => {
        error ?
            console.error(`No he podido escribirlo.\n ${error}`)
            :
            cb(`Escrito con éxito`)
    })
}
function borrar(ruta, cb) {
    fileSystem.unlink(ruta, (error) => {
        error ?
            console.error(`No se ha podido eliminar el archivo \n ${error}`)
            :
            cb(`Eliminado con éxito`);
    });
}


/* Leer archivo */
leer(`${__dirname}/archivo.txt`, console.log)
leer(`${__dirname}/archivo1.txt`, console.log)

/* Escribir archivo */
escribir(`${__dirname}/archivo1.txt`, "Soy un archivo nuevo", console.log)

/* Borrar archivo */
borrar(`${__dirname}/archivo1.txt`, console.log)