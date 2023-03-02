const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']
//Remova o primeiro valor de comidas e coloque em uma variável
//Remova o último valor de comidas e coloque em uma variável
//Adicione 'Arroz' ao final do array
//Adicione 'Peixe' e 'Batata' ao inicio do array

const novoArray1 = comidas.shift() //Remove o primeiro elemento do array (1) e o retorna
const novoArray2 = comidas.pop(4) //pop simplismente remove o último valor do array
comidas.push('Arroz') //Adiciona ao final do array.

console.log(novoArray1) //Pizza
console.log(novoArray2) //Macarrão
console.log(comidas) //(3) ['Frango', 'Carne', 'Arroz']

comidas.unshift('Peixe', 'Batata') //Adiona valores no começo do array.

console.log(comidas) //(5) ['Peixe', 'Batata', 'Frango', 'Carne', 'Arroz']

//-----------------------------------------------------------------------------------------------

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']
//Arrume os estudantes em ordem alfabética
//Inverta a ordem dos estudantes
//Verifique se Joana faz parte dos estudantes
//Verifique se Juliana faz parte dos estudantes

estudantes.sort() //Simplismente organiza em ordem alfabética
console.log(estudantes) //(5) ['Brenda', 'Joana', 'Julia', 'Kleber', 'Marcio']

estudantes.reverse() //Inverte o array.
console.log(estudantes) //(5) ['Marcio', 'Kleber', 'Julia', 'Joana', 'Brenda']

//verifica se um determinado elemento existe em um array, true ou false.
console.log(estudantes.includes('Joana')) //true
console.log(estudantes.includes('Juliana')) //false

//Filtra o array para encontrar o elemento 'Joana', outro jeito de filtrar os estudantes
/*const filtrarArray1 = estudantes.filter(nome => nome === 'Joana')
console.log(filtrarArray) //['Joana']

const filtrarArray2 = estudantes.filter(nome => nome === 'Juliana')
console.log(filtrarArray2) //Erro*/

//-----------------------------------------------------------------------------------------------

let html = `<section>
             <div>Sobre</div>
             <div>Produtos</div>
             <div>Contato</div>
            </section>
            `
//Substitua section por ul e div com li,
//utilizando o split e join

//Atribuindo ao mesmo html um novo valor, por esse motivo usar o let,
//o primeiro split com o primeiro join já passa um retorn, o segundo split com 
//o join faz a mesma coisa só que com outros valores
html = html.split('section').join('ul').split('div').join('li')
console.log(html)
/*
            <ul>
             <li>Sobre</li>
             <li>Produtos</li>
             <li>Contato</li>
            </ul>
*/

//-----------------------------------------------------------------------------------------------

const carros = ['Ford', 'Fiat', 'VW', 'Honda']
//Remova o último carro, mas antes de remover
//salve o array original em outra variável

//OBS: está apenas recebendo o apontamento! não é uma cópia! para cópia se usa .slice
//const carrosCopia = carros
//Isso sim é uma cópia
const carrosCopia = carros.slice()

carros.pop() //Remove o último elemento do array

console.log(carros) //(3) ['Ford', 'Fiat', 'VW']
console.log(carrosCopia) //(4) ['Ford', 'Fiat', 'VW', 'Honda']
