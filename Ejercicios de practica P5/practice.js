/*
FizzBuzz:

Escribí un loop que imprima en la consola los números del 1 al 100. 
Deberá cumplir las siguientes condiciones: si el número a imprimir es múltiplo de 3, 
debe mostrar en la consola el string 'Fizz'. En cambio, si es múltiplo de 5, debe mostrar:
 'Buzz'. Por último, si es múltiplo de ambos debe mostrar: 'FizzBuzz’

Ejemplo de output:

1
2
Fizz
4
Buzz
Fizz
...
14
FizzBuzz
16 
*/

// for(i=1 ; i<=100; i++){
//     if(i %15 == 0){
//         console.log("FizzBuzz")
//     } else if (i%5 ==0){
//         console.log("Buzz")
//     }else if (i%3 == 0){
//         console.log("Fizz")
//     }else{
//         console.log(i)
//     }
// }


/*  -------------------------------

------------------------------------- */


/*
  Chequeador:

  Debes crear una función llamada chequeador que reciba un arreglo y 
  un elemento a chequear, esta deberá retornar true si el elemento se 
  encuentra dentro del arreglo, sino, debe retornar false
  */
 
  //Tu función acá:

  //Tests:
//   console.log(chequeador( [1, 2, 'hola', 'chau', 10] , 'hola')) 
//   //debe retornar true
//   console.log(chequeador( [1, 2, 'hola', 'chau', 10] , 'plataforma5')) 
  //debe retornar false 

  function chequeador (arr, elemento){
      for(i=0; i<arr.length; i++){
          if(elemento == arr[i]){
              return true
          }
        }
        return false
  }

  (chequeador( [1, 2, 'hola', 'chau', 10] , 'hola'))



/*  -------------------------------

------------------------------------- */

  /*
  Productos de tecnología:

  Escribí una función que tenga dos parámetros, en primer lugar un arreglo de objetos y ademas el nombre de una propiedad. La función tendrá que devolver un arreglo que solamente contenga los valores dentro de la propiedad recibida.
  */

  //Utilizar la siguiente variable:
//   var ecommerce = [{ nombre: "Samsung TV", precio: 6000}, { nombre: "DELL notbook", precio: 4000 }, {nombre:"Auriculares Sony", precio: 1500}, {nombre:"Monitor Philips", precio:12000}, {nombre:"Teclado logitech", precio: 3000}]

  //Tu función acá:

  //Tests:
//   productosDeTecnologia(ecommerce, 'nombre') // ["Samsung TV", "DELL notbook", "Auriculares Sony", "Monitor Philips", "Teclado logitech"]
  


// let ecommerce = [{ nombre: "Samsung TV", precio: 6000}, 
// { nombre: "DELL notbook", precio: 4000 }, 
// {nombre:"Auriculares Sony", precio: 1500}, 
// {nombre:"Monitor Philips", precio:12000}, 
// {nombre:"Teclado logitech", precio: 3000}
// ]

// function productosDeTecnologia(arr, prop){
//     let newElectro = []
//     for (let i = 0; i< arr.length; i++) {
//         newElectro.push(arr[i][prop])
//     }
//     console.log(newElectro);
// }
//   productosDeTecnologia(ecommerce, 'nombre')


/*  -------------------------------
    ariel gilpeña
------------------------------------- */


/*
  SumArray: 
  
  Escribí una función sumArray que tome dos parámetros, 
  un arreglo de números ordenados y un número. La función devolverá true, 
  si cualquier combinación de dos números dentro del arreglo suman 
  el número del segundo parámetro. Sino, devolverá false.
  */

 // Tu función acá:
 
 //Tests:
 console.log(sumArray([2,5,7,10,11,15,20], 13))  // true     2+11 suman 13
 console.log(sumArray([2,5,7,10,11,15,20], 14))  // false

 function sumArray( arr, num){
    for(i=0; i<arr.length ; i++){return arr.includes(num-arr[i])}
 }

 sumArray([2,5,7,10,11,15,20], 13)








/*=================================
===================================*/



// FizzBuzz:

// Escribí un loop que imprima en la consola los números del 1 al 100. 
// Deberá cumplir las siguientes condiciones: si el número a imprimir es múltiplo de 3, 
// debe mostrar en la consola el string 'Fizz'. En cambio, si es múltiplo de 5, debe mostrar:
//  'Buzz'. Por último, si es múltiplo de ambos debe mostrar: 'FizzBuzz’

// Ejemplo de output:

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// ...
// 14
// FizzBuzz
// 16

for(i=1 ; i<=100;i++)
if(i%15 ===0){
  console.log("FizzBuzz")
}else if(i%5===0){
  console.log("Buzz")
}else if(i%3===0){
  console.log("Fizz");
}else console.log(i);