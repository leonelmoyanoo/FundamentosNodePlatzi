/* Funciones */
function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log(`Hola! Soy ${nombre}`);
        miCallback(nombre)
    }, 1100);
}
function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Bla bla bla...');
        callbackHablar();
    }, 500)
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios ${nombre}`)
        otroCallback();

    }, 1000)
}
/* Charla */
function conversacion(nombre, veces, callback) {
    if(veces>0){
        hablar(()=>{
            conversacion(nombre,--veces,callback);
        });
    }else{
        adios(nombre,callback)
}
}

/* Uso de callbacks hell */

console.log("Begin");
hola('Carlos',(nombre)=>{
    conversacion(nombre,3,()=>{console.log("End")})
})

/* hola('Leonel',()=>{
    adios('Leonel',()=>{
        console.log("end");
    })
}) */
/* hola('Leonel', (nombre) => {

    hablar(() => {
        hablar(() => {
            hablar(()=>{
                adios(nombre, () => {
                    console.log("End")
                })
            })
        })
    })

}); */