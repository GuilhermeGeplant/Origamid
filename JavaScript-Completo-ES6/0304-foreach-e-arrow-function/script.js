const imgs = document.querySelectorAll('img')

imgs.forEach(item => {
    console.log(item)
})

/*
forEach e Array

forEach é um método de Array. alguns objetos array-like possuem este método.
Caso não possua, o ideal é transformá-los em uma array
*/

const titulos = document.getElementsByClassName('titulo')
//Caso não tivesse feito essa transformação, não ia dar certo, não ia ter a saída de dados.
const titulosArray = Array.from(titulos) //TRANSFORMOU EM UM ARRAY, ARRAY MESMO !

console.log(titulos)
/*é um like Array ou seja NÃO É UM ARRAY DE VERDADE
HTMLCollection(3) [h1.titulo, h1.titulo, h1.titulo]
0
: 
h1.titulo
1
: 
h1.titulo
2
: 
h1.titulo
length
: 
3
*/
console.log(titulosArray)
/*Esse sim É UM ARRAY DE VERDADE
(3) [h1.titulo, h1.titulo, h1.titulo]
0
: 
h1.titulo
1
: 
h1.titulo
2
: 
h1.titulo
length
: 
3
*/

//imprimindo os titulos um a um usando o forEach
titulosArray.forEach(item => {
    console.log(item)
})


