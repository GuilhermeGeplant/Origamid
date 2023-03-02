//Sintaxe:
const carros = ['Ford', 'Fiat', 'Honda']
//Sintaxe:
//a terceira propriedade é o próprio array, poderia ser carro no lugar da prorpiedade array
carros.forEach((item, index, array) => {
    array[index] = 'Teste'
    console.log(item, index, array)
})

console.log(carros) //(3) ['Teste', 'Teste', 'Teste']

//---------------------------------------------------------------------------

//Explicando map
const numeros = [2, 4, 5, 6, 78]

//Uma nova array vai ser criada, 
//porém multiplicando os números da array que foi passada
const numerosX2 = numeros.map(n => n * 2)
console.log(numerosX2) //(5) [4, 8, 10, 12, 156]

//---------------------------------------------------------------------------

//Explicando reduce
const aulas = [10, 25, 30]

const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
    console.log(acumulador, item, index, array)
    return acumulador + item //Vai somar o item com o acumulador inicial, depois o que foi acumulado desses dois, vai somar com o proximo item do array
}, 100) //esse é o acumulador inicial, geralmente é normal começar com 0

//Outra explicação do reduce
const numeros2 = [10, 25, 30, 3, 54, 33, 22]
//----------------------------começou com 0  , 10
const maiorNumero = numeros2.reduce((anterior, atual) => {
    if (anterior > atual) {
        return anterior
    }
    else {
        return atual
    }
}, 0) //começou com 0

console.log(maiorNumero) //54

//---------------------------------------------------------------------------

//Explicando .some()
const frutas = ['Banana', 'Pêra', 'Uva']

//Em resumo é um filtro
const temUva = frutas.some((fruta) => {
    return fruta === 'Uva'
})
console.log(temUva) //true

//Explicando .every()
/*é usada para verificar se todos os elementos de um array 
satisfazem uma determinada condição. 
A função retorna true se todos os elementos 
satisfazem a condição e false caso contrário. */
const numbers = [1, 2, 3, 4, 5]

const allPositive = numbers.every((number) => {
    return number > 0
})

console.log(allPositive) //true
