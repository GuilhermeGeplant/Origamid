//Crie uma função para verificar se um valor é Truthy
const valTrueOuFalse = (val) => {
    if (!!val) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}

valTrueOuFalse(0) //false
valTrueOuFalse(1) //true

//Explicação: !! transforma o valor em booleano e verifica se é true ou false

//--------------------------------------------------------------------------------

//Crie uma função matemática que retorne o perímetro de um quadrado
const perimetroQuadrado = (lado) => {
    const perimetro = lado * 4
    console.log(`O perímetro do quadrado com lado ${lado} é ${perimetro}`)
}

perimetroQuadrado(5) //O perímetro do quadrado com lado 5 é 20

//--------------------------------------------------------------------------------

//Crie uma função que retorne o seu nome completo
//Ela deve possuir os parâmetros: nome e sobrenome
const nomeCompleto = (nome, sobrenome) => {
    console.log(`${nome} ${sobrenome}`)
}

nomeCompleto('Guilherme', 'Bortoletto') //Guilherme Bortoletto

//--------------------------------------------------------------------------------

//Crie uma função que verifica se um número é par
const numPar = (num) => {
    if (num % 2 === 0) console.log('O número é par')
    else console.log('O número não é par')
}

numPar(2) //O número é par
numPar(3) //O número não é par
numPar(4) //O número é par

//--------------------------------------------------------------------------------

//Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
const tipoDado = (dado) => {
    console.log(typeof (dado))
}

tipoDado('A') //string
tipoDado(3.15) //number
tipoDado(5) //number
tipoDado(true) //boolean

//--------------------------------------------------------------------------------

//addEventListener é uma função nativa do JavaScript
//o primeiro parâmetro é o evento que ocorre e o segundo o Callback
//utilize essa função para mostrar no console o seu nome completo
//quando o evento scroll ocorrer

addEventListener('scroll', () => {
    console.log('Guilherme Bortoletto')
})

//--------------------------------------------------------------------------------

