/*
Escreva uma função de arrow que receba um array de objetos representando árvores em uma área de reflorestamento. 
Cada objeto terá as propriedades "especie" (uma string que indica a espécie da árvore) 
e "altura" (um número que indica a altura da árvore em metros). 
A função deve retornar um novo array que contenha apenas as árvores com altura maior que 5 metros, 
ordenadas em ordem alfabética pelo nome da espécie.
*/

const filtrarArvoresAltas = (arvores) =>
    arvores
        .filter((item) => item.altura > 5) //arvores.filter, vai filtrar o array de objeto pegando o parâmetro altura caso seu valor for maior que 5
        .sort((a, b) => a.especie.localeCompare(b.especie)) //arvores.sort vai comparar dentro do array de objeto os parâmetros especie, e colocar em ordem alfabética

const arvores = [
    { especie: "Ipê", altura: 6 },
    { especie: "Pinheiro", altura: 4 },
    { especie: "Jacarandá", altura: 7 },
    { especie: "Eucalipto", altura: 3 },
    { especie: "Cedro", altura: 8 },
]

const arvoresAltas = filtrarArvoresAltas(arvores) //Constante recebendo a função filtrarArvoresAltas, e passando o array de objetos como argumento
console.log(arvoresAltas)
/*
Saída:
[
  { especie: 'Cedro', altura: 8 },
  { especie: 'Ipê', altura: 6 },
  { especie: 'Jacarandá', altura: 7 }
]
*/