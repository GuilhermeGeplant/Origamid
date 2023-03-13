/*
Utilizando a API https://www.themealdb.com/api/json/v1/1/search.php?s=
crie um formulário onde o usuário pode digitar o nome de um prato e uma 
lista de ingredientes e instruções de como fazer o prato são exibidas na página.
*/

const form = document.querySelector('form')
const resultado = document.querySelector('#resultado')

form.addEventListener('submit', e => {
    e.preventDefault()

    const prato = form.elements['prato'].value
    if (prato) {
        buscarReceita(prato)
    }
})

function buscarReceita(prato) {
    resultado.innerHTML = 'Buscando...'

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${prato}`)
        .then(response => response.json())
        .then(data => {
            if (data.meals) {
                const receita = data.meals[0]

                const ingredientes = []
                //20 é o maximo de ingredientes.
                for (let i = 1; i <= 20; i++) {
                    const ingrediente = receita[`strIngredient${i}`]
                    const medida = receita[`strMeasure${i}`]
                    if (ingrediente && medida) {
                        ingredientes.push(`${medida} de ${ingrediente}`)
                    }
                }

                resultado.innerHTML = `
                    <h2>${receita.strMeal}</h2>
                    <img src="${receita.strMealThumb}" alt="${receita.strMeal}">
                    <h3>Ingredientes:</h3>
                    <ul>
                        ${ingredientes.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                    <h3>Instruções:</h3>
                    <p>${receita.strInstructions}</p>
                `
            }
            else {
                resultado.innerHTML = 'Prato não encontrado.'
            }
        })

        .catch(error => {
            resultado.innerHTML = 'Ocorreu um erro na busca da receita.'
            console.error(error)
        })
}

