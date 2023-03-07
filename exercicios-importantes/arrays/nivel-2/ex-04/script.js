/*
Exercício: Gerenciamento de plantas
Você é responsável pelo gerenciamento do jardim de uma escola. 
Você precisa manter um registro das plantas que estão sendo cultivadas, 
incluindo informações como nome, tipo, altura, idade, data de plantio e se estão saudáveis ou não. 
Você também precisa ser capaz de fazer alterações no registro, 
como adicionar novas plantas, atualizar informações e remover plantas que não estão mais saudáveis.

Crie um programa em JavaScript que permita gerenciar o registro de plantas usando os seguintes métodos:

-----------Parte 1: Criando o registro inicial de plantas-----------
1) Crie um array vazio chamado plantas.
2) Crie um objeto chamado planta1 com as seguintes propriedades:

    nome: "Margarida"
    tipo: "flor"
    altura: 0.3
    idade: 3
    dataPlantio: "2021-06-01"
    saudavel: true

3) Adicione o objeto planta1 ao array plantas.
4) Crie mais 4 objetos para representar plantas diferentes e adicione-os ao array plantas.

-----------Parte 2: Manipulando o registro de plantas-----------
1) Ordene o array plantas em ordem alfabética por nome usando o método .sort().
2) Adicione uma nova planta chamada planta6 ao array plantas usando o método 
    .push(). planta6 deve ter as seguintes propriedades:

        nome: "Samambaia"
        tipo: "folhagem"
        altura: 0.8
        idade: 1
        dataPlantio: "2022-02-01"
        saudavel: true

3) Remova a primeira planta do array plantas usando o método .shift().
4) Marque a planta com nome "Samambaia" como não saudável usando o método .find() e .forEach().
5) Crie um novo array chamado plantasSaudaveis que contenha apenas as 
    plantas saudáveis do array plantas usando o método .filter().
6) Crie um novo array chamado nomesPlantas que contenha apenas os 
    nomes das plantas do array plantas usando o método .map().
7) Crie uma string com os nomes das plantas separados por vírgula usando o método .join().
8) Crie um novo array chamado plantasComIdade2ouMais que contenha apenas as 
    plantas do array plantas que têm idade igual ou maior que 2 usando o método .reduce().

-----------Parte 3: Exibindo o registro de plantas-----------
1) Crie uma função chamada exibirPlanta(planta) que recebe um objeto planta como 
    argumento e retorna uma string formatada com as informações da planta, como a seguir:

        Nome: Margarida
        Tipo: flor
        Altura: 0.3m
        Idade: 3 anos
        Data de plantio: 01/06/2021
        Saudável: sim"

2) Use a função `exibirPlanta()` e o método `.forEach()` 
    para exibir as informações de todas as plantas saudáveis do array `plantasSaudaveis`.

-----------Parte 4: Desafio extra-----------

1) Crie uma função chamada `crescerPlantas()` que recebe um array de plantas como 
    argumento e aumenta a altura de cada planta em `0.1` metros. Use o método `.map()` 
    para criar um novo array de plantas com as alturas atualizadas. 
    Lembre-se de que você não deve modificar o array original.
2) Crie uma função chamada `podarPlantas()` que recebe um array de plantas como argumento e 
    remove todas as plantas que têm altura maior que `1` metro. Use o método `.filter()` 
    para criar um novo array de plantas que atendam a essa condição. 
    Lembre-se de que você não deve modificar o array original.

-----------Dicas-----------

- Para formatar a data de plantio no formato "DD/MM/YYYY", você pode usar o 
    método `.split()` para separar a data em um array com três elementos (dia, mês e ano), e 
    depois usar o método `.join()` para juntar esses elementos novamente com as barras separando-os.
- Para marcar uma planta como não saudável, 
    você pode simplesmente alterar a propriedade `saudavel` do objeto para `false`.
- O método `.findIndex()` retorna o índice do primeiro elemento que atende à condição 
    passada como argumento. Para atualizar a altura de uma planta, você pode usar o 
    `.findIndex()` para encontrar o índice da planta com o nome desejado, e 
    depois usar o `.splice()` para alterar a propriedade `altura` do objeto correspondente.
- O método `.find()` retorna o primeiro elemento que atende à condição passada como argumento. 
    Para marcar uma planta como não saudável, você pode usar o `.find()` 
    para encontrar a planta com o nome desejado, e depois alterar sua propriedade `saudavel` para `false`.
- O método `.reduce()` recebe uma função de callback que é executada para cada elemento do array, 
    acumulando um valor final que é retornado no final da iteração. Para criar o array `plantasComIdade2ouMais`, 
    você pode usar o `.reduce()` para acumular as plantas que atendem à condição de idade maior ou igual a `2`.
- Você pode usar o método `.toFixed()` para formatar a altura das 
    plantas com apenas uma casa decimal na função `exibirPlanta()`.
- Para converter a data de plantio de uma string para um objeto `Date` em JavaScript, 
    você pode usar o construtor `new Date()` e passar a string como argumento.
*/

//-----------Parte 1: Criando o registro inicial de plantas-----------

const plantas = []
//Questão 1).

const planta1 = {
  nome: "Margarida",
  tipo: "flor",
  altura: 0.3,
  idade: 3,
  dataPlantio: "2021-06-01",
  saudavel: true
}
//Questão 2).

plantas.push(planta1)
console.log(`Questão 3): ${JSON.stringify(plantas)}`)
//Saída: Questão 3): [{"nome":"Margarida","tipo":"flor","altura":0.3,"idade":3,"dataPlantio":"2021-06-01","saudavel":true}]
/*
Explicação:
Para exibir as informações do objeto planta1 de forma legível no console, 
você pode usar a função JSON.stringify() para converter o objeto em uma string no formato JSON

a função JSON.stringify() é usada para converter o objeto plantas em uma string JSON, 
que pode ser exibida no console de forma legível. Note que, agora, a 
saída mostra a representação em string do objeto planta1 dentro do array plantas.
*/

const planta2 = {
  nome: "Samambaia",
  tipo: "folhagem",
  altura: 0.5,
  idade: 2,
  dataPlantio: "2022-01-15",
  saudavel: false
}

const planta3 = {
  nome: "Jasmim",
  tipo: "arbusto",
  altura: 0.7,
  idade: 5,
  dataPlantio: "2019-09-02",
  saudavel: true
}

const planta4 = {
  nome: "Cacto",
  tipo: "suculenta",
  altura: 0.2,
  idade: 1,
  dataPlantio: "2023-02-20",
  saudavel: true
}

const planta5 = {
  nome: "Violeta",
  tipo: "flor",
  altura: 0.2,
  idade: 4,
  dataPlantio: "2020-07-30",
  saudavel: false
}

plantas.push(planta2, planta3, planta4, planta5)
console.log(plantas)
//Saída: Questão 4):
/*
[
  {
    nome: 'Margarida',
    tipo: 'flor',
    altura: 0.3,
    idade: 3,
    dataPlantio: '2021-06-01',
    saudavel: true
  },
  {
    nome: 'Samambaia',
    tipo: 'folhagem',
    altura: 0.5,
    idade: 2,
    dataPlantio: '2022-01-15',
    saudavel: false
  },
  {
    nome: 'Jasmim',
    tipo: 'arbusto',
    altura: 0.7,
    idade: 5,
    dataPlantio: '2019-09-02',
    saudavel: true
  },
  {
    nome: 'Cacto',
    tipo: 'suculenta',
    altura: 0.2,
    idade: 1,
    dataPlantio: '2023-02-20',
    saudavel: true
  },
  {
    nome: 'Violeta',
    tipo: 'flor',
    altura: 0.2,
    idade: 4,
    dataPlantio: '2020-07-30',
    saudavel: false
  }
]
*/

//-----------Parte 2: Manipulando o registro de plantas-----------

plantas.sort((a, b) => a.nome.localeCompare(b.nome));
console.log(plantas)
//Saída: Questão 1):
/*
[
  {
    nome: 'Cacto',
    tipo: 'suculenta',
    altura: 0.2,
    idade: 1,
    dataPlantio: '2023-02-20',
    saudavel: true
  },
  {
    nome: 'Jasmim',
    tipo: 'arbusto',
    altura: 0.7,
    idade: 5,
    dataPlantio: '2019-09-02',
    saudavel: true
  },
  {
    nome: 'Margarida',
    tipo: 'flor',
    altura: 0.3,
    idade: 3,
    dataPlantio: '2021-06-01',
    saudavel: true
  },
  {
    nome: 'Samambaia',
    tipo: 'folhagem',
    altura: 0.5,
    idade: 2,
    dataPlantio: '2022-01-15',
    saudavel: false
  },
  {
    nome: 'Violeta',
    tipo: 'flor',
    altura: 0.2,
    idade: 4,
    dataPlantio: '2020-07-30',
    saudavel: false
  }
]
*/

const planta6 = {
  nome: "Samambaia",
  tipo: "folhagem",
  altura: 0.8,
  idade: 1,
  dataPlantio: "2022-02-01",
  saudavel: true
}

plantas.push(planta6)
console.log(plantas)
//Saída: Questão 2):
/*
[
  {
    nome: 'Cacto',
    tipo: 'suculenta',
    altura: 0.2,
    idade: 1,
    dataPlantio: '2023-02-20',
    saudavel: true
  },
  {
    nome: 'Jasmim',
    tipo: 'arbusto',
    altura: 0.7,
    idade: 5,
    dataPlantio: '2019-09-02',
    saudavel: true
  },
  {
    nome: 'Margarida',
    tipo: 'flor',
    altura: 0.3,
    idade: 3,
    dataPlantio: '2021-06-01',
    saudavel: true
  },
  {
    nome: 'Samambaia',
    tipo: 'folhagem',
    altura: 0.5,
    idade: 2,
    dataPlantio: '2022-01-15',
    saudavel: false
  },
  {
    nome: 'Violeta',
    tipo: 'flor',
    altura: 0.2,
    idade: 4,
    dataPlantio: '2020-07-30',
    saudavel: false
  },
  {
    nome: 'Samambaia',
    tipo: 'folhagem',
    altura: 0.8,
    idade: 1,
    dataPlantio: '2022-02-01',
    saudavel: true
  }
]
*/
plantas.shift(plantas[0]) //com plantas.planta1 removeria também.
console.log(plantas)
//Saída: Questão 3):
/*
[
  {
    nome: 'Jasmim',
    tipo: 'arbusto',
    altura: 0.7,
    idade: 5,
    dataPlantio: '2019-09-02',
    saudavel: true
  },
  {
    nome: 'Margarida',
    tipo: 'flor',
    altura: 0.3,
    idade: 3,
    dataPlantio: '2021-06-01',
    saudavel: true
  },
  {
    nome: 'Samambaia',
    tipo: 'folhagem',
    altura: 0.5,
    idade: 2,
    dataPlantio: '2022-01-15',
    saudavel: false
  },
  {
    nome: 'Violeta',
    tipo: 'flor',
    altura: 0.2,
    idade: 4,
    dataPlantio: '2020-07-30',
    saudavel: false
  },
  {
    nome: 'Samambaia',
    tipo: 'folhagem',
    altura: 0.8,
    idade: 1,
    dataPlantio: '2022-02-01',
    saudavel: true
  }
]
*/

plantas.find(planta => planta.nome === "Samambaia").saudavel = false
plantas.forEach(planta => {
  if (planta.nome === 'Samambaia') {
    planta.saudavel = false
  }
})
console.log(plantas)
//Saída: Questão 4):
/*
[
  {
    nome: 'Jasmim',
    tipo: 'arbusto',
    altura: 0.7,
    idade: 5,
    dataPlantio: '2019-09-02',
    saudavel: true
  },
  {
    nome: 'Margarida',
    tipo: 'flor',
    altura: 0.3,
    idade: 3,
    dataPlantio: '2021-06-01',
    saudavel: true
  },
  {
    nome: 'Samambaia',
    tipo: 'folhagem',
    altura: 0.5,
    idade: 2,
    dataPlantio: '2022-01-15',
    saudavel: false
  },
  {
    nome: 'Violeta',
    tipo: 'flor',
    altura: 0.2,
    idade: 4,
    dataPlantio: '2020-07-30',
    saudavel: false
  },
  {
    nome: 'Samambaia',
    tipo: 'folhagem',
    altura: 0.8,
    idade: 1,
    dataPlantio: '2022-02-01',
    saudavel: false
  }
]
*/

const plantasSaudaveis = plantas.filter(planta => planta.saudavel) //se for true vai trazer.
console.log(plantasSaudaveis)
//Saída: Questão 5):
/*
[
  {
    nome: 'Jasmim',
    tipo: 'arbusto',
    altura: 0.7,
    idade: 5,
    dataPlantio: '2019-09-02',
    saudavel: true
  },
  {
    nome: 'Margarida',
    tipo: 'flor',
    altura: 0.3,
    idade: 3,
    dataPlantio: '2021-06-01',
    saudavel: true
  }
]
*/

const nomesPlantas = plantas.map((plantas) => plantas.nome)
console.log(nomesPlantas)
//Questão 6).
//Saída: [ 'Jasmim', 'Margarida', 'Samambaia', 'Violeta', 'Samambaia' ]

const stringNomes = plantas.map((plantas) => plantas.nome)
stringNomes.join(',')
console.log(stringNomes)
//Questão 7).
//[ 'Jasmim', 'Margarida', 'Samambaia', 'Violeta', 'Samambaia' ]

const plantasComIdade2ouMais = plantas.filter(planta => planta.idade >= 2);
console.log(plantasComIdade2ouMais)
//Questão 8).
/*
Explicação do porque não usar .map() e .reduce()

O método .reduce() não é a melhor opção para esse caso, pois ele é utilizado para reduzir um
array a um único valor com base em uma função acumuladora.
O método mais adequado para esse caso seria o .filter(). Veja como seria a implementação:

Saída:
  {
    nome: 'Jasmim',
    tipo: 'arbusto',
    altura: 0.7,
    idade: 5,
    dataPlantio: '2019-09-02',
    saudavel: true
  },
  {
    nome: 'Margarida',
    tipo: 'flor',
    altura: 0.3,
    idade: 3,
    dataPlantio: '2021-06-01',
    saudavel: true
  },
  {
    nome: 'Samambaia',
    tipo: 'folhagem',
    altura: 0.5,
    idade: 2,
    dataPlantio: '2022-01-15',
    saudavel: false
  },
  {
    nome: 'Violeta',
    tipo: 'flor',
    altura: 0.2,
    idade: 4,
    dataPlantio: '2020-07-30',
    saudavel: false
  }
]
*/

//-----------Parte 3: Exibindo o registro de plantas-----------

function exibirPlanta(planta) {
  const novaPlantaString = JSON.stringify(planta)
  return novaPlantaString

}

console.log(exibirPlanta(planta1))
//Questão 1).
//Saída: {"nome":"Margarida","tipo":"flor","altura":0.3,"idade":3,"dataPlantio":"2021-06-01","saudavel":true}

function exibirPlanta2(planta) {
  planta.forEach((item) => {
    if (item.saudavel === true) {
      console.log(planta)
    }
  })
}

exibirPlanta2(plantasSaudaveis)
//Questão 2).
/*
Saída:
[
  {
    nome: 'Jasmim',
    tipo: 'arbusto',
    altura: 0.7,
    idade: 5,
    dataPlantio: '2019-09-02',
    saudavel: true
  },
  {
    nome: 'Margarida',
    tipo: 'flor',
    altura: 0.3,
    idade: 3,
    dataPlantio: '2021-06-01',
    saudavel: true
  }
]
*/

//-----------Parte 4: Desafio extra-----------

function crescerPlantas(arrPlantas) {
  const novoArrPlantas = arrPlantas.slice()
  novoArrPlantas.map((novoArrPlantas) => novoArrPlantas.altura += 0.1)
  return console.log(novoArrPlantas)
}

crescerPlantas(plantas)
//Questão 1).
/*
Saída:
[
  {
    nome: 'Jasmim',
    tipo: 'arbusto',
    altura: 0.7999999999999999,
    idade: 5,
    dataPlantio: '2019-09-02',
    saudavel: true
  },
  {
    nome: 'Margarida',
    tipo: 'flor',
    altura: 0.4,
    idade: 3,
    dataPlantio: '2021-06-01',
    saudavel: true
  },
  {
    nome: 'Samambaia',
    tipo: 'folhagem',
    altura: 0.6,
    idade: 2,
    dataPlantio: '2022-01-15',
    saudavel: false
  },
  {
    nome: 'Violeta',
    tipo: 'flor',
    altura: 0.30000000000000004,
    idade: 4,
    dataPlantio: '2020-07-30',
    saudavel: false
  },
  {
    nome: 'Samambaia',
    tipo: 'folhagem',
    altura: 0.9,
    idade: 1,
    dataPlantio: '2022-02-01',
    saudavel: false
  }
]
*/

const planta7 = {
  nome: "sunflower",
  tipo: "flor",
  altura: 1.5,
  idade: 4,
  dataPlantio: "2020-07-30",
  saudavel: false
}

plantas.push(planta7)
console.log(plantas)
//Pra dar mais sentido a questão 2).

const podarPlantas = (arrPlantas) => {
  const plantasPodadas = arrPlantas.filter(planta => planta.altura <= 1.0)
  return plantasPodadas
}

console.log(podarPlantas(plantas))
////Questão 2).
/*
Saída:
[
  {
    nome: 'Jasmim',
    tipo: 'arbusto',
    altura: 0.7999999999999999,
    idade: 5,
    dataPlantio: '2019-09-02',
    saudavel: true
  },
  {
    nome: 'Margarida',
    tipo: 'flor',
    altura: 0.4,
    idade: 3,
    dataPlantio: '2021-06-01',
    saudavel: true
  },
  {
    nome: 'Samambaia',
    tipo: 'folhagem',
    altura: 0.6,
    idade: 2,
    dataPlantio: '2022-01-15',
    saudavel: false
  },
  {
    nome: 'Violeta',
    tipo: 'flor',
    altura: 0.30000000000000004,
    idade: 4,
    dataPlantio: '2020-07-30',
    saudavel: false
  },
  {
    nome: 'Samambaia',
    tipo: 'folhagem',
    altura: 0.9,
    idade: 1,
    dataPlantio: '2022-02-01',
    saudavel: false
  }
]
*/