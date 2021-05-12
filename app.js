const process = require('process');
const moduleTareas = require('./tareas');

let terminal = process.argv[2];
switch (terminal) {
    case 'ayuda':
        console.log('Comandos: >lista , >agregar , >filtrar ')
        break;
    case undefined :
        console.log('debes pedir un comando: para ver comandos escribir >ayuda en la consola')
        break;
    case 'lista':
        return moduleTareas.lista()
       break;
    case 'agregar':
        moduleTareas.agregar(process.argv[3],process.argv[4])
       return moduleTareas.lista()
        break;
        case 'filtrar':
            moduleTareas.filtrar(process.argv[3])
            break;
    default:
        console.log('solo se pueden ejecutar comandos disponibles, ejecuta >ayuda para verlos')
        break;
};   