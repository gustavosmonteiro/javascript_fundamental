function olaSemParametroSemRetorno(){
    console.log("Sem parametro e sem retorno");
}

function olaParametroSemRetorno(param){
    console.log("Com parametro " + param + " e sem retorno");
}

function olaSemParametroComRetorno(){
    return("Sem parametro e com retorno");
}

olaSemParametroSemRetorno();
olaParametroSemRetorno("teste");
console.log(olaSemParametroComRetorno());