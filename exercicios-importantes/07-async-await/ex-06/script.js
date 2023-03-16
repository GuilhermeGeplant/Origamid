/*
Crie uma função "throwError" que lance uma exceção com uma mensagem 
personalizada. Use "throw" para implementar a função.
*/

function throwError(message) {
    throw new Error(message)
}

throwError('mensagem de erro personalizada!')