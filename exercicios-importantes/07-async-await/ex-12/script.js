/*
Este exercício envolve a utilização da API https://viacep.com.br/ws/${CEP}/json/, 
que retorna informações sobre um endereço a partir de um CEP fornecido.

O objetivo do exercício é criar uma página HTML com um formulário que permita ao usuário inserir um CEP e, 
ao clicar no botão "Buscar", mostrar as informações do endereço correspondente.

Para isso, você pode seguir os seguintes passos:

1) Crie um arquivo HTML com um formulário que contenha um campo de entrada para o CEP e um botão "Buscar".

2) No arquivo JavaScript, crie uma função que será executada quando o formulário for enviado. 
    Essa função deve capturar o valor do campo de entrada do CEP, 
    construir a URL da API com esse valor e fazer uma requisição utilizando o método "fetch".

3) Utilize o método "fetch" para fazer uma requisição para a URL da API e, 
    em seguida, utilize o método "json" para extrair os dados da resposta.

4) Utilize o comando "async/await" para realizar a requisição à API. Dessa forma, 
    é possível aguardar a resposta da API antes de prosseguir com a execução do código.

5) Utilize o comando "try/catch" para tratar erros que possam ocorrer durante a requisição. 
    Dessa forma, é possível exibir mensagens de erro amigáveis para o usuário.

6) Utilize a propriedade "headers" do objeto "Response" para acessar as 
    informações do cabeçalho da resposta da API. 
    Essas informações podem ser úteis para entender melhor a resposta da 
    API e realizar operações adicionais com os dados recebidos.

7) Utilize o método "then" para encadear múltiplas operações na resposta da API. 
    Dessa forma, é possível realizar operações adicionais com os dados recebidos, 
    como exibir as informações do endereço na página HTML.
*/

const formBusca = document.querySelector('#form-busca')
const inputCep = document.querySelector('#cep')
const divEndereco = document.querySelector('#endereco')

formBusca.addEventListener('submit', async (event) => {
    event.preventDefault()

    const cep = inputCep.value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    try {
        const response = await fetch(url)
        const data = await response.json()

        // Verifica se há erro na resposta
        if ('erro' in data) {
            throw new Error('CEP não encontrado.')
        }

        const endereco = `
        Endereço: 
        ${data.logradouro}, 
        ${data.bairro}, 
        ${data.localidade} - 
        ${data.uf}
        `
        divEndereco.textContent = endereco
    }
    catch (error) {
        divEndereco.textContent = error.message
    }
})