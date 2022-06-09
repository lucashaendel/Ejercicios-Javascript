//Mover ceros a lo último
/*Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.

Ejemplo: 
moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0] */

function moveZeros(datos){
    let ceros = [];
    let noCeros = [];
    for(let i=0 ; i<datos.length ; i++){
      if(datos[i] === 0){
        ceros.push(datos[i])
      }else{
        noCeros.push(datos[i])
      }
    }
    console.log(noCeros.concat(ceros));
}
moveZeros([false,1,0,1,2,0,1,3,"a"])