/*
1) Ordenação de árvores por altura e diâmetro:

Crie um array de objetos representando árvores em uma floresta. 
Cada objeto deve ter duas propriedades: "altura", 
que representa a altura da árvore em metros, e "diametro", 
que representa o diâmetro da árvore em centímetros. 
Use o método .sort() para ordenar as árvores primeiro por altura em ordem 
crescente e, em seguida, por diâmetro em ordem decrescente.
*/

const floresta = [
    { altura: 25, diametro: 80 },
    { altura: 10, diametro: 45 },
    { altura: 18, diametro: 60 },
    { altura: 30, diametro: 90 },
    { altura: 12, diametro: 50 }
]

const ordernarCrescente = (florestas) => {
    console.log(florestas.sort((a, b) => a.altura - b.altura))
}

ordernarCrescente(floresta)
/*
[
  { altura: 10, diametro: 45 },
  { altura: 12, diametro: 50 },
  { altura: 18, diametro: 60 },
  { altura: 25, diametro: 80 },
  { altura: 30, diametro: 90 }
]
*/

const ordernarDecrescente = (florestas) => {
    console.log(florestas.sort((a, b) => b.altura - a.altura))
}

ordernarDecrescente(floresta)
/*
[
  { altura: 30, diametro: 90 },
  { altura: 25, diametro: 80 },
  { altura: 18, diametro: 60 },
  { altura: 12, diametro: 50 },
  { altura: 10, diametro: 45 }
]
*/