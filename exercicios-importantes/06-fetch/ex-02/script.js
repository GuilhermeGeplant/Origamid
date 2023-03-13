/*
Utilizando a API https://api.adviceslip.com/advice
retorne um conselho aleatório toda vez que o usuário clicar em "Novo conselho"
*/

//Selecionando o elemento HTML/<input> pelo Id
const botaoConselho = document.getElementById('btnConselho')
//Selecionando o elemento HTML/<div> pela classe
const divResultado = document.querySelector('.resultado')

//Sintaxe: elementoHTML.addEventListener(evento, função)
//Sempre que o usuário clicar no elemento referenciado por botaoConselho, 
//a função buscarConselho será executada.
botaoConselho.addEventListener('click', buscarConselho)

function buscarConselho() {//1. Declaração da função "buscarConselho"
    fetch(`https://api.adviceslip.com/advice`) //2. Ele recebe uma URL como argumento para a API de conselhos aleatórios, é uma função que retorna uma promessa.
        .then(resposta => resposta.text()) /*3. O método then é usado para manipular a resposta da promessa retornada pelo fetch. 
                                            Aqui, a resposta é convertida em texto usando o método text(). Isso é necessário porque a resposta do fetch é uma stream de bytes, e o método text() a converte em uma string.*/
        .then(body => divResultado.innerText = body)//4. ela substitui todo o conteúdo do elemento pelo texto fornecido. 
}

