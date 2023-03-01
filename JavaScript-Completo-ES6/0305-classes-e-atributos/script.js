/*
classList

Retorna uma lista com as classes do elemento. Permite adicionar,
remover e verificar se contém
*/

const menu = document.querySelector('.menu')

menu.className //string
menu.classList //lista de classes
menu.classList.add('ativo')
menu.classList.add('ativo', 'mobile') //duas classes
menu.classList.remove('ativo')
menu.classList.toggle('ativo') //adiciona/remove a classe
menu.classList.contains('ativo') //true ou false
menu.classList.replace('ativo', 'inativo')

/*
Read Only vs Writable

Existem propriedades que não permitem a mudança de seus
valores, essas são considerados Read Only, ou seja, apenas leitura.
*/

const animais = document.querySelector('.animais')

animais.className //string com o nome das classes
animais.className = 'azul' //substitui completamente a string
animais.className += 'vermelho' //adiciona vermelho à string

animais.attributes = 'class="ativo"' //não funciona, read-only