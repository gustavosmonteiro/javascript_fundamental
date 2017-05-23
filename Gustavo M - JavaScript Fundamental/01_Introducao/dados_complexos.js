//Array

var array = ["1", "2", "3", "um pasito pra frente"];
console.log(array);
console.log(array[3]);

array.push("Maria")
console.log(array);

console.log(array[3].length);


//Object

var aluno = {
    nome: "Gustavo",
    idade: 26,
    aprovado: true
    
}

console.log(aluno.nome + " Aprovado: " + aluno.aprovado);

var professor = new Object();
professor.nome = "Thiago";
professor.idade = 30;

console.log(professor.nome + " ensina Javascript para "+ aluno.nome);

