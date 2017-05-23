console.log("Teste");

// Dados Primitivos
var nome = "Inconstitucionalicimamente teste";
var idade = 14;
var aprovado = false;

console.log(nome);
console.log(idade);
console.log(aprovado);


//Concatenar X Somar
console.log(idade+idade);
console.log("Nome: " + nome, ", Idade: " + idade);

//Propriedades e Métodos
console.log("nome.length: "+ nome.length);
console.log("nome.charAt(0): "+ nome.charAt(0));
console.log("nome.indexOf(a): "+ nome.indexOf("a"));
console.log("nome.lastIndexOf(a): "+ nome.lastIndexOf("a"));
console.log("nome.substring(0,16): "+ nome.substring(0,16));


//Exibir so o primeiro nome
var espaco = nome.indexOf(" ");
console.log(nome.substring(0, espaco))