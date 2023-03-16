/*
Crie uma função "getRandomNumber" que retorne um número inteiro aleatório 
entre 0 e 100. Use "Math.random()" para implementar a função.
*/

function getRandomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(getRandomNumber(0, 100))
