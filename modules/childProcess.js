const { exec,spawn } = require('child_process')
/* Alternativa */
/* const exec = require('child_process).exec */

/* Ejecutar comandos del sistema */

function ejecutarConsol() {
    exec("node modules/consol.js", (error, stdout, sterr) => {
        if (error) {
            console.error(error)
            return false
        }
        console.log(stdout);
    })
}
function listar() {
    exec("ls -la", (error, stdout, sterr) => {
        if (error) {
            console.error(error)
            return false
        }
        console.log(stdout);
    })
}
/* Fin de ejecutar comandos del sistema  */

/* Ejecutar un proceso y guardarlo en una variable */
let proceso = spawn("ls",["-la","-l"])

/* Obtener ID */
console.log(proceso.pid)
/* Saber si está conectado */
console.log(proceso.connected);

/* Obtener lo que devuelve el proceso */
proceso.stdout.on("data",(dato)=>{
    console.log(dato.toString())
})

/* Saber si el proceso terminó */
proceso.on("exit",(dato)=>{
    console.log("El proceso terminó")
    console.log(dato)
})

/* Saber si el proceso se murió */
console.log("El proceso murió?")
console.log(proceso.killed)