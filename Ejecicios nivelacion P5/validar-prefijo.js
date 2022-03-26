// Prefijos Telefónicos
  
/*  Utils:
    var prefijos = [54, 55, 56, 57, 58],
    var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:
Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los números de prefijos, y como valor, el país correspondiente a cada prefijo.
ejemplo : 
{
    54: “Argentina”,
    55: ”Brasil”,
    56: ”Ecuador”,
    57: ”Colombia”
    58: ”Venezuela”
}
Validar si los dos primeros números del pasado por parámetro existen en el objeto de prefijos telefónicos. En caso de ser correcto, deberá retornar “Este número pertenece a X”.
En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”

Ejemplo: 
validarPrefijo(“5412345678”) debe retornar “Este número pertenece a Argentina”
validarPrefijo(“5712345678”) debe retornar “Este número pertenece a Colombia”
validarPrefijo(“8012345678”) debe retornar “El número no pertenece a nuestros países” */

let prefijos = [54, 55, 56, 57, 58];
let paises = ["Argentina", "Brasil", "Chile", "Colombia", "Venezuela"];

function validarPrefijo(num){
    let newObj = {};
    for(let i = 0 ; i < prefijos.length ; i++){
        newObj[prefijos[i]] = paises[i]
    }
    for (let key in newObj){
        if (key == num[0]+num[1]){
           return "este numero pertenece a "+newObj[key];

        }
    }
    return "Este numero no pertenece a nuestros paises";
}
validarPrefijo("5412345678");