//FIBONACCI

/*Deberas escribir una funcion que acepte un numero n 
y que devuelva el n-esimo termino de la serie fibonacci
La sucesion de Fibonacci comienza con los numeros 0 y 1.
A partir de estos, cada termino es la suma de los anteriores.

ej:  0,1,1,2,3,5,8,13,21,34*/

function fibonacci(num){
    let arr = [0,1];
    for (let i = 0; i < num; i++) {
        arr.push(arr[i]+arr[i+1])
    }
    console.log(arr)
}
fibonacci(8)