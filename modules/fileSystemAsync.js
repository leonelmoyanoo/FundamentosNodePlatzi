const fileSystem = require('fs').promises


async function leer(ruta, cb) {
    try {
        const data = await fileSystem.readFile(ruta)
        cb(data.toString());
    } catch (error) {
        console.error(`Ǹo se pudo leer el archivo.\n ${error}`)
    }
}
async function escribir(ruta, contenido, cb) {
    try {
        await fileSystem.writeFile(ruta, contenido);
    } catch (error) {
        console.error(`Ǹo se pudo escribir el archivo.\n ${error}`)
    }
}
async function borrar(ruta, cb) {
    try {
        await fileSystem.unlink(ruta)
    } catch (error) {
        console.error(`Ǹo se pudo borrar el archivo.\n ${error}`)
    }
}


leer(`${__dirname}/archivo.txt`, console.log)
leer(`${__dirname}/archivo1.txt`, console.log)

escribir(`${__dirname}/archivo1.txt`, "Soy un archivo nuevo", console.log)

borrar(`${__dirname}/archivo1.txt`, console.log)