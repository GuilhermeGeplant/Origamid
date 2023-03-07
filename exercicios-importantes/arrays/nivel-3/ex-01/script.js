/*
Suponha que temos uma lista de objetos clima que contém informações sobre a temperatura máxima, 
temperatura mínima e a precipitação de uma determinada cidade em um dia específico. 
Cada objeto tem a seguinte estrutura:

const clima = [
  { dia: '01/01/2022', tempMax: 32, tempMin: 22, precipitacao: 0 },
  { dia: '02/01/2022', tempMax: 30, tempMin: 20, precipitacao: 0.2 },
  { dia: '03/01/2022', tempMax: 28, tempMin: 18, precipitacao: 0.5 },
  { dia: '04/01/2022', tempMax: 29, tempMin: 19, precipitacao: 0.1 },
  { dia: '05/01/2022', tempMax: 25, tempMin: 15, precipitacao: 1.2 },
  { dia: '06/01/2022', tempMax: 27, tempMin: 17, precipitacao: 0.6 },
  { dia: '07/01/2022', tempMax: 31, tempMin: 21, precipitacao: 0.3 },
  { dia: '08/01/2022', tempMax: 33, tempMin: 23, precipitacao: 0 },
]

Agora, vamos criar um exercício que utilize cada um dos métodos mencionados acima para manipular essa lista de objetos.

O exercício consiste em escrever uma função que:

1) Recebe a lista de objetos clima como argumento;
2) Usa o método .map() com uma arrow function para criar uma nova lista 
    contendo apenas os valores da temperatura máxima (propriedade tempMax) de cada objeto;
3) Usa o método .reduce() para calcular a média da temperatura máxima;
4) Usa o método .filter() com uma arrow function para criar uma nova lista 
    contendo apenas os objetos que tiveram precipitação maior que 0;
5) Usa o método .forEach() com uma arrow function para 
    imprimir no console a temperatura máxima de cada objeto;
6) Usa o método .some() com uma arrow function para verificar se 
    pelo menos um objeto teve precipitação acima de 1;
7) Usa o método .every() com uma arrow function para verificar se todos os objetos 
    tiveram temperatura mínima acima de 15;
8) Usa o método .find() com uma arrow function para encontrar o 
    primeiro objeto que teve precipitação acima de 0.5;
9) Usa o método [].findIndex() com uma arrow function para encontrar o 
    índice do primeiro objeto que teve temperatura mínima abaixo de 20;
10) Usa o método .reduceRight() para concatenar todas as datas (propriedade dia) em 
    uma única string, separada por vírgulas.
*/

const clima = [
    { dia: '01/01/2022', tempMax: 32, tempMin: 22, precipitacao: 0 },
    { dia: '02/01/2022', tempMax: 30, tempMin: 20, precipitacao: 0.2 },
    { dia: '03/01/2022', tempMax: 28, tempMin: 18, precipitacao: 0.5 },
    { dia: '04/01/2022', tempMax: 29, tempMin: 19, precipitacao: 0.1 },
    { dia: '05/01/2022', tempMax: 25, tempMin: 15, precipitacao: 1.2 },
    { dia: '06/01/2022', tempMax: 27, tempMin: 17, precipitacao: 0.6 },
    { dia: '07/01/2022', tempMax: 31, tempMin: 21, precipitacao: 0.3 },
    { dia: '08/01/2022', tempMax: 33, tempMin: 23, precipitacao: 0 }
]
//Questão 1).

