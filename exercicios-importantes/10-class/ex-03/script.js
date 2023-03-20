/*
Você foi contratado para desenvolver um sistema simples para gerenciar a lista de compras de um supermercado. 
O sistema deve permitir ao usuário cadastrar os itens que ele deseja comprar, bem como a quantidade de cada item. 
Além disso, o sistema deve exibir o preço total da lista de compras e permitir ao usuário adicionar ou remover itens.

Para implementar o sistema, você deve seguir as seguintes instruções:

1) Crie uma classe chamada "Item" que tenha as seguintes propriedades:

    - nome (string)
    - quantidade (número)
    - precoUnitario (número)

2) Adicione à classe "Item" um método estático chamado "calcularPrecoTotal" que
    receba um objeto "Item" como parâmetro e retorne o preço total do item,
    calculado como o produto da quantidade pelo preço unitário.

3) Adicione à classe "Item" um getter e um setter para a propriedade "nome".

4) Adicione à classe "Item" um método chamado "adicionarQuantidade" que
    receba uma quantidade de itens como parâmetro e adicione
    essa quantidade à quantidade de itens do objeto.

5) Adicione à classe "Item" um método chamado "removerQuantidade"
    que receba uma quantidade de itens como parâmetro e remova essa
    quantidade da quantidade de itens do objeto. Certifique-se de que a quantidade nunca fique negativa.

6) Crie uma classe chamada "ListaDeCompras" que tenha uma propriedade "itens" que
    seja um array de objetos "Item".

7) Adicione à classe "ListaDeCompras" um método chamado "adicionarItem" que
    receba um objeto "Item" como parâmetro e adicione esse objeto ao array de itens.

8) Adicione à classe "ListaDeCompras" um método chamado "removerItem" que
    receba o índice do item a ser removido como parâmetro e remova esse item do array de itens.

9) Adicione à classe "ListaDeCompras" um método chamado "obterPrecoTotal" que
    retorne a quantidade total a ser gasta na lista de compras.

10) Adicione à classe "ListaDeCompras" um método chamado "adicionarQuantidadeItem" que
    receba o índice do item e a quantidade de itens a ser adicionada como parâmetros e
    adicione essa quantidade de itens ao objeto correspondente no array de itens.

11) Adicione à classe "ListaDeCompras" um método chamado "removerQuantidadeItem" que
    receba o índice do item e a quantidade de itens a ser removida como
    parâmetros e remova essa quantidade de itens do objeto correspondente no array de itens.
    Certifique-se de que a quantidade nunca fique negativa.

12) Crie objetos da classe "Item" e adicione-os à classe "ListaDeCompras" usando o método "adicionarItem".

13) Chame os métodos e getters/setters definidos na classe "Item" e na classe "ListaDeCompras"
    para verificar se o sistema está funcionando corretamente.
*/

class Item {
    constructor(nome, quantidade, precoUnitario) {
        this._nome = nome
        this._quantidade = quantidade
        this._precoUnitario = precoUnitario
    }

    /*
    Sobre static método e método:
    A principal diferença entre um método comum e um método estático (static) é que o método comum é executado em uma instância da classe, 
    enquanto o método estático é executado diretamente na classe, sem precisar criar uma instância.
    */
    static calcularPrecoTotal() {
        return Item._quantidade * Item._precoUnitario
    }

    adicionarQuantidade(qntValor) {
        this._quantidade += qntValor
    }

    removerQuantidade(qntValor) {
        this._quantidade -= qntValor
    }

    get nome() {
        return this._nome
    }
    set nome(valor) {
        this._nome = valor
    }
}

class ListaDeCompras {
    constructor() {
        this._itens = []
    }

    adicionarItem(item) {
        this._itens.push(item)
    }
    removerItem(indice) {
        this._itens.splice(indice, 1)
    }

    obterPrecoTotal() {
        let precoTotal = 0
        this._itens.forEach(item => {
            precoTotal += item._precoUnitario
        })
        return precoTotal
    }

    adicionarQuantidadeItem(indice, qnt) {
        return this._itens[indice]._quantidade += qnt
    }
    removerQuantidadeItem(indice, qnt) {
        this._itens[indice]._quantidade -= qnt
        if (this._itens[indice]._quantidade < 0) {
            return this._itens[indice]._quantidade = 0
        }
        else {
            return this._itens[indice]._quantidade
        }
    }
}

//Questão (1)
const item1 = new Item('Caneta', 10, 1.50)
console.log(item1) //Item { _nome: 'Caneta', _quantidade: 10, _precoUnitario: 1.5 }

//Questão (2)
//Para chamar o método calcularPrecoTotal, você precisa passar uma instância do objeto Item como argumento ou seja, no caso item1. 
//Além disso, como o método é estático, você não precisa criar uma instância do objeto para chamar o método, pode chamar o método diretamente na classe
const precoTotal1 = Item.calcularPrecoTotal(item1)
console.log(precoTotal1) //15

//Questão (3)
console.log(item1.nome) //Caneta
item1.nome = 'Caderno'
console.log(item1.nome) //Caderno

//Questão (4)
item1.adicionarQuantidade(20)
console.log(item1) //Item { _nome: 'Caderno', _quantidade: 30, _precoUnitario: 1.5 }

//Questão (5)
item1.removerQuantidade(5)
console.log(item1) //Item { _nome: 'Caderno', _quantidade: 25, _precoUnitario: 1.5 }

//Questão (6, 7)
const item2 = new Item('Borracha', 2, 1.80)
const item3 = new Item('Lapiseira', 3, 8.25)
const lista1 = new ListaDeCompras(item1)
lista1.adicionarItem(item2)
lista1.adicionarItem(item3)
console.log(lista1._itens)
/*
[
  Item { _nome: 'Borracha', _quantidade: 2, _precoUnitario: 1.8 },
  Item { _nome: 'Lapizeira', _quantidade: 3, _precoUnitario: 8.25 }
]
*/

//Questão (8)
lista1.removerItem(0)
console.log(lista1._itens) //[ Item { _nome: 'Lapiseira', _quantidade: 3, _precoUnitario: 8.25 } ]

//Questão (9)
const item4 = new Item('Lápis', 5, 4.90)
const item5 = new Item('Apontador', 2, 3.75)
const item6 = new Item('Marca-texto', 3, 9.25)
lista1.adicionarItem(item4)
lista1.adicionarItem(item5)
lista1.adicionarItem(item6)
console.log(lista1.obterPrecoTotal()) //26.15

//Questão (10)
lista1.adicionarQuantidadeItem(1, 20)
console.log(lista1._itens)
/*
[
  Item { _nome: 'Lapiseira', _quantidade: 3, _precoUnitario: 8.25 },
  Item { _nome: 'Lápis', _quantidade: 25, _precoUnitario: 4.9 },
  Item { _nome: 'Apontador', _quantidade: 2, _precoUnitario: 3.75 },
  Item { _nome: 'Marca-texto', _quantidade: 3, _precoUnitario: 9.25 }
]
*/

//Questão (11)
lista1.removerQuantidadeItem(1, 20)
console.log(lista1._itens)
/*
[
  Item { _nome: 'Lapiseira', _quantidade: 3, _precoUnitario: 8.25 },
  Item { _nome: 'Lápis', _quantidade: 5, _precoUnitario: 4.9 },
  Item { _nome: 'Apontador', _quantidade: 2, _precoUnitario: 3.75 },
  Item { _nome: 'Marca-texto', _quantidade: 3, _precoUnitario: 9.25 }
]
*/

//Questão (12)
const item7 = new Item('Corretivo', 3, 9.90)
const item8 = new Item('Cola escolar', 2, 15.90)
const item9 = new Item('Tesoura', 1, 12.90)

const lista2 = new ListaDeCompras()
lista2.adicionarItem(item7)
lista2.adicionarItem(item8)
lista2.adicionarItem(item9)
console.log(lista2._itens)
/*
[
  Item { _nome: 'Corretivo', _quantidade: 3, _precoUnitario: 9.9 },
  Item { _nome: 'Cola escolar', _quantidade: 2, _precoUnitario: 15.9 },
  Item { _nome: 'Tesoura', _quantidade: 1, _precoUnitario: 12.9 }
]
*/

//Questão (13)
console.log(item9.nome) //Tesoura
item9.nome = 'Régua'
console.log(item9.nome) //Régua

console.log(lista2._itens)
/*
[
  Item { _nome: 'Corretivo', _quantidade: 3, _precoUnitario: 9.9 },
  Item { _nome: 'Cola escolar', _quantidade: 2, _precoUnitario: 15.9 },
  Item { _nome: 'Régua', _quantidade: 1, _precoUnitario: 12.9 }
]
*/