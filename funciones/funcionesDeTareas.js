let fs = require('fs');  // importo libreria para leer archivos de texto


//recorro el array "tareas" y por cada elemento imprimo el titulo
function listarTareas(tareas) {
    tareas.forEach(function (elemento) {
        console.log(elemento.titulo);
    });
}

//agrego mediante .push una nuevaTarea en el array existente "tareas". 
//luego mediante la libreria wrtiteFilesync de FileSystem escribo esa tarea nueva en el arreglo y con Stringify lo convierto a JSON
//la particularidad del writeFilesSync es que borra el contenido del ARCHIVO FISICO y lo vuelte a completar
// tomando el array Tareas que ESTA EN MEMORIA y ya contiene la tarea agregada
//en el stringify utiliza Null y ' ' pero eso es un yeite del profe para que se escriba ordenado en el archivo fisio
function agregarTarea(tareas, nuevaTarea) {
    tareas.push(nuevaTarea);
    fs.writeFileSync('./servicios/tareas.json', JSON.stringify(tareas, null, ' '));
}

//para borrar un dato del archivo fisico, primero guarda en una variable todos los datos (registros) menos en que quiere eliminar
//luego vuelve a escribir en el archivo fisico todo el contenido (previamente la libreria lo borra) del arreglo auxiliar tareas2
function borrarTarea(tareas, cod) {
    let tareas2 = tareas.filter(function (elemento) {
        return elemento.codigo != cod;
    });

    fs.writeFileSync('./servicios/tareas.json', JSON.stringify(tareas2, null, ' '));

    return tareas2;
}

//para listar una tarea (o registro) por cierto filtro como por ej. "estado" simplemente se hace un .filter
function tareasEstado(tareas, est) {
    let tareas2 = tareas.filter(function (elemento) {
        return elemento.estado == est;
    });

    return tareas2;
}

module.exports = { listarTareas, agregarTarea, borrarTarea, tareasEstado };


