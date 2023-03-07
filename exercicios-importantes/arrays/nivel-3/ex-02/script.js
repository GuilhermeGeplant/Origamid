/*
Suponha que temos uma lista de objetos solo que contém informações sobre o pH, 
a quantidade de nutrientes e a umidade do solo em um determinado ponto de uma plantação. 
Cada objeto tem a seguinte estrutura:

const solo = [
  { ponto: 1, ph: 6.5, nutrientes: { N: 12, P: 8, K: 20 }, umidade: 0.4 },
  { ponto: 2, ph: 7.0, nutrientes: { N: 14, P: 6, K: 22 }, umidade: 0.3 },
  { ponto: 3, ph: 5.5, nutrientes: { N: 10, P: 10, K: 18 }, umidade: 0.5 },
  { ponto: 4, ph: 6.2, nutrientes: { N: 11, P: 7, K: 19 }, umidade: 0.6 },
  { ponto: 5, ph: 7.5, nutrientes: { N: 15, P: 5, K: 21 }, umidade: 0.4 },
  { ponto: 6, ph: 5.8, nutrientes: { N: 9, P: 11, K: 17 }, umidade: 0.4 },
  { ponto: 7, ph: 6.9, nutrientes: { N: 13, P: 9, K: 23 }, umidade: 0.3 },
  { ponto: 8, ph: 6.0, nutrientes: { N: 11, P: 8, K: 20 }, umidade: 0.5 },
  { ponto: 9, ph: 7.2, nutrientes: { N: 14, P: 7, K: 21 }, umidade: 0.4 },
  { ponto: 10, ph: 5.6, nutrientes: { N: 10, P: 12, K: 18 }, umidade: 0.6 },
  { ponto: 11, ph: 6.8, nutrientes: { N: 12, P: 9, K: 22 }, umidade: 0.4 },
  { ponto: 12, ph: 6.3, nutrientes: { N: 11, P: 6, K: 19 }, umidade: 0.3 },
]

O exercício consiste em escrever uma função que:

1) Usa o método .filter() com uma arrow function para criar uma nova 
    lista contendo apenas os objetos que têm umidade maior que 0.4;
2) Usa o método .map() com uma arrow function para criar uma nova lista contendo apenas os 
    valores do pH (propriedade ph) de cada objeto;
3) Usa o método .reduce() para calcular a média do pH;
4) Usa o método .find() com uma arrow function para encontrar o 
    primeiro objeto que tem umidade acima de 0.5;
5) Usa o método [].findIndex() com uma arrow function para encontrar o índice do primeiro objeto que 
    tem a quantidade de fósforo (propriedade P) maior que 8;
6) Usa o método .some() com uma arrow function para verificar se 
    pelo menos um objeto tem a quantidade de potássio (propriedade K) acima de 20;
7) Usa o método .every() com uma arrow function para verificar se todos os objetos 
    têm a quantidade de nitrogênio (propriedade N) acima de 10.
*/

const solo = [
    { ponto: 1, ph: 6.5, nutrientes: { N: 12, P: 8, K: 20 }, umidade: 0.4 },
    { ponto: 2, ph: 7.0, nutrientes: { N: 14, P: 6, K: 22 }, umidade: 0.3 },
    { ponto: 3, ph: 5.5, nutrientes: { N: 10, P: 10, K: 18 }, umidade: 0.5 },
    { ponto: 4, ph: 6.2, nutrientes: { N: 11, P: 7, K: 19 }, umidade: 0.6 },
    { ponto: 5, ph: 7.5, nutrientes: { N: 15, P: 5, K: 21 }, umidade: 0.4 },
    { ponto: 6, ph: 5.8, nutrientes: { N: 9, P: 11, K: 17 }, umidade: 0.4 },
    { ponto: 7, ph: 6.9, nutrientes: { N: 13, P: 9, K: 23 }, umidade: 0.3 },
    { ponto: 8, ph: 6.0, nutrientes: { N: 11, P: 8, K: 20 }, umidade: 0.5 },
    { ponto: 9, ph: 7.2, nutrientes: { N: 14, P: 7, K: 21 }, umidade: 0.4 },
    { ponto: 10, ph: 5.6, nutrientes: { N: 10, P: 12, K: 18 }, umidade: 0.6 },
    { ponto: 11, ph: 6.8, nutrientes: { N: 12, P: 9, K: 22 }, umidade: 0.4 },
    { ponto: 12, ph: 6.3, nutrientes: { N: 11, P: 6, K: 19 }, umidade: 0.3 },
]
console.log(solo)

const novaLista1 = solo.filter((solo) => solo.umidade > 0.4)
console.log('---------------------------------------------------')
console.log(novaLista1)
//Questão 1).

const novaLista2 = solo.map((solo) => solo.ph)
console.log('---------------------------------------------------')
console.log(novaLista2)
//Questão 2).

const calculoPh = solo.reduce((acumulador, solo) => acumulador + solo.ph, 0) / solo.length
console.log('---------------------------------------------------')
console.log(calculoPh.toFixed(1))
//Questão 3).

console.log(solo.find((solo) => solo.umidade > 0.5))
console.log('---------------------------------------------------')
//Questão 4).

console.log(solo.findIndex((solo) => solo.nutrientes.P > 8))
console.log('---------------------------------------------------')
//Questão 5).

console.log(solo.some((solo) => solo.nutrientes.K > 20))
console.log('---------------------------------------------------')
//Questão 6).

console.log(solo.every((solo) => solo.nutrientes.N > 10))
console.log('---------------------------------------------------')
//Questão 7).
