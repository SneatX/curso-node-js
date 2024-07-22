//Para usar el await fuera de una funcion asincrona se tienen que suar los EcmaScript modules o mjs

import { readFile } from "node:fs/promises";

console.log("Leyendo el primer archivo");
let text = await readFile("./archivo.txt", "utf-8")
console.log(text)

console.log("Esto se ejecuta mientras se lee el primer archivo");

console.log("Leyendo el segundo archivo");
let secondText = await readFile("./archivo2.txt", "utf-8")
console.log(secondText)