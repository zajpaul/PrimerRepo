let arreglo = [5, 8, 9, 11, 6, 74];

function once(array) {

    let result = "falso";

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 11) {
            result = "verdadero";
            // break;
        }

    }
    return result;
}



//module.exports = buscar;

console.log(once(arreglo));



