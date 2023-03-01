/*
Crie um objeto chamado pessoa com as propriedades nome e idade. Em seguida, 
use destructuring para extrair essas propriedades em duas variáveis separadas chamadas nome e idade.
*/

//Objeto normal
const pessoa = {
    nome: "Maria",
    idade: 25,
}

//Destructuring
const { nome, idade } = pessoa

//É o mesmo que isso, porém destructuring é mais curto para escrever.
//const nome = pessoa.nome
//const idade = pessoa.idade

console.log(nome) // "Maria"
console.log(idade) // 25
