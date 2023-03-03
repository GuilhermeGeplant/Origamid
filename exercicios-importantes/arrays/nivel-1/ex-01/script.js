/*
1) Crie um array chamado temperaturas que contenha as temperaturas registradas em uma cidade ao longo de uma semana.

2) Utilizando o método .sort(), 
   ordene as temperaturas em ordem crescente e armazene o resultado em um novo array chamado temperaturasOrdenadas.

3) ordenar as temperaturas em ordem decrescente e armazene o resultado em um novo array chamado temperaturasDecrescente.

4) Imprima no console a temperatura mais alta registrada na semana (que deve estar no início do array temperaturasDecrescente) 
   e a temperatura mais baixa registrada na semana (que deve estar no final do array temperaturasDecrescente).
*/

const temperaturas = [28, 29, 35, 30, 32, 21, 26]

//.slice vai clonar o array temperaturas, e o sort vai ordenar do menor para o maior.
const temperaturasOrdenadas = temperaturas.slice().sort()

//.slice vai clonar o array temperaturas, e o sort passando os parâmetros (a, b) e dizendo do maior para o menor => b - a)
const temperaturasDecrescente = temperaturas.slice().sort((a, b) => b - a)

console.log(`A temperatura mais alta é de: ${temperaturasDecrescente[0]}`) // A temperatura mais alta é de: 35

//O porque do .length - 1, se um array tem 5 elementos, seu tamanho é 5 e o índice do último elemento é 4
console.log(`A temperatura mais baixa é de: ${temperaturasDecrescente[temperaturasDecrescente.length - 1]}`) //A temperatura mais baixa é de: 21

console.log(temperaturas) // [28, 29, 35, 30, 32, 21, 26]
console.log(temperaturasOrdenadas) // [21, 26, 28, 29, 30, 32, 35]
console.log(temperaturasDecrescente) // [35, 32, 30, 29, 28, 26, 21]
