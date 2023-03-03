/*
1) Imagine que você é um agrônomo responsável por realizar a análise de alguns tipos de solo. 
   Cada amostra de solo é representada por um objeto JavaScript contendo as seguintes propriedades: 
   tipo (string), ph (número), nitrogenio (número) e fosforo (número).

2) Para realizar a análise, você precisa ordenar as amostras de solo de acordo com o pH, 
   do mais ácido para o mais alcalino. 
   Escreva uma função chamada ordenarSoloPorPH que recebe um array de objetos representando as 
   amostras de solo e retorna um novo array com as amostras ordenadas pelo pH.
*/

const amostraSolo = [
    { tipo: 'argiloso', ph: 7.2, nitrogenio: 1.2, fosforo: 0.8 },
    { tipo: 'arenoso', ph: 6.8, nitrogenio: 0.9, fosforo: 0.4 },
    { tipo: 'argiloso', ph: 6.1, nitrogenio: 1.0, fosforo: 0.6 },
    { tipo: 'arenoso', ph: 7.0, nitrogenio: 1.1, fosforo: 0.5 },
    { tipo: 'argiloso', ph: 6.5, nitrogenio: 1.3, fosforo: 0.7 }
]

const ordenarSoloPorPH = (solos) => {
    const amostras = solos.slice() // clona o array que vai ser passada para a função como argumento
    amostras.sort((a, b) => a.ph - b.ph) // ordenadas pelo pH, do mais ácido para o mais alcalino/do menor valor ao maior valor
    return amostras
}

console.log(ordenarSoloPorPH(amostraSolo))
/*
[
  { tipo: 'argiloso', ph: 6.1, nitrogenio: 1, fosforo: 0.6 },
  { tipo: 'argiloso', ph: 6.5, nitrogenio: 1.3, fosforo: 0.7 },
  { tipo: 'arenoso', ph: 6.8, nitrogenio: 0.9, fosforo: 0.4 },
  { tipo: 'arenoso', ph: 7, nitrogenio: 1.1, fosforo: 0.5 },
  { tipo: 'argiloso', ph: 7.2, nitrogenio: 1.2, fosforo: 0.8 }
]
*/