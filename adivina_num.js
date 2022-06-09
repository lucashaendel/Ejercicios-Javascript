// Adiviná Un Número

/*En este ejercicio deberás crear un programa para que el usuario adivine un número generado al azar.

Para eso, seguí estas indicaciones:

Usá el método prompt para pedirle al usuario que ingrese un número 👎, que esté entre el 1 y el 10.
Usá parseInt(n) para convertir el String en un Number.
Generá un número random entre 1 y el Valor ingresado por el usuario 👎.
Pedile al usuario que descubra cuál es el número generado al azar.
Decile si acertó, si es mayor o si es menor.
Repetí el proceso hasta que adivine el número.
Cuando lo descubra, felicitalo y usá un contador que le indique cuántas oportunidades usó para adivinar el número correcto.*/

let numUser = prompt('INGRESE UN NUMERO, entre 1 y 10')
numUser = parseInt(numUser)

const numRan = Math.floor(Math.random() * numUser);

let adivUser = prompt('Adivina el numero random')
adivUser = parseInt(adivUser)
let contador = 0;

for (let i = 1; adivUser !== numRan ; i++) {
     if (adivUser <numRan){
        console.log('el numero que ingresaste es menor')
         adivUser = prompt('Adivina el numero random')
         adivUser = parseInt(adivUser)
    }else if (adivUser >numRan){
         console.log('El numero que ingresaste es mayor');
         adivUser = prompt('Adivina el numero random')
          adivUser = parseInt(adivUser)
     }
    contador = i
}
alert(`GANASTE!!!!  Lo intentaste ${contador} veces`);