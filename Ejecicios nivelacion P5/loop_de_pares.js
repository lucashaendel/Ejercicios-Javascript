//1. Loop de pares
 
/*Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
 En caso de que el número de la iteración, sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.*/



function loopDePares(num){

    for(let num=0; num<=100; num++){
        if(num%2 === 0){
            console.log("el numero: "+num+ " es par.");
        }else{
            console.log(num);
        }        
    }        
}
loopDePares(0);