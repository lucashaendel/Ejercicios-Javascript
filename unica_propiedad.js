//Única propiedad

/*  Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. 

Ejemplo: 
 var  arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ] */

let arreglo = [ 
  { name: "lucas", edad: 20 }, 
  { name: "santi", edad: 22 }, 
];
function oneProperty(arr, str){
  let newArr = [];
  for(let i=0 ; i < arr.length ; i++){
    newArr.push({[str]:arr[i][str]});    
  }
  console.log(newArr);
}
oneProperty(arreglo, "edad");