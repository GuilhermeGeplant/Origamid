//--------------------- Objetos ---------------------//

/*
const carro = {
    marca: 'Marca',
    preco: 0,
}

const honda = carro
honda.marca = 'Honda'
honda.preco = 2000

const fiat = carro
fiat.marca = 'Fiat'
fiat.preco = 3000
*/

//--------------------- Constructor Functions ---------------------//

/*
function Carro() {
    this.marca = 'Marca'
    this.preco = 2000
}

const honda = new Carro()
const fiat = new Carro()
fiat.marca = 'Fiat'
*/

//--------------------- new ---------------------//

/*A palavra chave new é responsável por criar um novo objeto
baseado na função que passarmos a frente dela.*/

/*
const honda = new Carro()

// 1 Cria um novo objeto
honda = {}

// 2 Define o portótipo
honda.prototype = Carro.prototype

// 3 Aponta a variável this para o objeto
this = honda

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca'
honda.preco = 0

// 5 Retorna o novo objeto
return honda = {
    marca: 'Marca',
    preco: 0,
}
*/

//--------------------- this ---------------------//

/*O this faz referência ao próprio objeto construído com a
Constructor Function*/

/*
function Carro(marca, precoInicial) {
    const taxa = 1.2
    const precoFinal = precoInicial * taxa
    this.marca = marca
    this.preco = precoFinal
    console.log(this)
}

const honda = new Carro('Honda', 2000)
// Variáveis dentro do Constructor estão "protegidas"
*/

//--------------------- Exemplo Real ---------------------//

/*Quando mudamos a propriedade seletor, o objeto DOM irá passar a
selecionar o novo seletor em seus métodos.*/

const Dom = {
    seletor: 'li',
    element() {
        //Lembrando que o querySelector pega apenas o primeiro elemento
        return document.querySelector(this.seletor)
    },
    ativo() {
        //Vai adicionar a classe ativo na primeira li
        this.element().classList.add('ativo')
    },
}

Dom.ativo() // Adiciona ativo ao li
Dom.seletor = 'ul' //reaproveita o objeto Dom, fazendo o seletor receber a 'ul'
Dom.ativo() // Adiciona ativo ao ul

//--------------------- Lembre-se de usar parâmetros ---------------------//

function Dom2(seletor) {
    const elemento = document.querySelector(seletor)
    this.ativo = function (classe) {
        elemento.classList.add(classe)
    }
}

const lista = new Dom2('ul')
lista.ativo('ativo')

const lastLi = new Dom2('li:last-child')
lastLi.ativo('ativo')


