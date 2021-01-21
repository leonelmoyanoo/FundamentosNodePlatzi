//const process = require("process")

process.on("beforeExit", () => {
    console.log("Leo, the process it's finishing")
})

process.on("exit", () => {
    console.log("Leo, the process it's finished. Good night")
    setTimeout(()=>{
        console.log("You can't see me")
    },0)
})
setTimeout(()=>{
    console.log("You can see me")
},1000)
/* Errores en promesas que no tienen un catch */
process.on("uncaughtException", (error, origin) => {
    console.error(`OMG, we forget to catch the error. From: ${origin}`)
    console.error(error)
})
process.on("uncaughtRejection", (error, origin) => {
    console.error(`OMG, we forget to catch the error. From: ${origin}`)
    console.error(error)

})


isntExist()
console.log("Hi")