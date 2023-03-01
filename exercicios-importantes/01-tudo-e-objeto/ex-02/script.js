/*
Crie um objeto "arvore" com as propriedades "especie", "idade" e "altura". Em seguida, 
crie uma função que exiba a altura da árvore em metros.
*/

/*
Explicação, constante arvore recebendo um objeto com as seguintes propriedades e valores:
atributos:       valores:
especie:        'Castanheira'
idade:          400
altura:         35
*/
const arvore = {
    especie: 'Castanheira',
    idade: 400,
    altura: 35
}

/*
Explicação, Função arrow tendo apenas um console.log, 
com uma concatenação pegando o objeto arvore e invocando sua propriedade altura
*/
alturaArvore = () => {
    console.log(`Altura da árvore em metros é: ${arvore.altura}`)
}

//Declarando a função
alturaArvore() //Saída: Altura da árvore em metros é de: 35
