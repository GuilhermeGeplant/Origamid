const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.scrollHeight
const animaisTop = listaAnimais.offsetTop
console.log(height)
console.log(animaisTop)

const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetLeft

//Retorna todas as dimensões do elemento em questão, e como é um método é possível chamar apenas 1 propriedade
const rect = primeiroh2.getBoundingClientRect()

console.log(rect)
console.log(rect.top) //Apenas uma propriedade