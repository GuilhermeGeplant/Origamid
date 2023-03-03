/*
1) Suponha que você é um engenheiro florestal responsável por 
   realizar uma análise de árvores em uma determinada área. 
   Cada árvore é representada por um objeto JavaScript contendo as 
   seguintes propriedades: nome (string), altura (número), diâmetro (número) e idade (número).

2) Para realizar a análise, você precisa ordenar as árvores de acordo com a sua altura, 
   da mais baixa para a mais alta. 
   Escreva uma função chamada ordenarArvoresPorAltura que recebe um array de objetos representando as árvores 
   e retorna um novo array com as árvores ordenadas pela altura.
*/

const areaDeArvores = [
    { nome: 'Ipê Amarelo', altura: 15, diametro: 40, idade: 30 },
    { nome: 'Jatobá', altura: 20, diametro: 50, idade: 50 },
    { nome: 'Jacarandá', altura: 10, diametro: 30, idade: 25 },
    { nome: 'Mogno', altura: 18, diametro: 45, idade: 40 },
    { nome: 'Cedro', altura: 12, diametro: 35, idade: 30 }
]

const ordenarArvoresPorAltura = (arvores) => {
    arvores.sort((a, b) => a.altura - b.altura)
    return arvores
}

console.log(ordenarArvoresPorAltura(areaDeArvores))
/*
[
  { nome: 'Jacarandá', altura: 10, diametro: 30, idade: 25 },
  { nome: 'Cedro', altura: 12, diametro: 35, idade: 30 },
  { nome: 'Ipê Amarelo', altura: 15, diametro: 40, idade: 30 },
  { nome: 'Mogno', altura: 18, diametro: 45, idade: 40 },
  { nome: 'Jatobá', altura: 20, diametro: 50, idade: 50 }
]

Obs: lembrando que a função não clonou o array de objetos areaDeArvores,
mas alterou ela.
*/
