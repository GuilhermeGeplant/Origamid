//Selecione cada curso e retorne um array
//com objetos contendo o título, descricao,
//aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')
arrayCrusos = Array.from(cursos)

console.log(arrayCrusos)

const objetosCurso = arrayCrusos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    const aulas = curso.querySelector('.aulas').innerText
    const horas = curso.querySelector('.horas').innerText
    return {
        //titulo: titulo porderia ser dessa forma de chave e valor porém como os nomes são iguais apenas declare o titulo
        titulo,
        descricao,
        aulas,
        horas
    }
})
/*
Esses valores é o que está nos elementos do HTML.
(3) [{…}, {…}, {…}]
0: 
aulas: "80"
descricao: "Este curso é para quem deseja entrar ou já está no mercado de criação de websites."
horas: "22"
titulo: "Web Design Completo"
[[Prototype]]: Object
1: {titulo: 'WordPress Como CMS', descricao: 'No curso de WordPress Como CMS, você aprende do ze…lmente gerenciável com a plataforma do WordPress.', aulas: '46', horas: '9'}
2: {titulo: 'UI Design Avançado', descricao: 'Este é um curso avançado de User Interface Design.', aulas: '55', horas: '15'}
length: 3
*/

console.log(objetosCurso)

//---------------------------------------------------------------------------------------------------------

//Retorne uma lista com os
//números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33]
const maioresQue100 = numeros.filter(n => n > 100)

console.log(maioresQue100) //(3) [333, 122, 322]

//---------------------------------------------------------------------------------------------------------

//Verifique se Baixo faz parte
//da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some((item) => {
    return item === 'Baixo'
})
console.log(possuiBaixo) //true

//Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    }
]

const valorTotal = compras.reduce((acumulador, item) => {
    const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.')

    return acumulador + precoLimpo
}, 0)

console.log(valorTotal)