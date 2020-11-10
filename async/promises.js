/* Funciones */
function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola! Soy ${nombre}`);
            resolve(nombre)
        }, 1100);
    });
}
function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla...');
            resolve(nombre);
            //reject("Error")
        }, 500)
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`)
            resolve();
        }, 1000)
    })
}

/* Ejecucion */
console.log('Start');
hola('Carlos')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('End');
    })
    .catch((error)=>{
        console.error(`Ha ocurrido un error ${error}`)
    });