/*
Utilizando a API https://api.pokemontcg.io/v2/cards?q=name:
crie uma página onde o usuário pode digitar o nome de um 
pokemon e a imagem do pokemon e seu tipo são exibidos na página.

chave da API: 9328438c-36f2-4339-b790-52a87cfc285d
*/

const form = document.querySelector('form')
const searchInput = document.getElementById('search-input')
const resultDiv = document.getElementById('result')

/*
submit do formulário. Quando o usuário clica no botão de enviar, este evento é acionado.
preventDefault() para impedir que o formulário envie uma solicitação HTTP e recarregue a página.
*/
form.addEventListener('submit', (event) => {
    event.preventDefault()
    //---------------------------------------------------------------------------------------------
    /*
    Esta linha obtém o valor do campo de entrada de texto e remove os espaços em branco do 
    início e do fim usando o método trim(). O valor é armazenado na variável searchTerm.
    */
    const searchTerm = searchInput.value.trim()
    //---------------------------------------------------------------------------------------------
    /*
    Esta verificação é feita para garantir que o usuário tenha digitado um nome de Pokémon válido. 
    Se o campo de entrada de texto estiver vazio, exibimos uma mensagem no elemento resultDiv e saímos da função usando return.
    */
    if (searchTerm === '') {
        resultDiv.innerHTML = 'Por favor, digite o nome de um Pokémon.'
        return
    }
    //---------------------------------------------------------------------------------------------
    /*
    Se o usuário digitou um nome de Pokémon válido, definimos o conteúdo do elemento resultDiv como "Carregando...". 
    Isso é exibido na página enquanto a solicitação HTTP está sendo feita.
    */
    resultDiv.innerHTML = 'Carregando...'
    //---------------------------------------------------------------------------------------------
    /*
    Aqui, estamos usando a função fetch para fazer uma solicitação GET para a API do Pokémon TCG com o termo de pesquisa do usuário como parâmetro. 
    Também estamos enviando nossa chave de API como um cabeçalho HTTP usando a opção headers.
    */
    fetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchTerm}`, {
        headers: {
            'X-Api-Key': '9328438c-36f2-4339-b790-52a87cfc285d'
        }
    })
        //---------------------------------------------------------------------------------------------
        /*
        Depois que a resposta HTTP é recebida, estamos chamando a função json() no objeto response para extrair os dados JSON da resposta.
        */
        .then(response => response.json())
        //---------------------------------------------------------------------------------------------
        /*
        Aqui, estamos passando a função de retorno de chamada que será executada quando a resposta JSON estiver pronta. 
        Esta função recebe os dados JSON como parâmetro e é definida como uma função anônima.
        */
        .then(data => {
            //---------------------------------------------------------------------------------------------
            if (data.data.length === 0) {
                resultDiv.innerHTML = `Nenhum Pokémon encontrado com o nome ${searchTerm}.`
            }
            /*
            Aqui, estamos verificando se a matriz de dados
            JSON retornada contém algum resultado ou não. Se a matriz de dados retornada for vazia, 
            exibimos uma mensagem de erro informando que nenhum Pokémon foi encontrado com o 
            nome pesquisado. Caso contrário, continuamos a exibir os resultados.
            */
            //---------------------------------------------------------------------------------------------
            /*
            Aqui, estamos acessando os dados do primeiro Pokémon retornado na matriz data. Armazenamos a URL da imagem do Pokémon na variável imageUrl e o 
            tipo do Pokémon na variável type. Estamos assumindo que o primeiro Pokémon retornado é o que o usuário estava procurando.
            */
            else {
                const card = data.data[0]
                const imageUrl = card.images.small
                const types = card.types.join(', ')
                //---------------------------------------------------------------------------------------------
                /*
                Por fim, estamos definindo o conteúdo do elemento resultDiv com uma imagem do Pokémon e seu tipo. 
                Usamos interpolação de strings para substituir as 
                variáveis imageUrl, searchTerm e type em nosso modelo de string HTML. 
                O alt da imagem é definido como o termo de pesquisa do usuário, para fins de acessibilidade.
                */
                resultDiv.innerHTML = `<h2>${card.name}</h2><img src="${imageUrl}"><p>Tipo: ${types}</p>`
            }
        })
        .catch(error => {
            console.error(error)
            resultDiv.innerHTML = 'Ocorreu um erro ao carregar o Pokémon.'
        })
})
