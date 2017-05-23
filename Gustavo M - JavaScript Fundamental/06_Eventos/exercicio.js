document.addEventListener("DOMContentLoaded", init);

function init(){
    
    var botao1 = document.getElementById("btAbrir");
    var botao2 = document.getElementById("btAlerta");
    var botao3 = document.getElementById("btCarregar");
    
    
    botao1.addEventListener("click", botao1_click);
    botao2.addEventListener("click", botao2_click);
    botao3.addEventListener("click", botao3_click);
    
}

function botao1_click(){
    window.open("http://www.google.com");
}

function botao2_click(){
    alert("Foi");
}
function botao3_click(){
    var div1 = document.getElementById("conteudo");
    var div2 = document.getElementById("conteudoDestino");
    while(div1.firstChild){
        div2.appendChild(div1.firstChild);
//        div1.removeChild(div1.firstChild);
    }
}