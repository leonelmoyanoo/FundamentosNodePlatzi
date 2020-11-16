const http = require('http');

const PORT = 3000
const SERVER = http.createServer(router)

/* REQUEST Y RESPONSE */
function router(req, res) {
    console.log("Nueva petición!")
    console.log(req.url)
    /* RESPUESTA EN CABECERA */
    res.writeHead(201, {
        "Content-type": "text/plain; charset=utf-8"
    });
    /* Responde al usuario*/
    //res.write("Hola, ya se usar HTTP de NodeJS")

    switch (req.url) {
        /* Escucha lo que recibe por http */
        case "/hola":
            res.write("Hola, que tal?m Mañana haces algo?")
            break
        default:
            res.write("Error 404: No sé lo que quieres, me contás?")
            res.end()
            break
    }

    res.end()
}

//INICIO EL SERVIDOR EN EL PUERTO DECLARADO
SERVER.listen(PORT, (error) => {
    if (error) {
        console.error(`Could not connect to port ${PORT}`)
        console.error(error.message)
    } else {
        console.info(`>Ready on http://localhost:3000/`)
    }
})