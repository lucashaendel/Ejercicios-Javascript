/*Usando la estructura switch(), pedile al usuario que valore la película que acaba de ver en:

    Muy Mala.
    Mala.
    Mediocre.
    Buena.
    Muy buena.

Acompañá cada valoración con un mensaje que indique si lamentás o te alegrás por su valoración.

Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor inválido".

Cuando el usuario haya valorado la película, agradecele su visita. */

let nota = prompt('ingrese una calificacion del 1 al 5')

switch(nota){
    case '1': console.log('Calificaste la pelicula como MUY MALA, lo lamentamos mucho')
    break
    case '2': console.log('Calificaste la pelicula como MALA, vamos a trabajar en ello')
    break
    case '3': console.log('Calificaste la pelicula como MEDIOCRE, estamos mejorando para una mejor experiencia')
    break
    case '4': console.log('Calificaste la pelicula como BUENA, tu calificacion nos ayuda mucho')
    break
    case '5': console.log('Calificaste la pelicula como MUY BUENA, gracias por calificar')
    break
    default: console.log('Ingrese una nota valida.')
}