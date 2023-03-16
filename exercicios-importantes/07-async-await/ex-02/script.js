/*
Crie uma função "fetchJson" que receba uma URL e 
retorne uma promessa que será resolvida com os dados JSON obtidos da URL. 
Use "async/await" para tornar a função assíncrona.
*/

const divH2 = document.querySelector('.Nome')

async function fetchJson() {
    try {
        const resposta = await fetch('./user.json')
        const dadosUser = await resposta.json()
        console.log(dadosUser)
        const meuNome = dadosUser.nome
        divH2.innerHTML = `<h2>Nome: ${meuNome}</h2>`
    }
    catch (error) {
        console.error(`Erro ao obter os dados do usuário: ${error.message}`)
    }
}
