//Mostre no console cada parágrafo do site
const Paragrafos = document.querySelectorAll('p')
const cadaParagrafo = Array.from(Paragrafos) //Não precisava ter transformado em ARRAY DE VERDADE

console.log(cadaParagrafo)
//Saída: (25) [p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p]

//----------------------------------------------------------------------------------------

//Mostre o texto dos parágrafos no console
const textoParagrafo = document.querySelectorAll('p')
textoParagrafo.forEach((texto) => {
    console.log(texto) //A saída de dados é muito longa, mas deu certo
})

textoParagrafo.forEach((texto) => {
    console.log(texto.innerText) //Essa propriedade mostra realmente apenas o texto
})

//----------------------------------------------------------------------------------------

//Como corrigir os erros abaixo:
//const imgs = document.querySelectorAll('img')

//imgs.forEach(item, index =>{
//  console.log(item, index)
//})
const imgs2 = document.querySelectorAll('img')

imgs2.forEach((item, index) => {
    console.log(item, index)
})

//let i = 0
//imgs.forEach( => {
//  console.log(i++)
//})
let i = 0
imgs2.forEach(() => {
    console.log(i++)
})

//imgs.forEach(() => i++)
imgs2.forEach(() => {
    console.log(i++) //não tem erro porém sem o console não teria a saída no console.
})
