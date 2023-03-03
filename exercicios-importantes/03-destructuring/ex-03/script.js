/*
Suponha que você tenha um objeto que representa a produção de madeira em uma floresta:

const producaoFlorestal = {
  area: 10000,
  especies: ['eucalipto', 'pinus', 'carvalho'],
  volumes: [5000, 3000, 2000]
}
Cada elemento do array especies corresponde à mesma posição no array volumes, ou seja, 
o primeiro elemento de especies é 'eucalipto' e o primeiro elemento de volumes é 5000, e assim por diante.

1) Crie variáveis ​​separadas para armazenar as propriedades 
area, especies e volumes, utilizando a sintaxe de destructuring.

2) Crie uma função que receba o objeto producaoFlorestal como argumento e retorne um novo objeto 
contendo apenas as propriedades especies e volumes. 
Utilize destructuring para extrair essas propriedades do objeto original e crie um novo objeto com elas.

3) Crie uma função que receba o objeto producaoFlorestal como argumento e retorne 
a espécie que produziu o maior volume de madeira.
Para isso, utilize destructuring para extrair as propriedades especies e volumes do objeto original e 
percorra os arrays correspondentes para encontrar a maior quantidade de madeira produzida. 
Em seguida, retorne a espécie correspondente.

4) Crie uma função que receba o objeto producaoFlorestal como argumento e
retorne um novo objeto com a propriedade volumes contendo os valores originais multiplicados por 1.5. 
Utilize destructuring para extrair a propriedade volumes do objeto original e criar um novo array com os valores multiplicados.
*/

const producaoFlorestal = {
    area: 10000,
    especies: ['eucalipto', 'pinus', 'carvalho'],
    volumes: [5000, 3000, 2000]
}

const { area, especies, volumes } = producaoFlorestal
const prodArea = area
const prodEspecies = especies
const prodVolumes = volumes

novaFuncao = (producaoFlorestal) => {
    const { especies, volumes } = producaoFlorestal
    const novoObjeto = [especies, volumes]
    console.log(novoObjeto)
}

volumeMadeira = (producaoFlorestal) => {
    const { especies, volumes } = producaoFlorestal;

    const especiesOrdenadas = [...especies].sort((a, b) => {
        const indiceA = especies.indexOf(a)
        const indiceB = especies.indexOf(b)
        return volumes[indiceB] - volumes[indiceA] //volumes[indiceB] - volumes[indiceA]), em ordem decrescente (do maior para o menor).
    })

    console.log(`Espécie: ${especiesOrdenadas[0]}, Volume: ${volumes[0]}`)
}

function multiplicarVolumes(producaoFlorestal) {
    const { volumes } = producaoFlorestal
    const novosVolumes = volumes.map(volume => volume * 1.5)

    const resultado = { ...producaoFlorestal, volumes: novosVolumes }
    console.log(resultado)
}


console.log(prodArea) //Saída: 10000
console.log(prodEspecies) //Saída: [ 'eucalipto', 'pinus', 'carvalho' ]
console.log(prodVolumes) //Saída: [ 5000, 3000, 2000 ]

novaFuncao(producaoFlorestal) //Saída: [ [ 'eucalipto', 'pinus', 'carvalho' ], [ 5000, 3000, 2000 ] ]

volumeMadeira(producaoFlorestal) //Saída: Espécie: eucalipto, Volume: 5000

multiplicarVolumes(producaoFlorestal)
/*
Saída:
{
  area: 10000,
  especies: [ 'eucalipto', 'pinus', 'carvalho' ],
  volumes: [ 7500, 4500, 3000 ]
}
*/