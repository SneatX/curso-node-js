let datos = [
    {nombre: "1"},
    {nombre: "2"}
]

const getDatos = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(datos)
        }, 500)
    })
}

getDatos().then((datos) =>{
    console.log(datos) 
})

console.log("codigo mientras carga")