/*
criar uma classe chamada "Solo" que terá propriedades e métodos relacionados ao solo, 
como a sua fertilidade, pH e tipo de solo. 
Além disso, vamos criar uma subclasse chamada "SoloCultivado" que irá herdar as 
propriedades e métodos da classe "Solo" e adicionar algumas propriedades específicas 
para solos que estão sendo cultivados, 
como o tipo de cultura e a quantidade de nutrientes no solo.
*/

// Definindo a classe Solo
class Solo {
    constructor(fertilidade, pH, tipo) {
        this.fertilidade = fertilidade
        this.pH = pH
        this.tipo = tipo
    }

    // Método estático que retorna a quantidade total de nutrientes no solo
    static calcularNutrientesTotal(solo) {
        return solo.fertilidade * solo.pH
    }

    // Getter que retorna o tipo de solo
    get tipoSolo() {
        return this.tipo
    }

    // Setter que define o tipo de solo
    set tipoSolo(novoTipo) {
        this.tipo = novoTipo
    }

    // Método do prototype que retorna a fertilidade do solo
    obterFertilidade() {
        return this.fertilidade
    }
}

// Definindo a subclasse SoloCultivado que herda de Solo
class SoloCultivado extends Solo {
    constructor(fertilidade, pH, tipo, cultura, nutrientes) {
        super(fertilidade, pH, tipo)
        this.cultura = cultura
        this.nutrientes = nutrientes
    }

    // Getter que retorna a quantidade de nutrientes no solo para a cultura específica
    get nutrientesCultura() {
        return this.nutrientes
    }

    // Setter que define a quantidade de nutrientes no solo para a cultura específica
    set nutrientesCultura(novaQuantidade) {
        this.nutrientes = novaQuantidade
    }

    // Método do prototype que retorna a quantidade de nutrientes por metro quadrado para a cultura específica
    obterNutrientesPorMetroQuadrado(area) {
        return this.nutrientes / area
    }
}

// Criando um objeto Solo
const solo1 = new Solo(5, 6.2, 'Argiloso')

// Alterando o tipo de solo usando o setter
solo1.tipoSolo = 'Arenoso'

// Imprimindo o tipo de solo usando o getter
console.log(`Tipo de solo: ${solo1.tipoSolo}`)

// Chamando o método estático para calcular a quantidade total de nutrientes no solo
const nutrientesTotal = Solo.calcularNutrientesTotal(solo1)
console.log(`Quantidade total de nutrientes no solo: ${nutrientesTotal}`)

// Criando um objeto SoloCultivado
const soloCultivado1 = new SoloCultivado(7, 5.5, 'Arenoso', 'Trigo', 20)

// Chamando o método do prototype para obter a fertilidade do solo
const fertilidadeSoloCultivado = soloCultivado1.obterFertilidade()
console.log(`Fertilidade do solo cultivado: ${fertilidadeSoloCultivado}`)

// Chamando o método do prototype para obter a quantidade de nutrientes por metro quadrado
const nutrientesPorMetroQuadrado = soloCultivado1.obterNutrientesPorMetroQuadrado(10)
console.log(`Quantidade de nutrientes por metro quadrado: ${nutrientesPorMetroQuadrado}`)
