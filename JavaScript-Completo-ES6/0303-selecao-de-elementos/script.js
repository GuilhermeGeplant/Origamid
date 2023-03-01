const animais = document.getElementById('animais')
console.log(animais) //<section class="grid-section animais" id="animais">

//Fazendo a mesma coisa que o exemplo acima porém usando o nome da classe do elemento
const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection)

/*
Seletor Geral Único

querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
*/

const animais2 = document.querySelector('.animais') //sintaxe = classe do CSS
const contato = document.querySelector('#contato') //sintaxe = id do CSS
const ultimoItem = document.querySelector('.animais-lista li:last-child') //sintaxe = classe do CSS
const linkCSS = document.querySelector('[href^="https://"]') //sintaxe = seletor especial do CSS
const primeiroUl = document.querySelector('.ul') //sintaxe = classe do CSS

const primeiraLi = document.querySelector('li')
console.log(primeiraLi) //<li>...</li>

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl) //<ul>...</ul>

//OBS: [href^=] esse ^= significa começa como ... caso contrário vai ser necessário colocar EXATAMENTE o caminho
const linksInterno = document.querySelector('[href^="#"]')
console.log(linksInterno) //<a href="#animais">Animais</a>

/*
Seletor Geral Lista

querySelectorAll retorna todos os elementos compatíveis como o seletor CSS em uma NodeList
*/

const gridSection2 = document.querySelectorAll('.grid-section')
const listas = document.querySelectorAll('ul') //sintaxe = ul do elemento/tag html
const titulos = document.querySelectorAll('.titulo')
const fotosAnimais = document.querySelectorAll('.animais-lista img')

//Retorna o segundo elemento
console.log(gridSection2[1])


const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg)
/*Saída:
NodeList(6) [img, img, img, img, img, img]
0
: 
img
1
: 
img
2
: 
img
3
: 
img
4
: 
img
5
: 
img
*/


/********************************* HTMLCollection vs NodeList *********************************/

/*
 resumindo, a diferença entre HTMLCollection e NodeList é que o HTMLCollection é uma lista de elementos 
 HTML organizados um após o outro, enquanto o NodeList é uma lista de nós HTML que podem incluir 
 elementos HTML e outros tipos de nós.
*/

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

//adicionar uma classe para explicar
primeiraUl.classList.add('grid-section')

console.log(gridSectionHTML)
/*
pegou 4 elementos
HTMLCollection(4) [ul.grid-section, section#animais.grid-section.animais, 
    section#faq.grid-section.faq, section#contato.grid-section.contato, 
    animais: section#animais.grid-section.animais, faq: section#faq.grid-section.faq, 
    contato: section#contato.grid-section.contato]
*/

console.log(gridSectionNode)
/*
pegou 3 elementos
NodeList(3) [section#animais.grid-section.animais, section#faq.grid-section.faq, 
    section#contato.grid-section.contato]
*/

//Array que NÃO É um array
gridSectionNode.forEach((item, index) => {
    console.log(item)
})


/*Como antes era um HTML Collection que parece um array 
MAS NÃO É UM ARRAY dessa forma vira realmente um array aceitando os métodos como pop etc.*/
const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach((item) => {
    console.log(item)
})