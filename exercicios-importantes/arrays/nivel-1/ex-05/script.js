/*
1) Considere um array com as temperaturas registradas 
   durante uma semana em uma determinada região:

   const temperaturas = [28, 31, 29, 26, 30, 27, 32]

a) Use a função .sort() para classificar as temperaturas em ordem crescente.
b) Use a função .sort() para classificar as temperaturas em ordem decrescente.
c) Qual a temperatura mais alta registrada durante a semana?
d) Qual a temperatura mais baixa registrada durante a semana?
e) Qual a média de temperatura registrada durante a semana?
*/

const temperaturas = [28, 31, 29, 26, 30, 27, 32]

temperaturas.sort((a, b) => a - b)
console.log(`ordem crescente: ${temperaturas}`)
//ordem crescente: 26,27,28,29,30,31,32

temperaturas.sort((a, b) => b - a)
console.log(`ordem decrescente: ${temperaturas}`)
//ordem decrescente: 32,31,30,29,28,27,26

temperaturas.sort((a, b) => b - a)
console.log(`temperatura mais alta ${temperaturas[0]}`)
//temperatura mais alta 32

temperaturas.sort((a, b) => a - b)
console.log(`temperatura mais baixa ${temperaturas[0]}`)
//temperatura mais baixa 26

const mediaTemperaturas = temperaturas.reduce((a, b) => a + b) / temperaturas.length
console.log(`média de temperatura registrada durante a semana: ${mediaTemperaturas}`)
//média de temperatura registrada durante a semana: 29