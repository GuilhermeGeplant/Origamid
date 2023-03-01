// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    //Método
    andar() {
        console.log(this.nome + ' andou')
    }
}

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade

    //Método
    this.andar = () => {
        console.log(nome + ' andou')
    }
}

//-----------------------------------------------------------------------------------

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa('João', 20)
console.log(joao) //Saída: Pessoa {nome: 'João', idade: 20, andar: ƒ}

const maria = new Pessoa('Maria', 25)
console.log(maria) //Saída: Pessoa {nome: 'Maria', idade: 25, andar: ƒ}

const bruno = new Pessoa('Bruno', 15)
console.log(bruno) //Saída: Pessoa {nome: 'Bruno', idade: 15, andar: ƒ}

//-----------------------------------------------------------------------------------

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

/*Lebrmando que o "seletor" é o elemento que queremos pegar do html
O "addClass" serve para adicionar uma nova "classe" a todos os elementos
que selecionamos. Uma "classe" é como um apelido que damos para os 
elementos, que pode ser usado para estilizá-los ou identificá-los 
no nosso código. Então, por exemplo, se selecionamos três botões 
com o seletor ".botao", podemos usar o "addClass" para adicionar a classe 
"vermelho" a todos eles, o que fará com que todos fiquem com um fundo vermelho, por exemplo.
*/
function Dom3(seletor) {
    const elementList = document.querySelectorAll(seletor)
    //Métodos
    this.addClass = (classe) => {
        elementList.forEach((elemento) => {
            elemento.classList.add(classe)
        })
    }
    this.removeClass = (classe) => {
        elementList.forEach((elemento) => {
            elemento.classList.remove(classe)
        })
    }
}

const listaItens = new Dom3('li')
const ul = new Dom3('ul')

//listaItens.addClass('ativar')
//ul.addClass('ativo')
