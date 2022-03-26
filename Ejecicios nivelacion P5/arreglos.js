/* 11. Arreglos
Investiga los siguientes métodos de los arreglos y replica su funcionamiento de manera lógica al igual que lo hiciste en el ejercicio número 5: 
1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
2. “pop([1,2,3,4,5])” debe retornar 5
3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50] */

 function join(arr, str) {
  let x = arr.map((item) => {
    return item + str;
  });
console.log(x, "<== resultado de map");
let reducir = x.reduce(function (acc,item) {
return acc + item
})
//console.log(reducir.split())
}
join([1, 2, 3, 4, 5], " "); 



// -----------  POP  --------------------

 function pop(arr){
let final = 0
arr.map(item => {
return final = item
}) 
console.log(final)
}
pop([1,2,3,4,5]) 


// -----------  FILTER  --------------------

 function filter(arr){
let arrStr = arr.join("")
let arrPares = []
for (let i = 1; i < arrStr.length; i++) {
if(i % 2 == 0){
arrPares.push(i) 
}
}
console.log(arrPares)
}

filter([1,2,3,4,5]) 


// -----------  MAP  --------------------

 function map(arr){
let arr2 = []
for (let i = 1; i <= arr.length; i++) {
arr2.push(i *10)
}
console.log(arr2)
}

map([1,2,3,4,5])