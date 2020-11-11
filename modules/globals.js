/* Variables globales */
console.log(global);

/* Funciones globales */
console.log(setInterval);
let i = 0;
/* Un intervalo */
let intervalo = setInterval(() => {
    console.log("Hola");
    if (i === 3) {
        clearInterval(intervalo)
    }
    i++;
}, 1000)

/* Ejecutar de inmediato */
setImmediate(() => {
    console.log("Como andas?");
})

/* Procesos */
console.log(process);

/* Directorio */
console.log(__dirname)

/* Directorio con archivo actual */
console.log(__filename);

/* Crear variables globales */
global.miVariable="elValor";
console.log(miVariable);

/* Valor this */
console.log(this);