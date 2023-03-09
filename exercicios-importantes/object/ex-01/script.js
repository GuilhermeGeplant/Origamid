/*
Suponha que você está trabalhando em uma organização de reflorestamento e 
precisa gerenciar informações sobre as árvores plantadas. Para isso, você irá utilizar objetos JavaScript.

1) Crie um objeto chamado "arvore1" que possua as seguintes propriedades:

"especie" (string): com o nome da espécie da árvore (ex: "ipê").
"idade" (number): com a idade da árvore em anos (ex: 5).
"altura" (number): com a altura da árvore em metros (ex: 3.5).

2) Crie outro objeto chamado "arvore2", com as mesmas propriedades de "arvore1", mas com valores diferentes.
3) Crie um método para o objeto "arvore1" chamado "informacoes", 
    que irá imprimir no console as informações da árvore da seguinte forma: 
    "A árvore de espécie [especie] tem [idade] anos e [altura] metros de altura."
4) Utilizando o método "toString()", converta o objeto "arvore2" para uma string e imprima no console.
5) Utilizando o método "{}.isPrototypeOf(valor)", verifique se "arvore1" 
    é protótipo de "arvore2" e imprima no console o resultado (true ou false).
6) Utilizando o método "{}.hasOwnProperty('prop')", verifique se 
    "arvore1" possui a propriedade "especie" e imprima no console o resultado (true ou false).
7) Utilizando o método "{}.propertyIsEnumerable('prop')", 
    verifique se a propriedade "altura" do objeto "arvore1" é enumerável e imprima no console o resultado (true ou false).
8) Utilizando os métodos do protótipo de Object, congele o 
    objeto "arvore1" de forma que não seja possível modificar suas propriedades e imprima no console o resultado.
9) Utilizando os métodos do protótipo de Object, sele o objeto "arvore2" de 
    forma que não seja possível adicionar ou remover propriedades, 
    mas ainda seja possível modificar suas propriedades existentes e imprima no console o resultado.
10) Utilizando o método "{}.getPrototypeOf(obj)", imprima no console o protótipo de "arvore1".
11) Utilizando o método "{}.is(obj1, obj2)", verifique se 
    "arvore1" é igual a "arvore2" e imprima no console o resultado (true ou false).
12) Utilizando os métodos "{}.getOwnPropertyNames(obj)" e "{}.keys(obj)", 
    imprima no console todas as propriedades dos objetos "arvore1" e "arvore2".
13) Utilizando o método "{}.values(obj)", 
    imprima no console todos os valores das propriedades dos objetos "arvore1" e "arvore2".
14) Utilizando o método "{}.entries(obj)", imprima no console um array com as 
    propriedades e valores dos objetos "arvore1" e "arvore2".
15) Utilizando o método "{}.getOwnPropertyDescriptors(obj)", 
    imprima no console um objeto com as descrições das propriedades dos objetos "arvore1" e "arvore2".
16) Crie uma classe chamada "Reflorestamento" que tenha uma propriedade "arvores" que é um array vazio.
17) Adicione um método na classe "Reflorestamento" chamado "adicionarArvore" que 
    receba como parâmetro um objeto que represente uma árvore e adicione-o ao array "arvores".
18) Adicione um método na classe "Reflorestamento" chamado "listarArvores" que 
    imprima no console as informações de todas as árvores presentes no array "arvores".
19) Utilizando o método "{}.defineProperties(obj, props)", crie um objeto chamado "arvore3" com as 
    mesmas propriedades de "arvore1" e "arvore2", mas adicione uma nova propriedade chamada "saude" com o valor "boa".
20) Utilizando o método "{}.assign(destino, ...fontes)", 
    crie um objeto chamado "arvoresTotal" que contenha todas as árvores presentes em "arvores" e também "arvore3". 
    Imprima no console as informações de todas as árvores presentes em "arvoresTotal".
*/


