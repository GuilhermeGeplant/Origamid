//Retorne um número aleatório
//entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
console.log(aleatorio)

//-----------------------------------------------------------------

//Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9'
const arrayNumeros = numeros.split(', ')
const numeroMaximo = Math.max(...arrayNumeros) //...spread

console.log(numeroMaximo)
//-----------------------------------------------------------------

//Crie uma função para limpar os preços
//e retornar os números com centavos arrendondados
//depois retorne a soma total
const listaPrecos = ['R$ 59,99', 'R$ 100,222', 'R$ 230', 'R$ 200']

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
    preco = +preco.toFixed(2)
    return preco
}

let soma = 0
listaPrecos.forEach((item) => {
    soma += limparPreco(item)
})

console.log(soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))

limparPreco(listaPrecos[1])
