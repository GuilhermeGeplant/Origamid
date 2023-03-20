/*
Você foi contratado para desenvolver um sistema para gerenciar a plantação de uma fazenda. 
O sistema deve permitir ao usuário cadastrar os solos da fazenda, 
bem como as culturas que estão sendo cultivadas em cada solo. 
Além disso, o sistema deve exibir a quantidade de nutrientes disponíveis em 
cada solo e permitir ao usuário adicionar ou remover nutrientes.

Para implementar o sistema, você deve seguir as seguintes instruções:

1) Crie uma classe chamada "Solo" que tenha as seguintes propriedades:
    - fertilidade (número)
    - pH (número)
    - tipo (string)

2) Adicione à classe "Solo" um método estático chamado "calcularNutrientesTotal" que 
    receba um objeto "Solo" como parâmetro e retorne a quantidade total de nutrientes no solo, 
    calculada como o produto da fertilidade pelo pH.

3) Adicione à classe "Solo" um getter e um setter para a propriedade "tipo".

4) Adicione à classe "Solo" um método chamado "adicionarNutrientes" que 
    receba uma quantidade de nutrientes como parâmetro e adicione 
    essa quantidade à fertilidade do solo.

5) Adicione à classe "Solo" um método chamado "removerNutrientes" 
    que receba uma quantidade de nutrientes como parâmetro e remova essa 
    quantidade da fertilidade do solo. Certifique-se de que a fertilidade nunca fique negativa.

6) Crie uma subclasse chamada "SoloCultivado" que herde da classe "Solo" e 
    tenha as seguintes propriedades adicionais:
    - cultura (string)
    - nutrientes (número)

7) Adicione à classe "SoloCultivado" um método chamado "obterNutrientesPorMetroQuadrado" que 
    receba a área em metros quadrados da plantação como parâmetro e retorne a quantidade de 
    nutrientes por metro quadrado.

8) Crie uma classe chamada "Fazenda" que tenha uma propriedade "solos" que 
    seja um array de objetos "SoloCultivado".

9) Adicione à classe "Fazenda" um método chamado "adicionarSolo" que 
    receba um objeto "SoloCultivado" como parâmetro e adicione esse objeto ao array de solos.

10) Adicione à classe "Fazenda" um método chamado "removerSolo" que 
    receba o índice do solo a ser removido como parâmetro e remova esse solo do array de solos.

11) Adicione à classe "Fazenda" um método chamado "obterQuantidadeNutrientesSolo" que 
    receba o índice do solo como parâmetro e retorne a 
    quantidade total de nutrientes disponíveis no solo.

12) Adicione à classe "Fazenda" um método chamado "adicionarNutrientesSolo" que 
    receba o índice do solo e a quantidade de nutrientes a ser 
    adicionada como parâmetros e adicione essa quantidade de nutrientes ao solo correspondente.

13) Adicione à classe "Fazenda" um método chamado "removerNutrientesSolo" que 
    receba o índice do solo e a quantidade de nutrientes a ser removida como 
    parâmetros e remova essa quantidade de nutrientes do solo correspondente. 
    Certifique-se de que a fertilidade do solo nunca fique negativa.

14) Crie objetos das classes "Solo" e "SoloCultivado" e adicione-os à classe 
    "Fazenda" usando o método "adicionarSolo".

15) Chame os métodos e getters/setters definidos em ambas as classes e 
    subclasses para verificar se o sistema está funcionando corretamente.

Este exercício envolve vários conceitos, incluindo constructor function, class, constructor, 
this, propriedades, static, prototype, get e set e super. Além disso, a temática de solo 
permite explorar como esses conceitos podem ser aplicados em um 
contexto real de desenvolvimento de software.
*/

class Solo {
    constructor(fertilidade, pH, tipo) {
        this._fertilidade = fertilidade //prefixo "_", é uma convenção para indicar que a variável é privada.
        this._pH = pH
        this._tipo = tipo
    }

    static calcularNutrientesTotal(solo) { //O método estático não precisa ser instanciado, ou seja, você pode chamá-lo diretamente da classe.
        return solo._fertilidade * solo._pH //recebe um objeto solo e calcula a quantidade total de nutrientes com base na fertilidade e no pH
    }

    //Métodos gets e sets.
    get tipo() {
        return this._tipo
    }
    set tipo(value) {
        this._tipo = value
    }

    adicionarNutrientes(quantidade) {
        this._fertilidade += quantidade //Adiciona os nutrientes da fertilidade do solo.
    }

    removerNutrientes(quantidade) {
        this._fertilidade -= quantidade //Remove os nutrientes da fertilidade do solo.
        if (this._fertilidade < 0) { //verifica se a fertilidade do solo se tornou negativa e, se sim, redefine-a como zero.
            this._fertilidade = 0
        }
    }
}

//A classe SoloCultivado é uma subclasse de Solo que possui duas novas propriedades: cultura e nutrientes
class SoloCultivado extends Solo {
    constructor(fertilidade, pH, tipo, cultura, nutrientes) {
        super(fertilidade, pH, tipo)
        this._cultura = cultura
        this._nutrientes = nutrientes
    }

    obterNutrientesPorMetroQuadrado(area) {
        return this._nutrientes / area //recebe uma área e calcula a quantidade de nutrientes por metro quadrado com base no valor da propriedade "nutrientes".
    }
}

//classe Fazenda, que mantém uma lista de objetos Solo
class Fazenda {
    constructor() {
        this._solos = []
    }

    //Esses métodos usam a classe Solo e seus métodos para realizar as operações desejadas.
    adicionarSolo(solo) {
        this._solos.push(solo)
    }

    removerSolo(index) {
        this._solos.splice(index, 1)
    }

    obterQuantidadeNutrientesSolo(index) {
        return Solo.calcularNutrientesTotal(this._solos[index])
    }

    adicionarNutrientesSolo(index, quantidade) {
        this._solos[index].adicionarNutrientes(quantidade)
    }

    removerNutrientesSolo(index, quantidade) {
        this._solos[index].removerNutrientes(quantidade)
    }
}

// Exemplo de uso:

// Criação de solos
const solo1 = new Solo(10, 6.5, 'Argiloso')
const solo2 = new Solo(8, 7.2, 'Arenoso')
const soloCultivado1 = new SoloCultivado(12, 6.8, 'Misturado', 'Milho', 100)
const soloCultivado2 = new SoloCultivado(15, 7.0, 'Argiloso', 'Trigo', 120)

// Criação de fazenda
const fazenda = new Fazenda()

// Adição de solos à fazenda
fazenda.adicionarSolo(solo1)
fazenda.adicionarSolo(solo2)
fazenda.adicionarSolo(soloCultivado1)
fazenda.adicionarSolo(soloCultivado2)

// Teste dos métodos e getters/setters das classes
console.log(Solo.calcularNutrientesTotal(solo1)) // 65
console.log(solo2.tipo) // Arenoso
soloCultivado1.tipo = 'Argiloso'
console.log(soloCultivado1.tipo) // Argiloso
console.log(soloCultivado2.obterNutrientesPorMetroQuadrado(10)) // 12
console.log(fazenda.obterQuantidadeNutrientesSolo(0)) // 65
fazenda.adicionarNutrientesSolo(1, 5)
console.log(solo2._fertilidade) // 13
fazenda.removerNutrientesSolo(0, 8)

/*
Classes: 
são como "modelos" que definem um conjunto de características e comportamentos que um objeto pode ter. 
No código acima, temos duas classes principais: "Solo" e "Fazenda", que representam um solo agrícola e uma fazenda, respectivamente.

Objetos: 
são "instâncias" das classes, ou seja, são criados a partir de uma classe e possuem as características e comportamentos definidos por ela. 
Por exemplo, "solo1" é um objeto da classe "Solo", e "fazenda" é um objeto da classe "Fazenda".

Construtores: 
são métodos especiais das classes que são chamados quando um objeto é criado, 
e servem para definir os valores iniciais das características do objeto. Por exemplo, 
o construtor da classe "Solo" recebe três parâmetros: "fertilidade", "pH" e "tipo", 
e usa esses valores para definir as propriedades "_fertilidade", "_pH" e "_tipo" do objeto.

Métodos: 
são "funções" que definem comportamentos que um objeto pode ter. Por exemplo, na classe "Solo", 
temos os métodos "adicionarNutrientes" e "removerNutrientes", que permitem adicionar ou remover nutrientes do solo. 
Na classe "Fazenda", temos os métodos "adicionarSolo" e "removerSolo", que permitem adicionar ou remover solos da fazenda.

Herança: 
é um conceito em que uma classe pode "herdar" as características e comportamentos de outra classe. 
Na classe "SoloCultivado", por exemplo, usamos a palavra-chave "extends" para indicar que ela herda da classe "Solo". 
Isso significa que um solo cultivado tem todas as características de um solo agrícola, 
e mais algumas características adicionais, como "cultura" e "nutrientes".

Getters e Setters: 
são "métodos especiais" que permitem acessar ou alterar as propriedades de um objeto. Na classe "Solo", 
por exemplo, temos os getters e setters para a propriedade "_tipo". 
Isso significa que, em vez de acessar diretamente a propriedade "_tipo" (que é privada), 
podemos usar os métodos "tipo" e "tipo=" para acessar ou alterar o valor dessa propriedade.

Static: 
é uma palavra-chave que indica que um método ou propriedade pertence à classe em si, e não a um objeto específico da classe. 
Na classe "Solo", por exemplo, temos o método "calcularNutrientesTotal", que é static. 
Isso significa que podemos chamar esse método diretamente na classe, sem precisar criar um objeto primeiro.
*/