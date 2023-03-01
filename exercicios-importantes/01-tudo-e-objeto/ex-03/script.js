/*
Crie um objeto "animal" com as propriedades "nome", "especie" e "alimentacao". 
Em seguida, crie uma função que exiba uma mensagem indicando o nome e a espécie do animal, 
bem como o tipo de alimentação (carnívoro, herbívoro ou onívoro) utilizando template strings.
*/

/*
Explicação, constante arvore recebendo um objeto com as seguintes propriedades e valores:
atributos:       valores:
nome:           'Lagarto'
especie:        'Répteis'
alimentacao:    'onívoro'
*/
const animal = {
    nome: 'Lagarto',
    especie: 'Répteis',
    alimentacao: 'onívoro'
}

/*
Explicação, Função arrow tendo apenas um console.log, 
com uma concatenação pegando o objeto animal e invocando sua propriedade nome e sua propriedade especie
*/
const dadosAnimal = () => {
    console.log(`Nome: ${animal.nome}, Espécie: ${animal.especie}`)
}

dadosAnimal() //Saída: Nome: Lagarto, Espécie: Répteis

//ou

//Função arrow com propriedade.
const dadosAnimal2 = (valor1, valor2) => {
    console.log(`Nome: ${animal.nome = valor1}, Espécie: ${animal.especie = valor2}`)
}

//Atribuindo novos valores para as propriedades nome e especie.
dadosAnimal2('Cachorro', 'Mamíferos') //Saída: Nome: Cachorro, Espécie: Mamíferos
