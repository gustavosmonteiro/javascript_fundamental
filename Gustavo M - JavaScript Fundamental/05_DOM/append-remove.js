function adicionarElemento(){
    h2 = document.createElement("h2");
    h2.innerHTML = "H2";
    
    document.body.appendChild(h2);
}

function removerElemento(){
    h2 = document.querySelector("h2");
    document.body.removeChild(h2);
}

function adicionarDiv(){
    div = document.createElement("div");
    h2 = document.createElement("h2");
    h2.innerHTML = "H2 da div";
    p = document.createElement("p");
    p.innerHTML = "p da div";
    
    div.appendChild(h2);
    div.appendChild(p);
    
    document.body.appendChild(div);
    
}