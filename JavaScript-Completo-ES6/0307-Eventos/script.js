/*
addEventListener

Adiciona uma função ao elemento, esta chamada de callback
que será ativada assim que certo evento ocorrer neste elemento
*/

const img = document.querySelector('img')

//elemento.addEventListener(event, callback, options)
img.addEventListener('click', function () {
    console.log('Clicou')
})
//obs: o terceiro parâmetro é opcional

/*
Callback

É boa prática separar a função de callback do addEventListener, ou
seja, declarar uma função ao invés de passar diretamente uma função anônima
*/

const img2 = document.querySelector('img')
function callback() {
    console.log('Clicou')
}

img2.addEventListener('click', callback)
img2.addEventListener('click', callback()) //undefined
img2.addEventListener('click', function () {
    console.log('Clicou')
})
img2.addEventListener('click', () => {
    console.log('Clicou')
})

/*
Event

O primeiro parâmetro do callback é referente ao evento que ocorreu
*/

const img3 = document.querySelector('img')

function callback(event) {
    console.log(event)
}

img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista')
function callbackLista(event) {
    console.log(event.currentTarget)
    console.log(event.target)
}
//animaisLista é o currentTarget, callbackLista é o target
animaisLista.addEventListener('click', callbackLista)