//Palavra-chave this

//this irá fazer uma referência ao próprio objeto.

let height = 120 //Lembrando que objeto tem acesso a variáveis fora do seu escopo

let menu = {
    width: 800,
    height: 50,
    metadeHeight() {
        return this.height / 2 //em resumo é o mesmo que dizer, menu.height / 2
    }
}

menu.metadeHeight() // 25
// sem o this, seria 60

//this retorna o próprio objeto