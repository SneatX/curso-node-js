const os = require("node:os")

console.log("Informacion del sistema operativo")
console.log("---------------------------------")

console.log("Nombre del sistema operativo: " , os.platform())
console.log("Version del sistema operativo: " , os.release())
console.log("arquitectura: ", os.arch())
console.log("CPUs: ", os.cpus())
console.log("Uptime: ", os.uptime()/60/60)