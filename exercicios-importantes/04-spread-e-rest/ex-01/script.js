/*
Crie uma função chamada soma que recebe um número indeterminado de parâmetros 
e retorna a soma desses números. Use o operador rest para agrupar os parâmetros em um array 
e o operador spread para passar os elementos desse array como argumentos para a função reduce 
que faz a soma.
*/

/*
Explicação
Issa é a sintaxe para algo indeterminado (...), função arrow recebe números indeterminados como parâmetro
.reduce é um método que pode ser aplicado em um array para reduzi-lo a um único valor,
o primeiro parâmetro é o acumulador que no caso é o total, e o segundo parâmetro é o valor atual,
no caso é o parâmetro num, o retorno => é o total + num
*/

const soma = (...numeros) => numeros.reduce((total, num) => total + num)

console.log(soma(2, 4, 6)) // 12
console.log(soma(1, 3, 5, 7, 9)) // 25
