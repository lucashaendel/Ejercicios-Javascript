// TABLAS DE MULTIPLICAR

/* Tabla de multiplicar (bucles anidados)
Escribir una funcion que reciba u numero y que escriba las tablas
de multiplicar del 1 hasta el numero pasado por parametro */


function dibujarTablas(num){
    for(i=1;i<=num;i++){
      console.log(`TABLA DEL ${i}`);
      for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
      }
    }
  }  
  dibujarTablas(2)