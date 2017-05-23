document.addEventListener("DOMContentLoaded", init);

function init(e){
    var txtNome = document.getElementById("txtNome");
    var txtEmail = document.getElementById("txtEmail");
    var btEnviar = document.getElementById("btEnviar");
    var mensagem = document.getElementById("mensagem");
    
    btEnviar.addEventListener("click", btEnviar_click);
    
    function btEnviar_click(e){
        var nome = txtNome.value;
        var email = txtEmail.value;
        
        if(nome.length<3){
            mensagem.innerHTML = "Invalido";
        }
        
    }
    
}
