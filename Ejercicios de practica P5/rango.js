/*Rango
Debes crear una función llamada rango que recibira tres parámetros: 
un número de comienzo, uno de final, y un sumador. 
Esta deberá retornar un arreglo con los numeros que esten entre el 
de comienzo y el de final, sumando de a tanto como sea el sumador.
*/

//Ejemplo:
    //  rango(1,10,3) => [1, 4, 7, 10]

    function rango(comienzo,final,sum){
        let arrNew=[];
        for (let i = comienzo; i <= final; i+=sum) {
            arrNew.push(i)
        }
        console.log(arrNew)
    }
    rango(1,10,3)
