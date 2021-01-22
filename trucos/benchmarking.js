let suma = 0

console.time('bucle');
for(let i = 0; i < 10; i++) {
    suma += i
}

console.time('asincrono')
asincrona()
    .then(()=>{
        console.timeEnd('asincrono')
    })


console.timeEnd('bucle')

function asincrona(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Termino el proceso asincrono');
            resolve()
        })
    })
}