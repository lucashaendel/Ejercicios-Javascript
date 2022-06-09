//Carácter del medio

/*Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.

Ejemplo: 
middleCharacter(“plataforma5”) debe retornar “f”
middleCharacter(“hola”) debe retornar “ol”
middleCharacter(“cosas”) debe retornar “s” */

function middleCharacter(str){
    if(str.length%2 ==0){
        return str[str.length/2-1]+str[str.length/2]
    } else{
        return str[Math.floor(str.length/2)]
    }
}
middleCharacter("plataforma5")
//middleCharacter("hola")
//middleCharacter("cosas")