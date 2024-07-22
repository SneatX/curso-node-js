const path = require("node:path")

//Barra separadora de carpetas segun el Sistema Operativo 
console.log(path.sep) 

//Unir rutas con path.join
const filePath = path.join("folder" , "subfolder" , "item.txt")
console.log(filePath) //Une el path dependiendo del SO

//Nombre del fichero 
const base = path.basename("/tmp/var/secret/password.txt")
console.log(base)

const fileName = path.basename("/tmp/var/secret/password.txt" , ".txt") // con el 2 atributo ignoramos su tipo de dato
console.log(fileName)

//Obtener el tipo de archivo o extension real
const extension = path.extname("img.example.png")
console.log(extension)