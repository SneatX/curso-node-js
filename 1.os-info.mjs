import { platform, release, arch, cpus, uptime } from "node:os"

console.log("Informacion del sistema operativo")
console.log("---------------------------------")

console.log("Nombre del sistema operativo: " , platform())
console.log("Version del sistema operativo: " , release())
console.log("arquitectura: ", arch())
console.log("CPUs: ", cpus())
console.log("Uptime: ", uptime()/60/60)