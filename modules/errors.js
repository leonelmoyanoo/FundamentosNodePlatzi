function otraFuncion() {
    return y / seRompe() - x
}

function seRompe() {
    return 3 + z
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            return 3 * r
        } catch (error) {
            console.error("Error en funcion asincrona")
            cb(error)
        }
    }, 1000)
}

try {
    //otraFuncion()
    seRompeAsincrona(console.log)
} catch (error) {
    console.error(`Algo se ha roto...`)
    console.error(error)
    console.error(`Mensaje: ${error.message}`)
    console.log(`Pero no pasa nada, lo hemos capturado`);
}
console.info("Estoy al final")