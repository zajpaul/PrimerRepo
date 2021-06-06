let { listarTareas, agregarTarea, borrarTarea, tareasEstado } = require('./funciones/funcionesDeTareas');

//el requiere convierte automaticamente el json a una cadena JS
let arreglo_objs_literal = require('./servicios/tareas.json');

let nuevaTarea =
{
    "codigo": 16,
    "titulo": "Comprobar sintaxis",
    "estado": "Pendiente"
};

//agregarTarea(arreglo_objs_literal,nuevaTarea);

//arreglo_objs_literal = borrarTarea(arreglo_objs_literal,15);

listarTareas(arreglo_objs_literal);

let d = tareasEstado(arreglo_objs_literal, "Pendiente");
console.log(d);

//Agrego este comentario para ver como se ve este cambio en el GIT

//este es otro cambio


