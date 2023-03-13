/*
Utilizando a API https://www.boredapi.com/api/activity
crie um botão onde ao clicar é retornado uma atividade 
aleatória que pode ser realizada para combater o tédio.
*/

const botaoBuscar = document.getElementById('btnBuscar')
const divResultado = document.getElementById('resultado')

botaoBuscar.addEventListener('click', (evento) => {
    evento.preventDefault()
    saidaAtividade()
})

function saidaAtividade() {

    divResultado.innerHTML = ''
    divResultado.innerHTML = 'Carregando...'

    fetch(`https://www.boredapi.com/api/activity`)
        .then(resposta => resposta.json())
        .then(dados => {
            const atividade = dados.activity
            const tipo = dados.type
            const participantes = dados.participants
            const preco = dados.price
            const links = dados.link
            const chave = dados.key
            const acessibilidade = dados.accessibility

            const precoFormatado = preco.toFixed(2).replace('.', ',')

            divResultado.innerHTML = `
                <p>Atividade: ${atividade}</p>
                <p>Tipo: ${tipo}</p>
                <p>Participantes: ${participantes}</p>
                <p>Preço: R$${precoFormatado}</p>
                <p>Link: ${links || `Não há links para esse atividade`}</p>
                <p>Chave/código da atividade: ${chave}</p>
                <p>Acessibilidade: ${acessibilidade}</p>
            `
        })
}
