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
async function main(){
    let nombre = await hola("Leonel");
    await hablar();
    console.log("5");
    await hablar();
    console.log("4");
    await hablar();
    console.log("3");
    await hablar();
    console.log("2");
    await adios(nombre);
    await console.log("1");

}
console.log("Start");
main()
console.log("End");