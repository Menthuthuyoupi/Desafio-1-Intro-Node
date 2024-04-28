const fs = require('fs')

const citasJson = () => {
    const arrayCitas = JSON.parse(fs.readFileSync('citas.js','utf8'))
    return arrayCitas
}

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas = citasJson()
    citas.push({nombre:nombre,edad:edad,animal:animal,color:color, enfermedad:enfermedad})
    fs.writeFileSync('citas.js', JSON.stringify(citas))
}

const leer = () => {
    if(citasJson().length > 0){
        citasJson().map(cita =>
             console.log(`nombre: ${cita.nombre}, edad: ${cita.edad}, animal: ${cita.animal}, color: ${cita.color}, enfermedad: ${cita.enfermedad}`))
    }
    else{
        console.log('no hay citas registradas')
    }
}

module.exports = {registrar, leer}