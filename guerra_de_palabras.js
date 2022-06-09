//Guerra de palabras

 /*    Utils: 
 var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}


Debés crear una función llamada `warWords` que reciba dos palabras como parámetro y devuelva la ganadora según la suma del valor de sus letras (dado por su posición en el abecedario).

Ejemplo:
warWord(“hola”, “chau”) debe retornar  “hola” (36 > 33)
warWord(“love”, “friendship”) debe retornar “friendship” */

let abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}

function warWord(str, str2) {
    let palabraTotal = 0;
    let palabraTotal1 = 0;
    for (i = 0; i < str.length; i++) {
      for (key in abc) {
        if (str[i] == key) {
          palabraTotal = palabraTotal + abc[key];
        }
      }
    }
    for (i = 0; i < str2.length; i++) {
      for (key in abc) {
        if (str2[i] == key) {
          palabraTotal1 = palabraTotal1 + abc[key];
        }
      }
    }
    if (palabraTotal < palabraTotal1) {
      console.log(str2);
    } else console.log(str);
  }
  warWord("love", "friendship"); 