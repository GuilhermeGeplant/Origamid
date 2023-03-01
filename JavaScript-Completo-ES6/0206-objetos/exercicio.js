//Crie um objeto com os seus dados pessoais
//Deve possui pelo menos duas propriedades nome e sobrenome
dadosPessoais = {
    nome: 'Guilherme',
    sobreNome: 'Bortoletto',
    idade: 30,
    altura: 1.71,
    nomeCompleto: function () {
        return console.log(`${this.nome} ${this.sobreNome}`)
    }
}

console.log(dadosPessoais) //{nome: 'Guilherme', sobreNome: 'Bortoletto', idade: 30, altura: 1.71, nomeCompleto: ƒ}

//------------------------------------------------------------------------

//Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto() //Guilherme Bortoletto

//------------------------------------------------------------------------

//Modifique o valor da propriedade preco para 3000
let carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}

console.log(carro) //{preco: 1000, portas: 4, marca: 'Audi'}
carro.preco = 3000
console.log(carro) //{preco: 3000, portas: 4, marca: 'Audi'}

//------------------------------------------------------------------------

//Crie um objeto de um cachorro que represente um labrador,
//preto com 10 anos, que late ao ver um homem
cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir: function (pessoa) {
        if (pessoa === 'Homem' || pessoa === 'Homem') {
            return console.log('AuAuAuAu')
        }
    }
}

console.log(cachorro) //{raca: 'labrador', cor: 'preto', idade: 10, latir: ƒ}
cachorro.latir('Homem') //AuAuAuAu