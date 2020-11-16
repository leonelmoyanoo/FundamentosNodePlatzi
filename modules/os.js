const os = require('os')

/* Architecture of your system */
/* console.log(os.arch()) */

/* OS */

/* console.log('Architecture:')
console.log(os.platform()) 
console.log('') */


/* CPUS */

/* console.log('Platform:')
console.log(os.cpus()) 
console.log('') */



/* Nucleos */
/* 
console.log('cpus')
console.log(os.cpus().length) 
console.log('') */


/* SO Signals */
/* 
console.log('Erros and signals of the system')
console.log(os.constants) 
console.log('') */


/* Memory RAM*/

const SIZE = 1024
const kb = (bytes) => bytes / SIZE
const mb = (bytes) => kb(bytes) / SIZE
const gb = (bytes) => mb(bytes) / SIZE

/* Memory RAM free */
console.log("Free RAM Memory")
console.log(kb(os.freemem()) + " KB")
console.log(mb(os.freemem()) + " MB")
console.log(gb(os.freemem()) + " GB")
console.log('')

/* Memory RAM total */
console.log("Total RAM Memory")
console.log(gb(os.totalmem()) + " GB")
console.log('')

/* Directorios */
/* HOME */
console.log(os.homedir())
/* Temporal */
console.log(os.tmpdir())

/* Nombre del host */
console.log(os.hostname())

/* Interfaces de red */
console.log(os.networkInterfaces())