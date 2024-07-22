const fs = require('node:fs/promises')// Interactuar con el sistema de archivos
const path = require('node:path') // Utilidades para trabajar con rutas de archivos y directorios
const pc = require('picocolors') // Darle colores a la consola

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder) // leer el contenido de un directorio
  } catch {
    console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath) // status - información del archivo
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(30))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`
  })
  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
