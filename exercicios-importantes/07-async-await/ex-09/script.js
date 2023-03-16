/*
Crie uma função "multiply" que receba dois números e retorne uma promessa 
que será resolvida com o resultado da multiplicação. Use "async/await" 
para tornar a função assíncrona.
*/

async function multiply(num1, num2) {
    const resposta = await fetch(`https://api.mathjs.org/v4/?expr=${num1}*${num2}.`)
    const resultado = await resposta.text()
    return resultado
}

multiply(3, 5)
