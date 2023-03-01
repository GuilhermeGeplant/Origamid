//Adicione a classe ativa a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach((item) => {
    item.classList.add('ativo')
})

//-----------------------------------------------------------------------------------

//Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => { //Já tinha a declaração da querySelectorAll então foi só fazer o forEach
    item.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo') //adicionando o primeiro item no indice 0

//-----------------------------------------------------------------------------------

//Verifique se as imagens possuem o atributo alt
const possuiImg = document.querySelectorAll('img')
possuiImg.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt')
    console.log(img, possuiAtributo)
})

//-----------------------------------------------------------------------------------

//Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]') //Lembrar sempre que, começou com http É link externo.
link.setAttribute('href', 'https://www.google.com.br')

console.log(link) //do origamid foi para o google