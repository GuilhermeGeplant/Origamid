/*
1) Considere um array de objetos representando dados de vendas de uma empresa:

const vendas = [
  { produto: 'Camisa', quantidade: 15, preco: 50.00 },
  { produto: 'Calça', quantidade: 10, preco: 100.00 },
  { produto: 'Tênis', quantidade: 20, preco: 150.00 },
  { produto: 'Jaqueta', quantidade: 5, preco: 200.00 }
]

a) Use a função .sort() para classificar os objetos em ordem crescente de quantidade vendida.
b) Use a função .sort() para classificar os objetos em ordem decrescente de preço.
c) Qual foi o produto mais vendido?
d) Qual foi o produto mais caro vendido?
e) Qual foi a receita total da empresa com as vendas?
*/

const vendas = [
    { produto: 'Camisa', quantidade: 15, preco: 50.00 },
    { produto: 'Calça', quantidade: 10, preco: 100.00 },
    { produto: 'Tênis', quantidade: 20, preco: 150.00 },
    { produto: 'Jaqueta', quantidade: 5, preco: 200.00 }
]

const ordemCrescente = (dados) => {
    const cloneDados = dados.slice()
    cloneDados.sort((a, b) => a.quantidade - b.quantidade)
    return cloneDados
}

console.log(ordemCrescente(vendas))
/*
[
  { produto: 'Jaqueta', quantidade: 5, preco: 200 },
  { produto: 'Calça', quantidade: 10, preco: 100 },
  { produto: 'Camisa', quantidade: 15, preco: 50 },
  { produto: 'Tênis', quantidade: 20, preco: 150 }
]
*/

const ordemDecrescente = (dados) => {
    const cloneDados = dados.slice()
    cloneDados.sort((a, b) => b.quantidade - a.quantidade)
    return cloneDados
}

console.log(ordemDecrescente(vendas))
/*
[
  { produto: 'Tênis', quantidade: 20, preco: 150 },
  { produto: 'Camisa', quantidade: 15, preco: 50 },
  { produto: 'Calça', quantidade: 10, preco: 100 },
  { produto: 'Jaqueta', quantidade: 5, preco: 200 }
]
*/

const produtoMaisVendidos = (dados) => {
    const cloneDados = dados.slice()
    cloneDados.sort((a, b) => b.quantidade - a.quantidade)
    console.log(`o produto mais vendido foi: ${cloneDados[0].produto}`)
}

produtoMaisVendidos(vendas)
//o produto mais vendido foi: Tênis

const produtoMaisCaro = (dados) => {
    const cloneDados = dados.slice()
    cloneDados.sort((a, b) => b.preco - a.preco)
    console.log(`o produto mais caro foi: ${cloneDados[0].preco}`)
}

produtoMaisCaro(vendas)
//o produto mais caro foi: 200

const receitaTotal = (dados) => {
    const cloneDados = dados.slice()
    const total = cloneDados.reduce((a, b) => a + (b.quantidade * b.preco), 0)
    console.log(`a receita total da empresa com as vendas é de: R$ ${total}`)
}

receitaTotal(vendas)
//a receita total da empresa com as vendas é de: R$ 5750