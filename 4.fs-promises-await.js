//Para usar el await fuera de una funcion asincrona se tienen que suar los EcmaScript modules o mjs

//IIFE - Inmediatly invoked function expression

const {readFile} = require("node:fs/promises");

( //Funcion auto invocada o IIFE
    async()=>{
        console.log("Leyendo el primer archivo");
        let text = await readFile("./archivo.txt", "utf-8")
        console.log(text)

        console.log("Esto se ejecuta mientras se lee el primer archivo");

        console.log("Leyendo el segundo archivo");
        let secondText = await readFile("./archivo2.txt", "utf-8")
        console.log(secondText)
    }
)()


