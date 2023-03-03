/*
1) Ordenação de árvores por altura:

Crie um array de objetos representando árvores em uma floresta. 
Cada objeto deve ter uma propriedade "altura", 
que representa a altura da árvore em metros. Use o método .sort() 
para ordenar as árvores em ordem crescente de altura.
*/

const floresta = [
  { altura: 25 },
  { altura: 10 },
  { altura: 18 },
  { altura: 30 },
  { altura: 12 }
]

const ordenarArvoresPorAltura = (arvores) => {
  arvores.sort((a, b) => a.altura - b.altura)
  return arvores
}

console.log(ordenarArvoresPorAltura(floresta))
/*
[
  { altura: 10 },
  { altura: 12 },
  { altura: 18 },
  { altura: 25 },
  { altura: 30 }
]
*/
