/*
Crie uma função "getUserData" que receba um ID de usuário e 
retorne uma promessa que será resolvida com os dados do usuário 
correspondente. Use "async/await" para tornar a função assíncrona.
*/

async function getUserData() {
    try {
        const response = await fetch('./user.json') //espere/await a promessa/fetch
        const userData = await response.json() //espesre/await a resposta em json()
        console.log(userData)
    }
    catch (error) {
        console.error(`Erro ao obter os dados do usuário: ${error.message}`)
    }
}
