/*
Utilizando a API https://api.nasa.gov/planetary/apod?api_key={API key}
crie uma página onde é exibida a imagem astronômica do dia e uma descrição da imagem.
*/

//Key API nasa: 7koWGg900RFFJfVVKep0F0MLfFo9zCAdayvHIIUc

const botaoBuscar = document.getElementById('btnBuscar')
const divResultado = document.getElementById('resultado')

const apiKey = '7koWGg900RFFJfVVKep0F0MLfFo9zCAdayvHIIUc'

botaoBuscar.addEventListener('click', (evento) => {
    evento.preventDefault()
    retornoBusca()
})

function retornoBusca() {

    divResultado.innerHTML = ''
    divResultado.innerHTML = 'Carregando...'

    //Esse &lang=pt-BR torna o valores dos atributos do objeto da NASA em pt-br (porém não funcionou)
    //fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&lang=pt-br`)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then(resposta => resposta.json())
        //Lembrando que "dados" nada mais é que a resposta em formato JSON
        .then(dados => {
            const data = dados.date
            const explicacao = dados.explanation
            const hdurl = dados.hdurl
            const tipoMidia = dados.media_type
            const versaoServico = dados.service_version
            const titulo = dados.title
            const url = dados.url

            divResultado.innerHTML = `
                <p>Data: ${data}</p>
                <p>Explicacao: ${explicacao}</p>
                <img src="${hdurl}">
                <h3>Imagem em HD</h3><br>
                <p>Tipo de Midia: ${tipoMidia}</p>
                <p>Versão do Serviço: ${versaoServico}</p>
                <p>Título: ${titulo}</p>
                <p>URL da imagem: ${url}</p>
            `
        })
        .catch(error => {
            console.error('Ocorreu um erro ao buscar os dados:', error)
            divResultado.innerHTML = 'Ocorreu um erro ao buscar os dados. Tente novamente mais tarde.'
        })
}
