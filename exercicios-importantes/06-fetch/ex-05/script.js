/*
Utilizando a API https://www.thecocktaildb.com/api/json/v1/1/random.php
crie um formulário onde o usuário pode digitar um ingrediente e um
drink aleatório que pode ser feito com aquele ingrediente é retornado ao clicar em buscar.
*/


const btnBotao = document.getElementById('botaoBuscar')
const ingredient = document.getElementById('ingredient')

btnBotao.addEventListener('click', buscarDrink)

function buscarDrink() {

    // Faz uma requisição para a API do The Cocktail DB com o ingrediente digitado pelo usuário como parâmetro
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient.value}`)
        .then(resposta => resposta.json())
        .then(data => {
            // Verifica se a resposta da API é válida
            if (data.drinks) {
                /*Seleciona um drink aleatório da lista de drinks retornados pela API
                Se a lista de drinks retornados pela API é válida (ou seja, contém pelo menos um drink), 
                um drink aleatório é selecionado a partir da lista usando o método Math.random() e 
                a função Math.floor() para arredondar o número gerado para o inteiro mais próximo.*/
                const randomDrink = data.drinks[Math.floor(Math.random() * data.drinks.length)]

                // Faz uma nova requisição para obter as informações do drink aleatório selecionado
                fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${randomDrink.idDrink}`)
                    .then(resposta => resposta.json())
                    .then(data => {
                        // Exibe as informações do drink aleatório na página
                        const drinkInfo = document.getElementById('drink-info')
                        drinkInfo.innerHTML = `
                <h2>${data.drinks[0].strDrink}</h2>
                <img src="${data.drinks[0].strDrinkThumb}" alt="${data.drinks[0].strDrink}">
                <p>Ingredientes:</p>
                <ul>
                  ${getIngredientes(data.drinks[0])}
                </ul>
                <p>Modo de Preparo:</p>
                <p>${data.drinks[0].strInstructions}</p>
              `
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
            else {
                // Exibe uma mensagem de erro caso não haja drinks que contenham o ingrediente digitado pelo usuário
                const drinkInfo = document.getElementById('drink-info')
                drinkInfo.innerHTML = '<p>Não foi possível encontrar um drink que contenha esse ingrediente. Tente novamente com outro ingrediente.</p>'
            }
        })
        .catch(error => {
            console.error(error)
        })
}

function getIngredientes(drink) {
    let ingredientes = ''
    // Cria uma lista de ingredientes do drink
    for (let i = 1; i <= 15; i++) {
        if (drink[`strIngredient${i}`]) {
            ingredientes += `<li>${drink[`strIngredient${i}`]} - ${drink[`strMeasure${i}`]}</li>`
        }
    }
    return ingredientes
}
