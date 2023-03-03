/*
1) Ordenação de tipos de solo por fertilidade:

Crie um array de objetos representando tipos de solo. 
Cada objeto deve ter uma propriedade "fertilidade", 
que representa a fertilidade do solo em uma escala de 1 a 10. 
Use o método .sort() para ordenar os tipos de solo em ordem decrescente de fertilidade.
*/

const solos = [
    { tipo: 'argiloso', fertilidade: 8 },
    { tipo: 'arenoso', fertilidade: 3 },
    { tipo: 'calcário', fertilidade: 6 },
    { tipo: 'terra preta', fertilidade: 10 },
    { tipo: 'siltoso', fertilidade: 5 }
]

console.log(solos.sort((a, b) => a.fertilidade - b.fertilidade))
