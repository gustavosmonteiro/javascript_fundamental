function adicionaElemento(){
    var nova = document.getElementById("inputText").value;
    var ul = document.getElementById("container");
    var li = document.createElement("li");
    li.innerHTML = nova;
    ul.appendChild(li);
    
}

function limpar(){
    var ul = document.querySelector("ul");
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
}


function sumir(element){
    console.log(element);
    document.body.removeChild(element);
}