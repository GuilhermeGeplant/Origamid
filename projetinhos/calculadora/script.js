function adicionarNumero(numero) {
    document.querySelector('.campo-numeros').value += numero
}

function limpar() {
    document.querySelector('.campo-numeros').value = ''
}

function calcularExpressao(expressao) {

    //---Explicação do método.match():---
    //A expressão regular [+\-*/] é usada como argumento da função match() para indicar que queremos buscar qualquer um dos caracteres +, -, * 
    //ou / na string expressao. O símbolo / indica o início e o fim da expressão regular, enquanto o g ao final indica que a busca deve ser global, 
    //ou seja, em toda a string e não apenas na primeira ocorrência encontrada.

    //Por exemplo, se a expressão expressao for '3+4*5/2', a chamada expressao.match(/[+\-*/]/g) retornará um array com os operadores +, * e /, nessa ordem.
    const operadores = expressao.match(/[+\-*/]/g)

    //---Explicação do método.split() e .map():---
    //O primeiro método, split, divide a string expressao em um array de substrings, utilizando a expressão regular /[+\-*/]/g como separador. 
    //Essa expressão regular significa: busque por qualquer um dos caracteres +, -, * ou / na string ([+\-*/]), e quebre a string nesses pontos (split). 
    //O modificador g é utilizado para indicar que a busca deve ser global, ou seja, não deve parar na primeira ocorrência encontrada.

    //O resultado do split é um array contendo os numeros e operadores da expressão, separados em elementos consecutivos. 
    //Por exemplo, se a expressão for '10+5*3', o array resultante será ['10', '+', '5', '*', '3'].

    //O segundo método, map, itera sobre cada elemento do array resultante do split e aplica a função parseFloat, que converte a string em um número de ponto flutuante (float).
    const numeros = expressao.split(/[+\-*/]/g).map(parseFloat)

    //Aplica os operadores aos numeros
    let resultado = numeros[0]
    let i = 0
    for (const operador of operadores) {
        const operando = numeros[i + 1]
        if (operador === '+') {
            resultado += operando
        }
        else if (operador === '-') {
            resultado -= operando
        }
        else if (operador === '*') {
            resultado *= operando
        }
        else if (operador === '/') {
            resultado /= operando
        }

        i++
    }

    return resultado
}

function resultado() {
    const expressao = document.querySelector('.campo-numeros').value
    const resultado = calcularExpressao(expressao)

    document.querySelector('.campo-numeros').value = resultado
}


/*
---fonte: mdn web docs---

eval(): A função eval() computa um código JavaScript representado como uma string. PORÉM Nunca use eval!
é uma função perigosa, que executa o código passado com os privilégios do caller. 
Se você executar o eval() com uma sequência de caracteres que podem ser afetados por uma parte maliciosa, 
você pode acabar executando código malicioso na máquina do usuário com as permissões da sua página/extensão.
Mais importante ainda, o código de terceiros pode ver o escopo em que eval() foi chamado, 
o que pode levar a possíveis ataques como Function não é suscetível.

é geralmente mais lento do que as alternativas, uma vez que tem de invocar o interpretador JS, 
enquanto muitos outros construtores são otimizados por engines de JS modernos.

------------------------

Mesmo apenas essa função conseguindo executar os cálculos, seria nocivo.

function resultado() {
    let resultado = document.querySelector('.campo-numeros').value
    if (resultado) { //se resultado for true
        document.querySelector('.campo-numeros').value = eval(resultado)
    }
}
*/