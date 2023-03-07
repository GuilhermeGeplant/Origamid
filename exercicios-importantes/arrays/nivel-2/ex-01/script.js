/*
1) Crie um array chamado "numeros" com os seguintes números: 
    25, 12, 48, 37, 6, 92, 33, 18, 75, 51.
2) Adicione o número 11 no início do array utilizando o método unshift().
3) Adicione o número 99 no final do array utilizando o método push().
4) Remova o primeiro número do array utilizando o método shift().
5) Remova o último número do array utilizando o método pop().
6) Inverta a ordem dos números no array utilizando o método reverse().
7) Remova os números entre as posições 4 e 6 do array 
    (inclusive) utilizando o método splice().
8) Copie os três primeiros números do array para as 
    posições 6, 7 e 8 utilizando o método copyWithin().
9) Preencha as posições 2 a 4 do array com o número 42 utilizando o método fill().
10) Crie um novo array chamado "outrosNumeros" com os números 14, 27, 63, 41, 89.
11) Concatene o array "outrosNumeros" ao final do 
    array "numeros" utilizando o método concat().
12) Verifique se o número 33 está presente no 
    array "numeros" utilizando o método includes().
13) Encontre o índice da primeira ocorrência do 
    número 48 no array "numeros" utilizando o método indexOf().
14) Encontre o índice da última ocorrência do número 18 no 
    array "numeros" utilizando o método lastIndexOf().
15) Crie uma string chamada "numerosString" que contenha todos os 
    números do array "numeros" separados por vírgula e espaço utilizando o método join().
16) Crie um novo array chamado "parteNumeros" que contenha os 
    números entre as posições 3 e 7 do array "numeros" utilizando o método slice().
*/

const numeros = [25, 12, 48, 37, 6, 92, 33, 18, 75, 51]
console.log(`Questão 1): ${numeros}`)
//Saída: Questão 1): 25,12,48,37,6,92,33,18,75,51

console.log(`Questão 14): ${numeros.lastIndexOf(18)}`)

numeros.unshift(11)
console.log(`Questão 2): ${numeros}`)
//Saída: Questão 2): 11,25,12,48,37,6,92,33,18,75,51

numeros.push(99)
console.log(`Questão 3): ${numeros}`)
//Saída: Questão 3): 11,25,12,48,37,6,92,33,18,75,51,99

numeros.shift()
console.log(`Questão 4): ${numeros}`)
//Saída: Questão 4): 25,12,48,37,6,92,33,18,75,51,99

numeros.pop()
console.log(`Questão 5): ${numeros}`)
//Saída: Questão 5): 25,12,48,37,6,92,33,18,75,51

numeros.reverse()
console.log(`Questão 6): ${numeros}`)
//Saída: Questão 6): 51,75,18,33,92,6,37,48,12,25

console.log(`Questão 7): ${numeros.splice(4, 3)}`)
//Saída: Questão 7): 92,6,37

numeros.copyWithin(6, 0, 3)
console.log(`Questão 8): ${numeros}`)
//Saída: Questão 8): 51,75,18,33,48,12,51

numeros.fill(42, 2, 5)
console.log(`Questão 9): ${numeros}`)
//Saída: Questão 9): 51,75,42,42,42,12,51

const outrosNumeros = [14, 27, 63, 41, 89.]
console.log(`Questão 10): ${outrosNumeros}`)
//Saída: 14,27,63,41,89

const concatene = numeros.concat(outrosNumeros)
console.log(`Questão 11): ${concatene}`)
//Saída: 51,75,42,42,42,12,51,14,27,63,41,89

console.log(`Questão 12): ${numeros.includes(33)}`)
//Saída: Questão 12): false

console.log(`Questão 13): ${numeros.indexOf(48)}`)
//Saída: Questão 13): -1

console.log(`Questão 14): ${numeros.lastIndexOf(18)}`)
//Saída: Questão 14): -1

const numerosString = numeros.join(', ');
console.log(`Questão 15): ${numerosString}`)
//Saída: Questão 15): 51, 75, 42, 42, 42, 12, 51

const parteNumeros = numeros.slice(3, 8);
console.log(`Questão 16): ${parteNumeros}`)
//Saída: 42,42,12,51

//Obs, como em nenhum momento foi falado nos exercícios para declarar novamente a array numeros,
//as alterações afetaram umas as outras.