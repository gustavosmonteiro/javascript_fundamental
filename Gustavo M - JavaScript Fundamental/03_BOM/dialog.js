function mostrarAlerta(){
    alert("Foi");
}

function mostrarConfirmacao(){
    var c = confirm("Confirma?");
    
    if(c == true){
        alert("Sim");
    }else{
        alert("Não");
    }
}
function mostrarPergunta(){
    var p = prompt("Qual nome?", "");
    alert("Digitou: " + p);
}