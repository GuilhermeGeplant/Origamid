/*
Crie uma função "getUserDataWithRetry" que receba um ID de usuário e 
tente obter os dados do usuário correspondente. Se a solicitação falhar, 
tente novamente três vezes com um atraso crescente entre as tentativas. 
Use "async/await" e "delay" para implementar a função.
*/

const delay = (delayTime) => new Promise((resolve) => setTimeout(resolve, delayTime))

async function getUserDataWithRetry(userId) {
    const maxTentativas = 3
    const delayBase = 1000 // atraso base em ms

    for (let i = 0; i < maxTentativas; i++) {
        try {
            const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            const dadosUser = await resposta.json()
            return dadosUser
        }
        catch (error) {
            console.error(`Erro ao obter os dados do usuário, tentando novamente em ${delayBase * (i + 1)} ms:`, error)
            await delay(delayBase * (i + 1))
        }
    }

    // se todas as tentativas falharem, retorne null ou um objeto vazio
    return null
}

console.log(getUserDataWithRetry(1))