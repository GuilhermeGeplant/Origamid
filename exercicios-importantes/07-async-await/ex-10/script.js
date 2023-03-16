/*
Crie uma função "printData" que receba um objeto e imprima seus valores no console. 
Use "Object.values()" para obter os valores do objeto.
*/

const objeto = {
    id: 1,
    nome: 'João',
    email: 'joao@exemplo.com.br',
    telefone: '00-12345-6789'
}

function printData(obj) {
    const valores = Object.values(obj)
    valores.forEach(valor => console.log(valor))
}

printData(objeto)