function mostraRelogio(){
    var tempo = new Date();
    var hora = format(tempo.getHours());
    var minuto = format(tempo.getMinutes());
    var segundo = format(tempo.getSeconds());
    var horario = hora + ":" + minuto + ":" + segundo;
    console.log(horario);
    
}

function format(num){
    if (num<10){
        num = "0"+num;
    } 
    return num;
}

setInterval(mostraRelogio, 1000);