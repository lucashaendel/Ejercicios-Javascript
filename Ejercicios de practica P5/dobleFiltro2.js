/*
Ahora deben refactorizar la función doubleFilter, que recibirá los mismos tres parámetros pero en vez de devolver un arreglo con los nombres de los países que cumplan con las condiciones, devolverá un objeto con una key ‘nombres’ que tendrá como valor un arreglo con los nombres de los países y otra llamada ‘población total’ cuyo valor sea la suma de las poblaciones de los países filtrados.

Ejemplo:
doubleFilter(países, ‘sudamerica’, 30000000) debe retornar {
nombres: [‘argentina’, ‘brasil],
población total: 340000000
}
 */


let paises = [
    {
        nombre: "argentina",
        continente: "sudamerica",
        poblacion: 40000000
    },
    {
        nombre: "brasil",
        continente: "sudamerica",
        poblacion: 300000000
    },
    {
        nombre: "venezuela",
        continente: "sudamerica",
        poblacion: 25000000
    },
    {
        nombre: "chile",
        continente: "sudamerica",
        poblacion: 10000000
    },
    {
        nombre: "australia",
        continente: "oceania",
        poblacion: 18000000
    },
    {
        nombre: "nueva zelanda",
        continente: "oceania",
        poblacion: 8000000
    },
    {
        nombre: "china",
        continente: "asia",
        poblacion: 1000000000
    },
    {
        nombre: "tailandia",
        continente: "asia",
        poblacion: 32000000
    },
    {
        nombre: "vietnam",
        continente: "asia",
        poblacion: 23000000
    },
    {
        nombre: "‘españa",
        continente: "europa",
        poblacion: 29000000
    },
    {
        nombre: "alemania",
        continente: "europa",
        poblacion: 33000000
    },
    {
        nombre: "francia",
        continente: "europa",
        poblacion: 65000000
    },
    {
        nombre: "portugal",
        continente: "europa",
        poblacion: 4000000
    },
    {
        nombre: "grecia",
        continente: "europa",
        poblacion: 12000000
    },
]

function doubleFilter(arr, continente, poblacion){
    const obj ={
        nombres : [],
        poblacionTotal: 0
    }

    const paisesFiltrados = arr.filter((item)=>item.continente == continente && item.poblacion >= poblacion)
    paisesFiltrados.forEach((item)=>{
        obj.nombres.push(item.nombre);
        obj.poblacionTotal+=item.poblacion
    })
    return obj;

}

doubleFilter(paises, "europa", 18000000)




