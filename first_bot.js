/*En este ejercicio deberás crear un bot para una cafetería que reciba hasta 20 clientes y les asigne una mesa, a cada uno de ellos.

El mensaje que deberá mostrar a cada uno es: "¡Bienvenid@ a mi café! Su mesa es la X". */

let clientesMax = prompt("ingrese el numero de clientes");
clientesMax = parseInt(clientesMax)
if(clientesMax <= 20){
    for (let i = 1; i <= clientesMax; i++) {
        console.log('¡Bienvenid@ a mi cafe! Su mesa es la numero: '+i)
    }
}else {
    console.log('El numero supera la cantidad de mesas');
}

