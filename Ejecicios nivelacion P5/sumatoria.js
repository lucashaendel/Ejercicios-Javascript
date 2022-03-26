// SUMATORIA

/*    Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.
Ejemplo: 
sumattion(3) debe retornar 6 porque hace (1 +2 +3)
sumattion(8) debe retornar 36 */


function sumattion (sumaNum){
    let result = 0
    for(let i = 1 ; i<=sumaNum ; i++){
        result=result+i;      
    }
    return result
}
sumattion(8);