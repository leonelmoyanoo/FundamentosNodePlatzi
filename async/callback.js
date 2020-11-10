function hola(nombre,miCallback) {
    setTimeout(() => {
        console.log(`Hola! Soy ${nombre}`);
        adios("Leonel",()=>{
        })
    }, 1100);
}

function adios(nombre,otroCallback){
    setTimeout(()=>{
        console.log(`Adios ${nombre}`)
        otroCallback();

    },10)
}

console.log("Begin");
hola('Leonel',() => { console.log("End") });