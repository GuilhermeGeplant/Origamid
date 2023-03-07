/*
Suponha que você está trabalhando em um projeto para analisar dados hidrológicos de um rio. 
Você tem um conjunto de dados em forma de matriz, 
onde cada elemento representa um registro de medição do nível do rio em um determinado ponto no tempo. 
Cada registro é representado por um objeto com as seguintes propriedades:

[
  { data: '2022-01-01', nivel: 3.45 },
  { data: '2022-01-02', nivel: 3.20 },
  { data: '2022-01-03', nivel: 3.75 },
  { data: '2022-01-04', nivel: 3.90 },
  { data: '2022-01-05', nivel: 4.15 },
  { data: '2022-01-06', nivel: 4.05 },
  { data: '2022-01-07', nivel: 3.80 },
  { data: '2022-01-08', nivel: 3.60 },
  { data: '2022-01-09', nivel: 3.50 },
  { data: '2022-01-10', nivel: 3.25 },
  { data: '2022-01-11', nivel: 3.10 },
  { data: '2022-01-12', nivel: 2.95 },
  { data: '2022-01-13', nivel: 2.80 }
]

1) Use o método .forEach() e uma função de seta para imprimir o nível do rio em cada registro de medição.
2) Use o método .map() e uma função de seta para criar uma 
    nova matriz que contém apenas as datas em que foram feitas as medições.
3) Use o método .map() e uma função de seta para criar uma nova matriz que 
    contém o nível do rio em cada registro de medição, mas com os valores arredondados para duas casas decimais.
4) Use o método .reduce() para calcular a média do nível do rio em todos os registros de medição.
5) Use o método .reduceRight() para encontrar o registro de medição com o maior nível do rio.
6) Use o método .some() e uma função de seta para verificar se 
    há algum registro de medição em que o nível do rio seja superior a 4 metros.
7) Use o método .every() e uma função de seta para verificar se todos os 
    registros de medição têm o nível do rio superior a 2 metros.
8) Use o método .find() e uma função de seta para encontrar o 
    primeiro registro de medição em que o nível do rio seja superior a 4 metros.
9) Use o método [].findIndex() e uma função de seta para encontrar o 
    índice do primeiro registro de medição em que o nível do rio seja superior a 4 metros.
10) Use o método .filter() e uma função de seta para criar uma nova matriz que 
    contém apenas os registros de medição em que o nível do rio seja superior a 3,5 metros.
*/


