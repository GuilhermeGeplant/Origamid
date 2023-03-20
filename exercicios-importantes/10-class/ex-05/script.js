/* 
    Exercício de Análise Hídrica da Floresta
    Crie uma classe chamada "Arvore" que tenha as seguintes propriedades:
    - especie: uma string que representa a espécie da árvore
    - idade: um número que representa a idade da árvore em anos
    - areaFoliar: um número que representa a área foliar da árvore em metros quadrados
    - taxaTranspiracao: um número que representa a taxa de transpiração da árvore em litros por dia

    Crie um método chamado "calcularNecessidadeAgua" que calcula a quantidade de água necessária por dia para uma árvore
    com base em sua área foliar e taxa de transpiração.

    Crie uma classe chamada "Floresta" que tenha as seguintes propriedades:
    - arvores: um array que armazena objetos da classe "Arvore"
    - precipitacao: um número que representa a quantidade de chuva que cai na floresta por dia em litros por metro quadrado

    Crie um método chamado "calcularDisponibilidadeAgua" que calcula a quantidade de água disponível por dia na floresta
    com base na precipitação e na área total da floresta.

    Crie um método chamado "calcularDesequilibrioHidrico" que compara a necessidade de água de cada árvore na floresta
    com a disponibilidade de água na floresta e retorna um array com as árvores que estão em estado de desequilíbrio hídrico.

    Crie alguns objetos da classe "Arvore" e adicione-os a um objeto da classe "Floresta". Em seguida, chame o método
    "calcularDesequilibrioHidrico" para verificar se alguma árvore está em estado de desequilíbrio hídrico com base na
    precipitação atual da floresta.
*/

class Arvore {
    constructor(especie, idade, areaFoliar, taxaTranspiracao) {
        this._especie = especie
        this._idade = idade
        this._areaFoliar = areaFoliar
        this._taxaTranspiracao = taxaTranspiracao
    }
    calcularNecessidadeAgua() {
        const necessidadeAgua = this._areaFoliar * this._taxaTranspiracao * 0.5
        console.log(`A árvore ${this._especie} precisa de ${necessidadeAgua.toFixed(2).replace('.', ',')} litros de água por dia.`)
        return necessidadeAgua
    }
}

class Floresta {
    constructor(precipitacao) {
        this._arvores = []
        this._precipitacao = precipitacao
    }

    adicionarArvore(arvore) {
        this._arvores.push(arvore)
    }

    removerArvore(arvore) {
        this._arvores.splice(arvore, 1)
    }

    calcularDisponibilidadeAgua() {
        const areaTotal = this._arvores.reduce(
            (total, arvore) => total + arvore._areaFoliar, 0
        )
        return areaTotal * this._precipitacao
    }

    calcularDesequilibrioHidrico() {
        const desequilibrios = []
        const disponibilidadeAgua = this.calcularDisponibilidadeAgua()
        for (const arvore of this._arvores) {
            const necessidadeAgua = arvore.calcularNecessidadeAgua()
            if (necessidadeAgua > disponibilidadeAgua) {
                desequilibrios.push(arvore.especie)
            }
        }
        return desequilibrios
    }
}

const arvore1 = new Arvore('Cedro', 6, 8.5, 0.4)
const arvore2 = new Arvore('Jatobá', 9, 10.5, 0.8)
const arvore3 = new Arvore('Juazeiro', 12, 12.8, 1.2)

const floresta = new Floresta(0.5)
floresta.adicionarArvore(arvore1)
floresta.adicionarArvore(arvore2)
floresta.adicionarArvore(arvore3)

const desequilibrios = floresta.calcularDesequilibrioHidrico()
if (desequilibrios.length === 0) {
    console.log('Todas as árvores estão em equilíbrio hídrico.')
}
else {
    console.log(`As árvores ${desequilibrios.join(', ')} estão em desequilíbrio hídrico.`)
}