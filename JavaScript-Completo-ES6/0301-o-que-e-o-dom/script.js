//Retorne o url da páginal atual utilizando o objeto window
const hrefPagina = window.location.host
console.log(hrefPagina) //192.168.0.16:5500

//----------------------------------------------------------------

//Selecione o primeiro elemento da página que possua a classe ativa
//Lembrando que o querySelector() pega o PRIMEIRO elemento/tag que ele achar, difereten do
//querySelectorAll() que ai sim pega todos os elementos com o mesmo nome de classe
const elementoAtivo = document.querySelector('.ClasseH1')
console.log(elementoAtivo) //<h1 class="ClasseH1">Título</h1>

//----------------------------------------------------------------

//Retorne a linguagem do navegador
//Assim também daria certo: const linguagemPagina = window.navigator.language
const linguagemPagina = navigator.language
console.log(linguagemPagina) //pt-BR

//----------------------------------------------------------------

//Retorne a largura da janela
const larguraJanela = innerWidth
console.log(larguraJanela) //603
