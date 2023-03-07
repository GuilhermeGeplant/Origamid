/*
Suponha que você está trabalhando em um projeto de reflorestamento e precisa manipular um 
conjunto de dados sobre as espécies de árvores em uma determinada região. 
O conjunto de dados é uma matriz de objetos, 
onde cada objeto representa uma espécie de árvore e contém as seguintes propriedades:

[
  { nome: 'Mogno', alturaMaxima: 50, paisDeOrigem: 'Brasil' },
  { nome: 'Cedro', alturaMaxima: 45, paisDeOrigem: 'Brasil' },
  { nome: 'Carvalho', alturaMaxima: 30, paisDeOrigem: 'Europa' },
  { nome: 'Bordo', alturaMaxima: 25, paisDeOrigem: 'América do Norte' },
  { nome: 'Pinheiro', alturaMaxima: 40, paisDeOrigem: 'Europa' }
]

1) Use o método .forEach() e uma função de seta para imprimir 
    o nome de cada espécie de árvore na matriz.
2) Use o método .map() e uma função de seta para criar uma nova 
    matriz que contém apenas o nome de cada espécie de árvore.
3) Use o método .map() e uma função de seta para criar uma nova matriz que contém 
    o nome de cada espécie de árvore em letras maiúsculas.
4) Use o método .reduce() para calcular a altura máxima total de todas as espécies de árvores na matriz.
5) Use o método .reduceRight() para concatenar o nome de cada espécie de 
    árvore em uma única string, separando cada nome por um espaço.
6) Use o método .some() e uma função de seta para verificar se há alguma 
    espécie de árvore na matriz que tenha origem na América do Norte.
7) Use o método .every() e uma função de seta para verificar se todas as espécies de 
    árvores na matriz têm altura máxima superior a 20 metros.
8) Use o método .find() e uma função de seta para encontrar a 
    primeira espécie de árvore na matriz que tenha origem na Europa.
9) Use o método [].findIndex() e uma função de seta para encontrar o índice 
    da primeira espécie de árvore na matriz que tenha altura máxima superior a 35 metros.
10) Use o método .filter() e uma função de seta para criar uma nova 
    matriz que contém apenas as espécies de árvores que têm origem no Brasil.
*/

const arvores = [
    { nome: 'Mogno', alturaMaxima: 50, paisDeOrigem: 'Brasil' },
    { nome: 'Cedro', alturaMaxima: 45, paisDeOrigem: 'Brasil' },
    { nome: 'Carvalho', alturaMaxima: 30, paisDeOrigem: 'Europa' },
    { nome: 'Bordo', alturaMaxima: 25, paisDeOrigem: 'América do Norte' },
    { nome: 'Pinheiro', alturaMaxima: 40, paisDeOrigem: 'Europa' }
]

arvores.forEach(arvore => {
    console.log(arvore.nome)
})
console.log('---------------------------------------------------')
//Questão 1).

const arvoresNome = arvores.map((arvore) => arvore.nome)
console.log(arvoresNome)
console.log('---------------------------------------------------')
//Questão 2).

const arvoresMaiusculas = arvores.map((arvore) => arvore.nome.toUpperCase())
console.log(arvoresMaiusculas)
console.log('---------------------------------------------------')
//Questão 3).

console.log(arvores.reduce((acumulador, arvores) => acumulador + arvores.alturaMaxima, 0))
console.log('---------------------------------------------------')
//Questão 4).

const arvoresUnicaString = arvores.reduceRight((acumulador, arvores) => {
    return acumulador === '' ? arvores.nome : arvores.nome + ' ' + acumulador
}, '')
console.log(arvoresUnicaString)
console.log('---------------------------------------------------')
//Questão 5).

console.log(arvores.some((arvores) => arvores.paisDeOrigem === 'América do Norte'))
console.log('---------------------------------------------------')
//Questão 6).

console.log(arvores.every((arvores) => arvores.alturaMaxima))
console.log('---------------------------------------------------')
//Questão 7).

console.log(arvores.find((arvores) => arvores.paisDeOrigem === 'Europa'))
console.log('---------------------------------------------------')
//Questão 8).

console.log(arvores.findIndex((arvores) => arvores.alturaMaxima > 35))
console.log('---------------------------------------------------')
//Questão 9).

console.log(arvores.filter((arvores) => arvores.paisDeOrigem === 'Brasil'))
console.log('---------------------------------------------------')
//Questão 10).
