// DESCUENTO DE TIENDA DE AUTOS (IF ANIDADOS)

/*Crear una funcion llamada  descuento  para la tienda de autos.
La funcion debe recibir como parametro: marca y modelo.
si el auto a la venta es un Chevrolet Onix, el descuento es de 5%.
si el auto a la venta es un Chevrolet corsa el descuento es del 10%*/

function descuento(marca, modelo){
    if (marca === "chevrolet"){
        if(modelo === "onix"){
        return `El auto ${marca} modelo ${modelo} tiene 5% de descuento`;
        }else if(modelo === "corsa"){
            return `El auto ${marca} modelo ${modelo} tiene 10% de descuento`;
        } else {return "No tenemos ese modelo";}
    }else{
        return `No contamos con descuento para el auto ${marca} ${modelo} en estos momentos`;
    }
}

// descuento("chevrolet", "onix");
descuento("chevrolet", "corsa");

