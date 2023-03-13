/*
Utilizando a API https://dog.ceo/api/breeds/image/random
crie uma página onde ao clicar em um botão, 
uma imagem de um cachorro aleatório é exibida na página.
*/

const btnBotao = document.getElementById('botaoBuscar')
const imagem = document.getElementById('imagem')


btnBotao.addEventListener('click', buscarCachorro)

function buscarCachorro() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            imagem.src = data.message
        })
}