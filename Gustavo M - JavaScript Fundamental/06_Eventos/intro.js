document.addEventListener("DOMContentLoaded", init);

function init(){
    var h1 = document.querySelector("h1");
    h1.innerHTML = "Aprendendo Eventos";
    
    var botao = document.querySelector("input");
    botao.addEventListener("click", acaoBotao);
    
    function acaoBotao(event){
        console.log("Clicou");
        console.log(event);
    }
    
}