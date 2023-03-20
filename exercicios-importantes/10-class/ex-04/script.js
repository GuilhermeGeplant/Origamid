/* 
    Exercício de Reflorestamento
    Crie uma classe chamada "Arvore" que tenha as seguintes propriedades:
    - altura: um número que representa a altura da árvore em metros
    - especie: uma string que representa a espécie da árvore

    Crie um método chamado "crescer" que aumenta a altura da árvore em 1 metro
    e exibe uma mensagem no console informando a nova altura da árvore.

    Crie uma subclasse chamada "Muda" que herda as propriedades e métodos da classe "Arvore".
    A classe "Muda" também deve ter uma propriedade adicional:
    - idade: um número que representa a idade da muda em meses

    Sobrescreva o método "crescer" na classe "Muda" para aumentar a altura da muda em 0,5 metros em vez de 1 metro.

    Crie um objeto da classe "Arvore" e chame o método "crescer" algumas vezes para testar.
    Crie um objeto da classe "Muda", defina sua altura inicial como 0,5 metros e chame o método "crescer" algumas vezes para testar.
*/

class Arvore {
    constructor(altura, especie) {
        this._altura = altura
        this._especie = especie
    }

    crescer() {
        return this._altura += 1.0;
    }
}

class Muda extends Arvore {
    constructor(altura, especie, idade) {
        super(altura, especie)
        this._idade = idade
    }
    crescer() {
        return this._altura += 0.5;
    }
}

const arvore1 = new Arvore(2.8, 'Cedro')
const arvore2 = new Arvore(5.3, 'Jatobá')
const arvore3 = new Arvore(4.8, 'Juazeiro')

console.log(arvore1) //Arvore { _altura: 2.8, _especie: 'Cedro' }
console.log(arvore1.crescer()) //3.8
console.log(arvore1) //Arvore { _altura: 3.8, _especie: 'Cedro' }

const muda1 = new Muda(0.3, 'Pinus', 5)
console.log(muda1) //Muda { _altura: 0.3, _especie: 'Pinus', _idade: 5 }
muda1.crescer()
muda1.crescer()
muda1.crescer()
console.log(muda1) //Muda { _altura: 1.8, _especie: 'Pinus', _idade: 5 }