/*
1) Suponha que você trabalha em uma empresa de análise de solo e 
   precisa classificar amostras de solo por sua porcentagem de nutrientes. 
   Para isso, você precisa criar uma função que receba um array de objetos 
   representando amostras de solo, cada um com as propriedades "tipo" e "nutrientes". 
   A função deve classificar as amostras em ordem decrescente de porcentagem de nutrientes.

   Por exemplo, se você tiver um array de amostras como este:
   const amostrasSolo = [
      { tipo: "Argiloso", nutrientes: 20 },
      { tipo: "Areia", nutrientes: 10 },
      { tipo: "Siltoso", nutrientes: 30 },
      { tipo: "Argiloso", nutrientes: 15 },
   ]

   A função deve retornar um novo array com as amostras classificadas em ordem decrescente de nutrientes:
   Lembre-se que o método .sort() altera o array original, então é recomendável criar uma cópia antes de classificar as amostras.
*/

const amostrasSolo = [
    { tipo: "Argiloso", nutrientes: 20 },
    { tipo: "Areia", nutrientes: 10 },
    { tipo: "Siltoso", nutrientes: 30 },
    { tipo: "Argiloso", nutrientes: 15 },
]

const amostrasDeSolo = (amostras) => {
    const novoArrObj = amostras.slice() //clonando o array de objetos.
    novoArrObj.sort((a, b) => b.nutrientes - a.nutrientes) //ordem decrescente usando os atributos de nutrientes.
    return novoArrObj
}

console.log(amostrasSolo)
/*
[
  { tipo: 'Argiloso', nutrientes: 20 },
  { tipo: 'Areia', nutrientes: 10 },
  { tipo: 'Siltoso', nutrientes: 30 },
  { tipo: 'Argiloso', nutrientes: 15 }
]
*/
console.log(amostrasDeSolo(amostrasSolo))
/*
[
  { tipo: 'Siltoso', nutrientes: 30 },
  { tipo: 'Argiloso', nutrientes: 20 },
  { tipo: 'Argiloso', nutrientes: 15 },
  { tipo: 'Areia', nutrientes: 10 }
]
*/
