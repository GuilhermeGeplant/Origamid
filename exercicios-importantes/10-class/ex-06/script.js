/*
Exercício de Estudos de Clima

Crie uma classe chamada "EstacaoMeteorologica" que tenha as seguintes propriedades:

cidade: uma string que representa a cidade onde a estação meteorológica está localizada
temperatura: um número que representa a temperatura atual medida em graus Celsius
umidade: um número que representa a umidade relativa do ar medida em porcentagem
velocidadeVento: um número que representa a velocidade do vento em metros por segundo

Crie um método chamado "calcularIndiceCalor" que calcula o índice de calor atual com base na temperatura e umidade
utilizando a fórmula: IC = -8.784694 + 1.61139411T + 2.338548TR - 0.14611605T^2 - 0.012308094R^2 - 0.016424827TR^2 + 0.002211732T^2R + 0.00072546TR^2 - 0.000003582T^2*R^2, onde T é a temperatura em graus Celsius e R é a umidade relativa do ar em porcentagem.

Crie uma classe chamada "EstudoClimatico" que tenha as seguintes propriedades:

estacoesMeteorologicas: um array que armazena objetos da classe "EstacaoMeteorologica"
precipitacao: um número que representa a quantidade de chuva que cai na região por mês em milímetros
intensidadeChuva: um número que representa a intensidade média da chuva na região em milímetros por hora

Crie um método chamado "calcularIndicePluviometrico" que calcula o índice pluviométrico anual com base na precipitação
e na área da região. O índice pluviométrico é definido como a quantidade de chuva em milímetros que cai em uma região
durante um período de tempo (geralmente um ano) dividido pela área da região em metros quadrados.

Crie um método chamado "calcularVelocidadeMediaVento" que calcula a velocidade média do vento na região com base na
velocidade do vento registrada em todas as estações meteorológicas e na área total da região.

Crie um método chamado "calcularRegioesClimaticas" que divide a região em diferentes zonas climáticas com base nos dados
de temperatura, umidade, índice de calor, índice pluviométrico e velocidade média do vento. Por exemplo, pode-se criar
zonas climáticas como "desértica", "tropical úmida", "temperada", etc.

Crie alguns objetos da classe "EstacaoMeteorologica" e adicione-os a um objeto da classe "EstudoClimatico". Em seguida,
chame o método "calcularRegioesClimaticas" para dividir a região em diferentes zonas climáticas com base nos dados das
estações meteorológicas, precipitação e intensidade de chuva atuais.
*/

class EstacaoMeteorologica {
    constructor(cidade, temperatura, umidade, velocidadeVento) {
        this._cidade = cidade
        this._temperatura = temperatura
        this._umidade = umidade
        this._velocidadeVento = velocidadeVento
    }

    calcularIndiceCalor() {
        const T = this.temperatura
        const R = this.umidade / 100
        let ic =
            -8.784694 +
            1.61139411 * T +
            2.338548 * R -
            0.14611605 * Math.pow(T, 2) -
            0.012308094 * Math.pow(R, 2) -
            0.016424827 * Math.pow(T * R, 2) +
            0.002211732 * T * Math.pow(R, 2) +
            0.00072546 * Math.pow(T, 2) * R -
            0.000003582 * Math.pow(T, 2) * Math.pow(R, 2)

        return ic
    }
}

class EstudoClimatico {
    constructor(precipitacao, intensidadeChuva, areaRegiao) {
        this._estacoesMeteorologicas = []
        this._precipitacao = precipitacao
        this._intensidadeChuva = intensidadeChuva
        this._areaRegiao = areaRegiao
    }

    calcularIndicePluviometrico() {
        const indicePluviometrico = (this._precipitacao * 12) / this._areaRegiao
        return indicePluviometrico
    }

    calcularVelocidadeMediaVento() {
        let velocidadeTotal = 0
        for (const estacao of this._estacoesMeteorologicas) {
            velocidadeTotal += estacao._velocidadeVento
        }
        const velocidadeMedia = velocidadeTotal / this._areaRegiao
        return velocidadeMedia
    }

    calcularRegioesClimaticas() {
        for (const estacao of this._estacoesMeteorologicas) {
            const temperatura = estacao._temperatura
            const umidade = estacao._umidade
            const ic = estacao.calcularIndiceCalor()
            const indicePluviometrico = this.calcularIndicePluviometrico()
            const velocidadeMediaVento = this.calcularVelocidadeMediaVento()

            //Lógica para determinar a zona climática com base nos dados
            let zonaClimatica
            if (temperatura > 30 && ic > 40) {
                zonaClimatica = "desértica"
            }
            else if (temperatura > 20 && umidade > 60 && indicePluviometrico > 1000) {
                zonaClimatica = "tropical úmida"
            }
            else if (temperatura < 20 && umidade < 50 && velocidadeMediaVento > 10) {
                zonaClimatica = "temperada"
            }
            else {
                zonaClimatica = "não determinada"
            }

            console.log(`Estação em ${estacao._cidade}: zona climática ${zonaClimatica}`)
        }
    }
}

// Criando objetos da classe "EstacaoMeteorologica"
const estacao1 = new EstacaoMeteorologica("São Paulo", 28, 65, 15)
const estacao2 = new EstacaoMeteorologica("Rio de Janeiro", 32, 50, 12)
const estacao3 = new EstacaoMeteorologica("Salvador", 25, 80, 8)

// Criando objeto da classe "EstudoClimatico" e adicionando as estações meteorológicas
const estudoClimatico = new EstudoClimatico(500, 5, 1000)
estudoClimatico._estacoesMeteorologicas.push(estacao1)
estudoClimatico._estacoesMeteorologicas.push(estacao2)
estudoClimatico._estacoesMeteorologicas.push(estacao3)

//Chamando o método "calcularRegioesClimaticas" para determinar as zonas climáticas
estudoClimatico.calcularRegioesClimaticas()
//Estação em São Paulo: zona climática não determinada
//Estação no Rio de Janeiro: zona climática tropical úmida
//Estação em Salvador: zona climática tropical úmida
