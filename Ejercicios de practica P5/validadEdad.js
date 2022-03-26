// VALIDAD EDAD PARA VOTAR

const isOldEnoughToVote = (age) =>{
   let result = age >= 16 ? true : false;
   return result
}
isOldEnoughToVote(15)