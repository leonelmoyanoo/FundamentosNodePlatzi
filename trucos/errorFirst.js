const { callbackify } = require("util")

function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z
            callback(null, a)
        } catch (e) {
            callback(e, null)
        }
    }, 1000)
}
asincrona((err, dato) => {
    if (err) {
        console.error('Hay un error');
        console.error(err)
        /* 
        NO FUNCIONA EN FUNCIONES ASINCRONAS
        throw err; 
        */

        return false
    }
    console.log(`Mi data es ${dato}`)
})