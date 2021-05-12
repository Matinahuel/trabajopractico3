const fs = require('fs');
const tarea = JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8'));


const moduleTareas = {
    lista: function() {
        tarea.forEach(objetos => {
           console.log(objetos)
        });
    },
    guardar: function(moduleTareas){ 
    fs.writeFileSync('./db/tareas.json', JSON.stringify(tarea,null,2), 'utf-8');
    },
    agregar: (titulo, estado = 'pendiente') => {
        let = nuevaTarea = {
            titulo,
            estado
        }
        tarea.push(nuevaTarea)
       moduleTareas.guardar()
    },
    filtrar: function(filtro){
       let filtrar = tarea.filter(tarea => tarea.estado === filtro || tarea.titulo.includes(filtro));
       console.log(filtrar)
    }
} 

module.exports = moduleTareas;