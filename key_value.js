//{value: key} kelue: vay

/* Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado como input y por qué no es válido.
Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas las propiedades que sean un string puestas como key y el value deberá ser el key anterior.

    Ejemplo:
reverseKeys(344) debería devolver “error, input can’t be a number”
reverseKeys([ ]) debería devolver “error, input can’t be an Array”
reverseKeys(‘hola’) debería devolver “error, input can’t be a string”

var prueba = {
    nombre: ‘santi’,
    edad: 22,
    nacionalidad: ‘de otro planeta’,
    documento: 44444444
    
}
reverseKeys(prueba) debería devolver:
{
santi: ‘nombre’, 
edad: 22,
‘’de otro planeta”: nacionalidad,
 documento: 44444444
}*/


let prueba = {
    nombre: "santi",
    edad: 22,
    nacionalidad: "de otro planeta",
    documento: 44444444
}

let newObj18 = {}

function reverseKeys(obj18){
    if (typeof obj18 === "number"){
        console.log("error, input can’t be a number");
    }else if (typeof obj18 === "string"){
        console.log ("error, input can’t be a string");
    }else if (Array.isArray(obj18)  === true){
        console.log("error, input can’t be an Array");
    }else if(typeof obj18 === "object" && obj18 !== null){
            
        for (key in obj18){
            if(typeof obj18[key] === "string"){
                newObj18[obj18[key]] = key
            }else if (typeof obj18[key] === "number"){
                newObj18 [key] = [obj18[key]]
            }
        }
        console.log(newObj18);
    }
} 
    reverseKeys(prueba);

console.log("falta el N° 18 - {key:value}");