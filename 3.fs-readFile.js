const fs = require("node:fs")

//Leyendo el codigo de manera sincrona, es decir de manera secuencial en cascada
console.log("SINCRONA")
console.log("Leyendo el primer archivo")
const text = fs.readFileSync("./archivo.txt", "utf-8")

console.log(text)

console.log("Esto se ejecuta mientras se lee el primer archivo")

console.log("Leyendo el segundo archivo")
const secondText = fs.readFileSync("./archivo2.txt", "utf-8")

console.log(secondText)

//Leyendo el codigo de manera asincrona, puedo ejecutar mas codigo mientras se ejecutan o leen los archivos
console.log("\nASINCRONA")

console.log("Leyendo el primer archivo")
fs.readFile("./archivo.txt", "utf-8", (err, text)=>{
    console.log(text)
})

console.log("Esto se ejecuta mientras se lee el primer archivo")

console.log("Leyendo el segundo archivo")
fs.readFile("./archivo2.txt", "utf-8", (err, text) =>{
    console.log(text)
})