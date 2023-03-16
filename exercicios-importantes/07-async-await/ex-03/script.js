/*
Crie uma função "delay" que receba um número de milissegundos e 
retorne uma promessa que será resolvida após o tempo especificado ter 
passado. Use "setTimeout" para implementar a função.
*/

function delay() {
    /*setTimeout(() => {
        fetch('./frase.json')
            .then(resposta => resposta.json())
            .then(dados => {
                console.log(dados.frase1)
            })
    }, 5000) //Foi o último a sair porque está com 5000 ms

    setTimeout(() => {
        fetch('./frase.json')
            .then(resposta => resposta.json())
            .then(dados => {
                console.log(dados.frase2)
            })
    }, 3000)*/

    setTimeout(() => {
        fetch('./frase.json')
            .then(resposta => resposta.json())
            .then(dados => {
                console.log(dados.frase3)
            })
    }, 1000)
}

delay()
