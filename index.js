const {registrar, leer} = require('./operaciones.js')
const argumentos = process.argv.slice(2)
const operacion = argumentos[0]

if(operacion === 'registrar'){
    if(argumentos.length === 6){
        registrar(argumentos[1], argumentos[2], argumentos[3], argumentos[4], argumentos[5])
    }
    else if(argumentos.length < 6){
        console.log('datos insuficientes')
    }else{
        console.log('exceso de datos')
    }
}
else if(operacion === 'leer'){
    leer()
}else{
    console.log('operacion invalida')
}

// node index.js registrar Benito "2 años" perro blanco vomitos
// node index.js registrar julieta "5 años" perro amarillo moquillo
// node index.js leer