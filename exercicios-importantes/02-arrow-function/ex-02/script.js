/*
Escreva uma função de arrow que calcule a quantidade de árvores plantadas por hora em uma determinada área de reflorestamento. 
A função deve receber dois parâmetros: a área total de reflorestamento em metros quadrados 
e o número de árvores já plantadas nessa área. 
A função deve retornar a quantidade de árvores que devem ser plantadas por hora para atingir a meta de reflorestamento.

------------------------------------------------------------------------------------------------------------------

O cálculo para saber a quantidade de árvores que devem ser plantadas por hora para atingir a meta de reflorestamento é feito da seguinte forma:

Subtraia o número de árvores já plantadas da área total de reflorestamento para obter a quantidade de árvores que ainda precisam ser plantadas.
Divida a quantidade de árvores que ainda precisam ser plantadas pela quantidade de horas disponíveis para plantio.
O resultado será a quantidade de árvores que devem ser plantadas por hora.
*/

const areaTotal = 10000 //metros quadrados
const arvoresJaPlantadas = 5000 //quantidade de árvores já plantadas

arvPlantadaPorHora = (areaTotal, numArvore) => {
    const horas = 100 // 100 são as horas disponíveis para o plantio.
    const arvQueFaltam = areaTotal - numArvore
    const qntArvores = arvQueFaltam / horas
    console.log(`Quantidade de árvores que devem ser plantadas por hora é de: ${qntArvores.toFixed(0)} árvores.`)
}

arvPlantadaPorHora(areaTotal, arvoresJaPlantadas) //Saída: Quantidade de árvores que devem ser plantadas por hora é de: 50 árvores.
