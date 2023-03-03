/*
Suponha que você tenha um objeto representando uma árvore em um campo florestal, com as seguintes propriedades:

const tree = {
  species: "Eucalipto",
  height: 20,
  age: 5,
  location: {
    latitude: -23.563987,
    longitude: -46.653785,
  },
  trunk: {
    diameter: 0.5,
    bark: "Marrom",
  },
  canopy: {
    leaves: 15000,
    branches: 50,
  },
}

1) Crie uma função printTreeInfo que recebe o objeto tree como argumento e usa destructuring para imprimir as seguintes informações no console:

- A espécie da árvore.
- A altura da árvore.
- O diâmetro do tronco da árvore.
- A cor da casca do tronco da árvore.
- O número de folhas na copa da árvore.

2) Crie uma função getTreeLocation que recebe o objeto tree como argumento e usa destructuring para retornar um objeto 
contendo as propriedades latitude e longitude.

3) Crie uma função setTreeAgeAndHeight que recebe o objeto tree como argumento e altere as 
propriedades age e height com novos valores.

4) Crie uma função getCanopySize que recebe o objeto tree como argumento e usa destructuring para 
calcular e retornar a área da copa da árvore (em metros quadrados), com base no diâmetro da copa 
(assuma que a copa é circular e que o diâmetro é igual ao dobro do número de galhos).

5) Crie uma função getBarkColor que recebe o objeto tree como argumento 
e usa destructuring para retornar a cor da casca do tronco da árvore em caixa alta 
(por exemplo, se a cor for "Marrom", a função deve retornar "MARROM").
*/

const tree = {
    species: "Eucalipto",
    height: 20,
    age: 5,
    location: {
        latitude: -23.563987,
        longitude: -46.653785,
    },
    trunk: {
        diameter: 0.5,
        bark: "Marrom",
    },
    canopy: {
        leaves: 15000,
        branches: 50,
    },
}

printTreeInfo = (tree) => {
    const { species, height, trunk: { diameter, bark }, canopy: { leaves } } = tree
    console.log(`espécie da árvore: ${species}`)
    console.log(`altura da árvore: ${height}`)
    console.log(`O diâmetro do tronco da árvore: ${diameter}`)
    console.log(`cor da casca do tronco da árvore: ${bark}`)
    console.log(`número de folhas na copa da árvore: ${leaves}`)
}

getTreeLocation = (tree) => {
    const { location: { latitude, longitude } } = tree
    console.log(`propriedade latitude: ${latitude}`)
    console.log(`propriedade longitude: ${longitude}`)
}

setTreeAgeAndHeight = (tree) => {
    tree.age = 10
    tree.height = 20
    console.log(`propriedade age: ${tree.age}`)
    console.log(`propriedade height: ${tree.height}`)
}

getCanopySize = (tree) => {
    const { canopy: { branches } } = tree
    const copaDiametro = branches * 2
    const copaRaio = copaDiametro / 2
    const copaArea = Math.PI * Math.pow(copaRaio, 2)
    console.log(`Área da copa da árvore (em metros quadrados): ${copaArea.toFixed(2)}`)
}

getBarkColor = (tree) => {
    const { trunk: { bark } } = tree
    console.log(bark.toUpperCase())
}

printTreeInfo(tree)
/*
Saída:
espécie da árvore: Eucalipto
altura da árvore: 20
O diâmetro do tronco da árvore: 0.5
cor da casca do tronco da árvore: Marrom
número de folhas na copa da árvore: 15000
*/

getTreeLocation(tree)
/*
Saída:
propriedade latitude: -23.563987
propriedade longitude: -46.653785
*/

setTreeAgeAndHeight(tree)
/*
Saída:
propriedade age: 10
propriedade height: 20
*/

getCanopySize(tree)
/*
Saída:
Área da copa da árvore (em metros quadrados): 7853.98
*/

getBarkColor(tree)
/*
Saída:
MARROM
*/