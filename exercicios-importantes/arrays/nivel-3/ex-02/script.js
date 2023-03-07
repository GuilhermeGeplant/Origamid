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

Agora, vamos criar um exercício que utiliza métodos de array para manipular essa lista de objetos.

O exercício consiste em escrever uma função que:

1) Recebe a lista de objetos solo como argumento;
2) Usa o método .filter() com uma arrow function para criar uma nova 
    lista contendo apenas os objetos que têm umidade maior que 0.4;
3) Usa o método .map() com uma arrow function para criar uma nova lista contendo apenas os 
    valores do pH (propriedade ph) de cada objeto;
4) Usa o método .reduce() para calcular a média do pH;
5) Usa o método .find() com uma arrow function para encontrar o 
    primeiro objeto que tem umidade acima de 0.5;
6) Usa o método [].findIndex() com uma arrow function para encontrar o índice do primeiro objeto que 
    tem a quantidade de fósforo (propriedade P) maior que 8;
7) Usa o método .some() com uma arrow function para verificar se 
    pelo menos um objeto tem a quantidade de potássio (propriedade K) acima de 20;
8) Usa o método .every() com uma arrow function para verificar se todos os objetos 
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
