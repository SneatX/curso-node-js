const fs = require("node:fs/promises")
const path = require("node:path")

async function ls(pathDirectory){
    fs.readdir(pathDirectory).then(files =>{
        console.log(files)
    }).catch(err =>{
        console.log(err)
        process.exit(1)
    })
}
ls(".asdasdasd")

// async function ls2(pathDirectory){
//     let files
//     try{
//         files = await fs.readdir(pathDirectory)
//     }
//     catch{
//         console.log("La ruta ingresada no es valida")
//     }
//     console.log(files)
// }
// ls2(".")