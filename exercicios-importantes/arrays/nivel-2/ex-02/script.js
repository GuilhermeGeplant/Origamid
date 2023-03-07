/*
1) Crie um array chamado "compras" com os seguintes itens: "arroz", 
    "feijão", "macarrão", "leite", "pão", "café", "açúcar", "óleo", "sal", "ovos".
2) Adicione o item "manteiga" no início do array utilizando o método unshift().
3) Adicione o item "sabão em pó" no final do array utilizando o método push().
4) Remova o primeiro item do array utilizando o método shift().
5) Remova o último item do array utilizando o método pop().
6) Inverta a ordem dos itens no array utilizando o método reverse().
7) Remova os itens entre as posições 3 e 5 do array (inclusive) utilizando o método splice().
8) Copie os três primeiros itens do array para as posições 5, 6 e 7 utilizando o método copyWithin().
9) Preencha as posições 2 a 4 do array com o item "chocolate" utilizando o método fill().
10) Crie um novo array chamado "outrosItens" com os itens "sorvete", "sucos", "biscoitos", "frutas", "verduras".
11) Concatene o array "outrosItens" ao final do array "compras" utilizando o método concat().
12) Verifique se o item "café" está presente no array "compras" utilizando o método includes().
13) Encontre o índice da primeira ocorrência do item "pão" no array "compras" utilizando o método indexOf().
14) Encontre o índice da última ocorrência do item "leite" no array "compras" utilizando o método lastIndexOf().
15) Crie uma string chamada "listaDeCompras" que contenha todos os itens do array 
    "compras" separados por vírgula e espaço utilizando o método join().
16) Crie um novo array chamado "parteCompras" que contenha os itens entre as 
    posições 2 e 6 do array "compras" utilizando o método slice().
*/

const compras = [
    'arroz', 'feijão', 'macarrão', 'leite', 'pão',
    'café', 'açúcar', 'óleo', 'sal', 'ovos'
]
console.log(`Questão 1): ${compras}`)
//Saída: Questão 1): arroz,feijão,macarrão,leite,pão,café,açúcar,óleo,sal,ovos

compras.unshift('manteiga')
console.log(`Questão 2): ${compras}`)
//Saída: Questão 2): manteiga,arroz,feijão,macarrão,leite,pão,café,açúcar,óleo,sal,ovos

compras.push('sabão em pó')
console.log(`Questão 3): ${compras}`)
//Saída: Questão 3): manteiga,arroz,feijão,macarrão,leite,pão,café,açúcar,óleo,sal,ovos,sabão em pó

compras.shift(0)
console.log(`Questão 4): ${compras}`)
//Saída: Questão 4): arroz,feijão,macarrão,leite,pão,café,açúcar,óleo,sal,ovos,sabão em pó

compras.pop()
console.log(`Questão 5): ${compras}`)
//Saída: Questão 5): arroz,feijão,macarrão,leite,pão,café,açúcar,óleo,sal,ovos

compras.reverse()
console.log(`Questão 6): ${compras}`)
//Saída: Questão 6): ovos,sal,óleo,açúcar,café,pão,leite,macarrão,feijão,arroz

compras.reverse()
console.log(`Apenas voltando a posição inicial do array compras: ${compras}`)
//Saída: arroz,feijão,macarrão,leite,pão,café,açúcar,óleo,sal,ovos

compras.splice(4, 1)
console.log(`Questão 7): ${compras}`)
//Saída: Questão 7): arroz,feijão,macarrão,leite,café,açúcar,óleo,sal,ovos

compras.copyWithin(5, 0, 3)
console.log(`Questão 8): ${compras}`)
//Saída: Questão 8): arroz,feijão,macarrão,leite,café,arroz,feijão,macarrão,ovos

compras.fill('chocolate', 2, 5)
console.log(`Questão 9): ${compras}`)
//Saída: Questão 9): arroz,feijão,chocolate,chocolate,chocolate,arroz,feijão,macarrão,ovos

const outrosItens = ['sorvete', 'sucos', 'biscoitos', 'frutas', 'verduras']
console.log(`Questão 10): ${outrosItens}`)
//Saída: Questão 10): sorvete,sucos,biscoitos,frutas,verduras

const concatenar = compras.concat(outrosItens)
console.log(`Questão 11): ${concatenar}`)
//Saída: Questão 11): arroz,feijão,chocolate,chocolate,chocolate,arroz,feijão,macarrão,ovos,sorvete,sucos,biscoitos,frutas,verduras

console.log(`Questão 12): ${compras.includes('café')}`)
//Saída: Questão 12): false

console.log(`Questão 13): ${compras.indexOf('pão')}`)
//Saída: Questão 13): -1

console.log(`Questão 14): ${compras.lastIndexOf('leite')}`)
//Saída: Questão 14): -1

const listaDeCompras = compras.join(', ')
console.log(`Questão 15): ${listaDeCompras}`)
//Saída: Questão 15): arroz, feijão, chocolate, chocolate, chocolate, arroz, feijão, macarrão, ovos

const parteCompras = compras.slice(3, 6)
console.log(`Questão 16): ${parteCompras}`)
//Saída: Questão 16): chocolate,chocolate,arroz
