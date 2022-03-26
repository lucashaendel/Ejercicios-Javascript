//2. Loop de impares con palabra

/*Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
Ahora, modificá el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro. */


function loopDeImpares (num2, palabra){
    for(num2=0 ; num2<=100 ; num2++){
        if (num2%2 === 0){
            console.log(num2)
        }else{
            console.log(num2,palabra)
        }
    }
}
loopDeImpares(0," <- Este numero es impar.")