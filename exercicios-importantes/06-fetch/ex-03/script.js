/*
Utilizando a API https://restcountries.com/v3/all
crie um formulário onde o usuário pode digitar o nome de um país
e as informações sobre o país (nome, capital, população, idiomas, bandeira) 
são retornado ao clicar em buscar.
*/

//Passando os elementos HTML para constantes
const campoPais = document.getElementById('buscarPais')
const botaoBuscar = document.getElementById('btnBuscar')
const divResposta = document.querySelector('.resposta')

//Adicionando o evento de click ao botaoBuscar, que acessa a função trazerCidade
botaoBuscar.addEventListener('click', trazerCidade)

function trazerCidade() {
    //fetch traz a URL da api, com o valor que está no input campoPais
    fetch(`https://restcountries.com/v3/name/${campoPais.value}`)
        .then(r => r.json()) //então monte uma resposta em formato .json()
        .then(dados => { //recebe o objeto JavaScript convertido em JSON como parâmetro
            const country = dados[0] //armazena o primeiro país retornado na resposta da API.
            const nome = country.name.common //armazena o nome comum do país.
            const capital = country.capital?.[0] //armazena a capital do país, mas caso não tenha capital, a variável receberá o valor "N/A".
            const populacao = country.population //armazena a população do país.

            //const idiomas armazena os idiomas falados no país em uma string separada por vírgulas.
            const idiomas = Object.values(country.languages).join(', ')
            //armazena a URL da imagem da bandeira do país em formato SVG, (mas não deu certo)
            const bandeira = country.flags.jpeg

            //Template de string que vai substituir os elementos do HTML
            //${capital || 'N/A'} caso o país não tenha capital o retorno vai ser N/A
            //.toLocaleString() método de objetos numéricos em JavaScript que converte o valor numérico em uma string
            divResposta.innerHTML = `
                <h2>${nome}</h2>
                <p><strong>Capital:</strong> ${capital || 'N/A'}</p>
                <p><strong>População:</strong> ${populacao.toLocaleString()}</p>
                <p><strong>Idiomas:</strong> ${idiomas}</p>
                <img src="${bandeira}" alt="${nome} flag">
            `
        })
}
