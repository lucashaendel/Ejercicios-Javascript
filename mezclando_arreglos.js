//Mezclando arreglos

/*Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.

Ejemplo: 
mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4] */

let cant = 0;
let arrResult = [];
function mezclarArreglos(arr, arr2){
    if(arr.length <= arr2.length)
    {  cant = arr2.length; }
    else{ cant = arr.length; }

    for(let i=0 ; i<cant ; i++ ){
        if(arr[i] != undefined && arr2[i] != undefined){
            arrResult.push(arr[i]);
            arrResult.push(arr2[i]);        
        }else if (arr != undefined){
            arrResult.push(arr[i]);
        }else {
            arrResult.push(arr2[i])
        }
        
    }
    return arrResult;
}
// mezclarArreglos([1,2,3,4],['h','o','l','a']);
mezclarArreglos([1,2,3,4], ['h','p']);