function exibirTexto(){
    console.log("lalal");
    
}

var interval1 = setInterval(exibirTexto, 2000);

function exibirMensagem(){
    console.log("louco");
}

setTimeout(exibirMensagem, 5000);

function pararIntervalo(){
    clearInterval(interval1);
}