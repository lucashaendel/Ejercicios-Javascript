let pregunta= "si"

//piedra = 0
//papel = 1
// tijera = 2

while (pregunta == "si"){
let resUser = prompt("ingrese: Piedra, Papel o Tijera")
 resUser = resUser.toLowerCase()
let resCpu = Math.floor(Math.random() * 3);
// Para la piedra
if(resUser === "piedra" && resCpu === 0){
  alert("EMPATASTE")
}else if(resUser === "piedra" && resCpu === 1){
  alert("PERDISTE")
}else if(resUser === "piedra" && resCpu === 2){
  alert("GANASTE")
}
// Para la papel
if(resUser === "papel" && resCpu === 0){
  alert("GANASTE")
}else if(resUser === "papel" && resCpu === 1){
  alert("EMPATASTE")
}else if(resUser === "papel" && resCpu === 2){
  alert("PERDISTE")
}
// Para la tijera
if(resUser === "tijera" && resCpu === 0){
  alert("PERDISTE")
}else if(resUser === "tijera" && resCpu === 1){
  alert("GANASTE")
}else if(resUser === "tijera" && resCpu === 2){
  alert("EMPATASTE")
}

pregunta= prompt("Queres jugar de nuevo?")    
  pregunta = pregunta.toLowerCase()
}