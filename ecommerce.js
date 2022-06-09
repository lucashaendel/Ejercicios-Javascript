// Software Factory

/*Pensemos que somos una software factory (empresa de desarrollo) y tenemos un cliente que tiene varios artículos de tecnología. Este cliente nos plantea dos necesidades para su negocio:

Conocer el valor total de cada artículo según sus cantidades (es decir, cuál es el valor total de todos sus televisores, por ejemplo).

Imprimir una lista que separe cada artículo con su respectiva suma total de valores en sus respectivos Objetos.

¿Cómo realizar estos pedidos?

Crearás una nueva Función, en la cual su argumento haga referencia a un Arreglo de productos del ecommerce (el cual nuestro cliente ya nos brinda).

let ecommerce = [{ nombre: "Samsung TV", precio: 6000, artículos:10}, 
{nombre: "DELL notebook", precio: 4000, artículos:30 },
{nombre:"Auriculares Sony", precio: 1500, artículos:15},
{nombre:"Monitor Philips", precio:12000, artículos:20},
{nombre:"Teclado logitech", precio: 3000, artículos:5}]
 
La Función en general tendrá que devolver un nuevo Arreglo con Objetos que tengan el nombre de cada producto y el valor total de todos los artículos que se encuentren en la tienda.

¿Qué debería devolver?
show hint
totalArtículos(ecommerce) 
// Debe retornar (5) [{…}, {…}, {…}, {…}, {…}]
{Samsung TV: 60000}
{DELL notebook: 120000}
{Auriculares Sony: 22500}
{Monitor Philips: 240000}
{Teclado logitech: 15000}*/

let ecommerce = [{ nombre: "Samsung TV", precio: 6000, artículos:10}, 
{nombre: "DELL notebook", precio: 4000, artículos:30 },
{nombre:"Auriculares Sony", precio: 1500, artículos:15},
{nombre:"Monitor Philips", precio:12000, artículos:20},
{nombre:"Teclado logitech", precio: 3000, artículos:5}]

function softwareFactory(arr){
    let newObj =[];
    let suma =0
   arr.forEach(element => {
    suma = element.precio*element.artículos
       newObj.push({[element.nombre]:suma})
    }
    );
    return newObj
}
softwareFactory(ecommerce)