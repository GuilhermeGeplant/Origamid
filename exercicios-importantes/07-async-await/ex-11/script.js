/*
Exercício 11 - Consumindo uma API com async/await e headers

Neste exercício, vamos criar uma página que consome a API do The Movie DB e exibe o título dos 10 filmes mais populares.
Além disso, vamos utilizar o conceito de headers para passar a chave de acesso à API.
key: 513863317dbae01d40bff3a230f6bc7e
https://api.themoviedb.org/3/movie/550?api_key=513863317dbae01d40bff3a230f6bc7e
*/

const chaveApi = '513863317dbae01d40bff3a230f6bc7e'

async function receberListaFilmes() {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + chaveApi

    const resposta = await fetch(url) //Espere a promessa que é a URL + chaveApi
    const dados = await resposta.json() //Espere a reposta.json()

    return dados.results //Com a resposta passada pela constante dados, invoca a propriedade .results da API que é onde está a lista de filmes
}

async function exibirFilmes() {
    const filmes = await receberListaFilmes() //Espere a função receberListaFilmes() ser completamente interpretada
    const listaFilmes = document.getElementById('filmes') //Pegando o elemento/<ul> pelo seu id e armazenando em uma constante

    filmes.forEach(filme => { //Para cada filme, em filmes...
        const itemFilme = document.createElement('li') //Constante itemFilme cria um novo elemento HTML do tipo <li>
        itemFilme.textContent = filme.title //é responsável por definir o conteúdo do elemento HTML <li>

        listaFilmes.appendChild(itemFilme) //faz com que o elemento <li> seja adicionado ao final da lista de filmes, exibindo o título do filme na página HTML.
    })
}

exibirFilmes()
