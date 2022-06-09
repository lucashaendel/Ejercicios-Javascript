/* 21. Consecutivos similares
Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos consecutivos similares hay en un string. 
Ejemplo: 
consecutivosSimilares(“AAAA”) debe retornar 3
consecutivosSimilares(“BBBBB”) debe retornar 4
consecutivosSimilares(“ABABABAB”) debe retornar 0
consecutivosSimilares(“BABABA”) debe retornar 0
consecutivosSimilares(“AAABBB”) debe retornar 4 */

function consecutivosSimilares(str){
  let cont = 0;
    for(let i = 0 ; i<str.length; i++){
      if(str[i] == str[i+1]){
        cont++;
      }
    }
    console.log(cont)
}
consecutivosSimilares("AAABBB")