/*
Crie uma variável chamada pessoa e atribua um objeto com as propriedades nome e idade. 
Em seguida, adicione um método chamado cumprimentar que retorna a mensagem 
"Olá, meu nome é {nome} e eu tenho {idade} anos.".
*/

let pessoa = {
    nome: "João",
    idade: 30,
    cumprimentar: () => {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`
    }
}

/*
Explicação, Passando o objeto pessoa e invocando a propriedade que está tendo como valor uma função arrow,
retornando um template de string onde this.nome aponta para o próprio objeto pessoa 
e usa a propriedade nome pegando seu valor, o mesmo acontece com o this.idade
*/

console.log(pessoa.cumprimentar()) //Saída: "Olá, meu nome é João e eu tenho 30 anos."
