/*
Suponha que você é um agricultor e tem uma lista de amostras de solo coletadas de diferentes áreas de sua fazenda. 
Cada amostra é um objeto com as seguintes propriedades: 
"id" (um número inteiro único), "área" (um número que representa a área em metros quadrados) e "ph" (o valor do pH do solo). 
Você precisa processar esses dados para obter algumas informações úteis.

const amostras = [
  { id: 1, area: 100, ph: 6.5 },
  { id: 2, area: 200, ph: 5.8 },
  { id: 3, area: 300, ph: 7.2 },
  { id: 4, area: 400, ph: 4.9 },
  { id: 5, area: 500, ph: 6.1 }
]

1) Crie uma função que receba a lista de amostras de solo e calcule a área total de 
    sua fazenda. Use o método .reduce() para realizar essa operação.
2) Crie uma função que receba a lista de amostras de solo e calcule a média do 
    pH do solo em toda a fazenda. Use o método .reduce() e .length para realizar essa operação.
3) Crie uma função que receba a lista de amostras de solo e filtre apenas as 
    amostras com pH abaixo de 6. Use o método .filter() para realizar essa operação.
4) Crie uma função que receba a lista de amostras de solo e encontre a 
    amostra com o menor valor de pH. Use o método .reduce() para realizar essa operação.
5) Crie uma função que receba a lista de amostras de solo e calcule a 
    área total da fazenda, mas usando o método .forEach() em vez de .reduce().
6) Crie uma função que receba a lista de amostras de solo e verifique se 
    todas as amostras têm um pH maior que 5. Use o método .every() para realizar essa operação.
7) Crie uma função que receba a lista de amostras de solo e verifique se 
    há pelo menos uma amostra com pH abaixo de 5. Use o método .some() para realizar essa operação.
8) Crie uma função que receba a lista de amostras de solo e retorne um 
    novo array contendo apenas os valores de pH das amostras. Use o método .map() para realizar essa operação.
9) Crie uma função que receba a lista de amostras de solo e retorne o 
    índice da amostra com o maior valor de pH. Use o método .reduceRight() e Math.max() para realizar essa operação.
10) Crie uma função que receba a lista de amostras de solo e encontre a 
    primeira amostra com pH abaixo de 5. Use o método .find() para realizar essa operação.
11) Crie uma função que receba a lista de amostras de solo e encontre o 
    índice da primeira amostra com pH abaixo de 5. Use o método .findIndex() para realizar essa operação.
*/

const amostras = [
    { id: 1, area: 100, ph: 6.5 },
    { id: 2, area: 200, ph: 5.8 },
    { id: 3, area: 300, ph: 7.2 },
    { id: 4, area: 400, ph: 4.9 },
    { id: 5, area: 500, ph: 6.1 }
]
console.log(amostras)
console.log('---------------------------------------------------')

const mediaArea = amostras.reduce((acumulador, amostras) => acumulador + amostras.area, 0) / amostras.length
console.log(mediaArea)
console.log('---------------------------------------------------')
//Questão 1).

const mediaPh = amostras.reduce((acumulador, amostras) => acumulador + amostras.ph, 0) / amostras.length
console.log(mediaPh)
console.log('---------------------------------------------------')
//Questão 2).

console.log(amostras.filter((amostras) => amostras.ph < 6))
console.log('---------------------------------------------------')
//Questão 3).

function encontrarMenorAmostraDeSolo(amostras) {
    const menorAmostra = amostras.reduce((amostraAtual, amostraProxima) => {
        return amostraProxima.ph < amostraAtual.ph ? amostraProxima : amostraAtual
    })
    console.log(menorAmostra)
}
encontrarMenorAmostraDeSolo(amostras)
console.log('---------------------------------------------------')
//Questão 4).

function calcularAreaTotal(amostras) {
    let areaTotal = 0
    amostras.forEach((amostra) => {
        areaTotal += amostra.area
    })
    return areaTotal
}

console.log(calcularAreaTotal(amostras))
console.log('---------------------------------------------------')
//Questão 5).

console.log(amostras.every((amostra) => amostra.ph > 5))
console.log('---------------------------------------------------')
//Questão 6).

console.log(amostras.some((amostra) => amostra.ph < 5))
console.log('---------------------------------------------------')
//Questão 7).

console.log(amostras.map((amostra) => amostra.ph))
console.log('---------------------------------------------------')
//Questão 8).

function obterIndiceMaiorPh(amostras) {
    return amostras.reduceRight((iMax, amostra, i, arr) => amostra.ph > arr[iMax].ph ? i : iMax, 0)
}

console.log(obterIndiceMaiorPh(amostras))
console.log('---------------------------------------------------')
//Questão 9).

console.log(amostras.find((amostra) => amostra.ph < 5))
console.log('---------------------------------------------------')
//Questão 10).

console.log(amostras.findIndex((amostra) => amostra.ph < 5))
console.log('---------------------------------------------------')
//Questão 11).