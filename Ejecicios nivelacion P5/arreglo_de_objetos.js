// Arreglo de objetos

/*Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` que contenga el valor del número y sus anteriores.

Ejemplo:
arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}] */


function arregloDeObjetos(num13){
    arr13=[]
    for(let i = 1 ; i <= num13 ; i++){
        arr13.push({["valor"]:i})
    }
    return arr13
}
arregloDeObjetos(5);
