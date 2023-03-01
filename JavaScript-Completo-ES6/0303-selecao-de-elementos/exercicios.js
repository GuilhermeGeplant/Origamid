//Retorne no console todas as imagens do site
const img = document.querySelectorAll('img')
console.log(img)

//-----------------------------------------------------------------------------

//Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagensAnimais)

//-----------------------------------------------------------------------------

//Selecione todos os links interno (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]')
console.log(linkInterno)

//-----------------------------------------------------------------------------

//Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2')
console.log(h2Animais)

//-----------------------------------------------------------------------------

//Selecione o último p do site
const paragrafos = document.querySelectorAll('p')

//É uma array like ou seja um array que NÃO É um array
console.log(paragrafos[paragrafos.length - 1]) // -1 porque o length vai conta a posição 0, então remove um indice
