/*Argumentos podem ser funções
Chamadas de Callback, geralmente são funções que ocorre após algum evento.*/

/*elemento.addEventListener(evento, função, useCapture);
Explicação:
- O primeiro argumento evento é uma string que especifica o nome do evento que estamos ouvindo, 
como 'click', 'keydown', 'load', etc.
- O segundo argumento função é a função que será executada quando o evento ocorrer.
- O terceiro argumento useCapture é um valor booleano opcional que especifica se o 
evento deve ser capturado no estágio de captura ou no estágio de bubbling.*/
addEventListener('click', function () {
    console.log('Clicou')
})

//A função possui dois argumentos
//Primeiro é a string 'click'
//Segunda é uma função anônima