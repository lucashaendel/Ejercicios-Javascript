/*19. Palindromo
Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.

Definición de palíndromo aquí.

Ejemplo: 

palindromo(“anilina”) debe retornar true
palindromo(“Ana”) debe retornar true
palindromo(“Enrique”) debe retornar false */


// function palindromo(palabra19){
//     palabra19 = palabra19.toLowerCase();
//     let acumulador = "";
//     for(let i=palabra19.length -1; i >= 0 ; i--){
//       acumulador += palabra19[i];
//     }
//     if(acumulador == palabra19)
//     console.log(true)
//     else
//     console.log(false)
// }
// palindromo("Anilina")


/*-------------------------------------
              CON  METODOS
----------------------------------------*/


const palindromo = (palabra)=>{
    palabra = palabra.toLowerCase();
    let revertida = palabra.split("").reverse().join("");
    return palabra == revertida ? true: false;
}

palindromo("Anilina")