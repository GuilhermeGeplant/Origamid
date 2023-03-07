/*
Exercício: Reflorestamento
Neste exercício, você vai trabalhar com um array de árvores que estão 
sendo plantadas em uma área de reflorestamento. Cada árvore tem as seguintes propriedades:

nome: o nome popular da árvore
altura: a altura da árvore em metros
idade: a idade da árvore em anos
dataPlantio: a data em que a árvore foi plantada (no formato "YYYY-MM-DD")
tipo: o tipo de árvore (exemplo: "frutífera", "madeira nobre", "ornamental", etc.)

Você vai usar vários métodos de arrays do JavaScript 
para manipular e exibir informações sobre as árvores.

-----------Parte 1: Manipulação de dados-----------
1) Crie um array chamado arvores com pelo menos 5 árvores diferentes. 
    Certifique-se de incluir árvores de diferentes tipos.
2) Use o método .map() para criar um novo array de objetos contendo apenas o 
    nome e a altura de cada árvore. O array resultante deve ter o seguinte formato:

        [
        { nome: 'Árvore 1', altura: 2.5 },
        { nome: 'Árvore 2', altura: 1.8 },
        { nome: 'Árvore 3', altura: 3.2 },
        { nome: 'Árvore 4', altura: 1.5 },
        { nome: 'Árvore 5', altura: 2.7 }
        ]

3) Use o método .filter() para criar um novo array contendo apenas as árvores com mais de 2 metros de altura.
4) Use o método .find() para encontrar a árvore mais alta do array e exiba seu nome e altura em metros no console.

-----------Parte 2: Atualização de dados-----------
1) Use o método .findIndex() para encontrar o índice da árvore com o nome "Árvore 3".
2) Use o método .splice() para aumentar a altura dessa árvore em 0.5 metros.
3) Use o método .find() para encontrar a árvore com o nome "Árvore 5" e marque-a como "doente", 
    adicionando uma nova propriedade doente com o valor true.

-----------Parte 3: Exibição de dados-----------
1) Crie uma função chamada exibirArvore() que recebe um objeto de árvore como 
    argumento e exibe suas informações no console, no seguinte formato:

        "Nome: [nome da árvore]
        Altura: [altura da árvore]m
        Idade: [idade da árvore] anos
        Data de plantio: [data de plantio da árvore no formato "DD/MM/YYYY"]
        Tipo: [tipo da árvore]
        Doente: [sim/não]"

Se a árvore estiver doente, a última linha deve exibir 
"Doente: sim". Caso contrário, deve exibir "Doente: não".

2) Use a função exibirArvore() e o método .forEach() para 
    exibir as informações de todas as árvores do array arvores.

-----------Parte 4: Ordenação e concatenação-----------
1) Use o método .sort() para ordenar as árvores do array arvores em ordem crescente de altura.
2) Use o método .reverse() para inverter a ordem das árvores no array arvores.
3) Crie um novo array chamado arvoresNovas com pelo menos 
    3 árvores diferentes que ainda não foram plantadas na área de reflorestamento.
4) Use o método .concat() para concatenar o array arvores com o array arvoresNovas.
5) Use a função exibirArvore() e o método .forEach() para exibir as 
    informações de todas as árvores do novo array resultante da concatenação.

-----------Parte 5: Busca e substituição-----------
1) Use o método .findIndex() para encontrar o índice da árvore com o nome "Árvore 2".
2) Use o método .copyWithin() para substituir as informações dessa 
    árvore pelas informações da árvore com o nome "Árvore 4".
3) Use a função exibirArvore() para exibir as informações da 
    árvore com o nome "Árvore 2" atualizadas.
    
-----------Parte 6: Remoção de dados-----------
1) Use o método .shift() para remover a primeira árvore do array arvores.
2) Use o método .pop() para remover a última árvore do array arvores.
3) Use a função exibirArvore() e o método .forEach() para 
    exibir as informações de todas as árvores restantes do array arvores.
*/

//OBS: nesse bloco de exercícios não vão ser colocadas as sáidas em comentários

//-----------Parte 1: Manipulação de dados-----------

const arvores = [
    {
        nome: "Ipê",
        altura: 1.5,
        idade: 30,
        dataPlantio: "1991-09-12",
        tipo: "ornamental",
    },
    {
        nome: "Jacarandá",
        altura: 25,
        idade: 50,
        dataPlantio: "1973-06-18",
        tipo: "madeira nobre",
    },
    {
        nome: "Mangueira",
        altura: 15,
        idade: 40,
        dataPlantio: "1982-11-25",
        tipo: "frutífera",
    },
    {
        nome: "Cerejeira",
        altura: 10,
        idade: 20,
        dataPlantio: "2003-03-21",
        tipo: "ornamental",
    },
    {
        nome: "Pinheiro",
        altura: 30,
        idade: 80,
        dataPlantio: "1943-12-02",
        tipo: "madeira nobre",
    }
]

console.log(arvores)
//Questão 1).

const novasArvores = arvores.map((arvore) => {
    return { nome: arvore.nome, altura: arvore.altura }
})

console.log(novasArvores)
//Questão 2).

const maiorQueDoisMetros = arvores.filter((arvores) => arvores.altura > 2)

console.log(maiorQueDoisMetros)
//Questão 3).

const maisAlta = arvores.slice().sort((a, b) => b.altura - a.altura)

console.log(`nome: ${maisAlta[0].nome}, altura em metros: ${maisAlta[0].altura}`)
//Questão 4).
//Obs, .find() teria mais código e não mudaria o resultado.

//-----------Parte 2: Atualização de dados-----------

const arvoreIndiceTres = novasArvores.findIndex(novasArvores => novasArvores.nome === 'Mangueira')
console.log(`Indice: ${arvoreIndiceTres}`)
//Questão 1).
//obs, caso não soubesse o nome da árvore, mas soubesse sua altura, poderia buscar por ela

novasArvores.splice(arvoreIndiceTres, 1, { ...novasArvores[arvoreIndiceTres], altura: novasArvores[arvoreIndiceTres].altura + 0.5 })
console.log(novasArvores)
//Questão 2).
/*
Explicação desse código:
arvoreIndiceTres: o índice do elemento que será substituído;
, 1, o número de elementos que serão removidos a partir desse índice (neste caso, apenas um elemento será removido);
{ ...novasArvores[arvoreIndiceTres], altura: novasArvores[arvoreIndiceTres].altura + 0.5 }: 
o objeto que será adicionado no lugar do objeto que foi removido. ESSE OBJETO É UMA CÓPIA DO OBJETO ORIGINAL 
(usando o operador spread ...) com a altura modificada (acrescentando 0.5 metros).
*/

const arvoreDoente = novasArvores.find(novasArvores => novasArvores.nome === 'Pinheiro')
arvoreDoente.doente = true

console.log(novasArvores)
//Questão 3).
/*
Explicação, lembrando que a constante arvoreDoente NÃO É UM CLONE do array de objetos novasArvores, então
encontrando o 'Pinheiro' com .find() o acesso fica apenas nesse objeto, por esse motivo a atribuição simples
da nova propriedade .doente
*/

//-----------Parte 3: Exibição de dados-----------

const objetoArvore = {
    nome: 'Cerejeira',
    altura: 10,
    idade: 20,
    dataPlantio: '2003-03-21',
    tipo: 'ornamental',
    doente: true
}


function exibirArvore(objArvore) {
    console.log(`Nome: ${objArvore.nome}`)
    console.log(`Altura: ${objArvore.altura}`)
    console.log(`Idade: ${objArvore.idade}`)
    console.log(`Data de plantio: ${objArvore.dataPlantio}`)
    console.log(`Tipo: ${objArvore.tipo}`)

    if (objArvore.doente) { //Lembrando que aqui o if já julga como true então não precisa colocar objArvore.doente === true
        console.log('Doente: sim')
    }
    else {
        console.log('Doente: não')
    }
}

exibirArvore(objetoArvore)
//Questão 1).

arvores.forEach(arvore => exibirArvore(arvore))
//Questão 2).
/*
No array arvores uma função de callback que chama a função exibirArvore() para cada objeto de árvore no array.
*/

//-----------Parte 4: Ordenação e concatenação-----------

arvores.sort((a, b) => a.altura - b.altura)

console.log(arvores)
//Questão 1).

arvores.reverse()

console.log(arvores)
arvores.reverse() //Voltar as posições de início
//Questão 2).

const arvoresNovas = [
    {
        nome: 'Abacateiro',
        altura: 12,
        idade: 35,
        dataPlantio: '1986-08-12',
        tipo: 'frutífera'
    },
    {
        nome: 'Jabuticabeira',
        altura: 8,
        idade: 25,
        dataPlantio: '1998-05-27',
        tipo: 'frutífera'
    },
    {
        nome: 'Magnólia',
        altura: 6,
        idade: 15,
        dataPlantio: '2008-02-14',
        tipo: 'ornamental'
    }
]

console.log(arvoresNovas)
//Questão 3).

const arvoresConcatenadas = arvores.concat(arvoresNovas)

console.log(arvoresConcatenadas)
//Questão 4).

arvoresConcatenadas.forEach(arvore => exibirArvore(arvore))
//Questão 5).

//-----------Parte 5: Busca e substituição-----------

console.log(arvores.findIndex((arvores) => arvores.nome === 'Jacarandá'))
//Questão 1).

arvores.copyWithin(1, 4, 5)

console.log(arvores)
//Questão 2).

exibirArvore(arvores[1])
//Questão 3).

//-----------Parte 6: Remoção de dados-----------

arvores.shift(0)

console.log(arvores)
//Questão 1).

arvores.pop()
console.log(arvores)
//Questão 2).

arvores.forEach(arvore => exibirArvore(arvore))
//Questão 3).
