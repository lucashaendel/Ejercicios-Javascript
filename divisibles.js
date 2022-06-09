/*Divisibles
Debes crear una función llamada divisibles que reciba dos parámetros:  
un arreglo de números y un divisor. Esta deberá retornar un arreglo con 
los números que sean divisibles por el segundo parámetro. 

//Ejemplo: 

console.log(divisibles([1, 2, 3, 4, 5, 6], 2)) //debe retornar  [2, 4, 6]
console.log(divisibles([1, 2, 3, 4, 5, 6], 3)) //debe retornar  [3, 6] */

function divisibles (arr, div){
    arrNew=[];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%div == 0){
            arrNew.push(arr[i])
        }        
    } return arrNew
}
divisibles([1, 2, 3, 4, 5, 6], 2)

