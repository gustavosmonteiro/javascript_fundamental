var relogio = document.getElementById("relogio");

function mostraRelogio(){
    var tempo = new Date();
    var hora = format(tempo.getHours());
    var minuto = format(tempo.getMinutes());
    var segundo = format(tempo.getSeconds());
    var horario = hora + ":" + minuto + ":" + segundo;
    relogio.innerHTML = horario;
    
}

function format(num){
    if (num<10){
        num = "0"+num;
    } 
    return num;
}

function mudaCor(){
    hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
   cor_aleatoria = "#"; 
   for (i=0;i<6;i++){ 
      posarray = aleatorio(0,hexadecimal.length);
      cor_aleatoria += hexadecimal[posarray]; 
   } 
    relogio.style.backgroundColor = cor_aleatoria;
    
}

function aleatorio(inferior,superior){ 
   numPossibilidades = superior - inferior 
   aleat = Math.random() * numPossibilidades 
   aleat = Math.floor(aleat) 
   return parseInt(inferior) + aleat 
} 


setInterval(mostraRelogio, 1000);

setInterval(mudaCor, 1000);