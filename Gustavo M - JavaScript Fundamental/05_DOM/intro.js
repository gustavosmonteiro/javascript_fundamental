var paragrafo = document.getElementById("paragrafo");
paragrafo.innerHTML = "Isso é um parágrafo via <b>código</b>";

function alteraTitulo() {
    var titulo = document.getElementById("titulo");
    titulo.innerHTML = "Introdução ao DOM modificado por innerHTML";   
}

function tituloAleatorio() {
    var titulos = ["Bom dia!", "Boa tarde!", "Boa noite!", "Se lasque!"];
    var subtitulo = document.getElementById("subtitulo");
    var numeroAleatorio = Math.random() * (titulos.length - 1);
    subtitulo.innerHTML = titulos[Math.round(numeroAleatorio)];
}