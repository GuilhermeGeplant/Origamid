/*
1) Crie um array chamado solos com os seguintes elementos: 
    "argiloso", "arenoso", "calcário", "argilo-arenoso", "arenoso-calcário", "calcário-argiloso".
2) Ordene o array solos em ordem alfabética usando o método .sort().
3) Adicione o elemento "terra preta" ao início do array solos usando o método .unshift().
4) Adicione o elemento "terra roxa" ao final do array solos usando o método .push().
5) Remova o primeiro elemento do array solos usando o método .shift().
6) Remova o último elemento do array solos usando o método .pop().
7) Inverta a ordem dos elementos no array solos usando o método .reverse().
8) Remova os elementos "argiloso", "arenoso", "calcário" do 
    array solos e adicione o elemento "terra mista" no lugar usando o método .splice().
9) Copie os elementos do índice 1 ao índice 3 do array solos para os 
    índices 3 a 5 usando o método .copyWithin().
10) Preencha os índices 0 a 2 do array solos com o 
    elemento "terra fértil" usando o método .fill().
11) Crie um novo array chamado outrosSolos com os seguintes elementos: 
    "terra vermelha", "terra amarela", "terra preta".
12) Concatene o array solos com o array outrosSolos usando o método .concat().
13) Verifique se o elemento "terra mista" está presente no 
    array solos usando o método .includes().
14) Encontre o índice do elemento "terra fértil" no array solos usando o método .indexOf().
15) Encontre o último índice do elemento "terra fértil" no 
    array solos usando o método .lastIndexOf().
16) Junte todos os elementos do array solos em 
    ma string separada por vírgulas usando o método .join().
17) Crie um novo array chamado solosSlice com os elementos do 
    índice 2 ao índice 4 do array solos usando o método .slice().
*/

const solos = ['argiloso', 'arenoso', 'calcário', 'argilo-arenoso', 'arenoso-calcário', 'calcário-argiloso']
console.log(`Questão 1): ${solos}`)
//Saída: Questão 1): argiloso,arenoso,calcário,argilo-arenoso,arenoso-calcário,calcário-argiloso

solos.sort()
console.log(`Questão 2): ${solos}`)
//Saída: Questão 2): arenoso,arenoso-calcário,argilo-arenoso,argiloso,calcário,calcário-argiloso

solos.unshift('terra preta')
console.log(`Questão 3): ${solos}`)
//Saída: Questão 3): terra preta,arenoso,arenoso-calcário,argilo-arenoso,argiloso,calcário,calcário-argiloso

solos.push('terra roxa')
console.log(`Questão 4): ${solos}`)
//Saída: Questão 4): terra preta,arenoso,arenoso-calcário,argilo-arenoso,argiloso,calcário,calcário-argiloso,terra roxa

solos.shift()
console.log(`Questão 5): ${solos}`)
//Saída: Questão 5): arenoso,arenoso-calcário,argilo-arenoso,argiloso,calcário,calcário-argiloso,terra roxa

solos.pop()
console.log(`Questão 6): ${solos}`)
//Saída: Questão 6): arenoso,arenoso-calcário,argilo-arenoso,argiloso,calcário,calcário-argiloso

solos.reverse()
console.log(`Questão 7): ${solos}`)
//Saída: Questão 7): calcário-argiloso,calcário,argiloso,argilo-arenoso,arenoso-calcário,arenoso
solos.reverse()

solos.splice(solos.indexOf('argiloso'), 1, 'terra mista');
solos.splice(solos.indexOf('arenoso'), 1);
solos.splice(solos.indexOf('calcário'), 1);
console.log(`Questão 8): ${solos}`)
//Saída: Questão 8): arenoso-calcário,argilo-arenoso,terra mista,calcário-argiloso

solos.copyWithin(3, 1, 4)
console.log(`Questão 9): ${solos}`)
//Saída: Questão 9): arenoso-calcário,argilo-arenoso,terra mista,argilo-arenoso

solos.fill('terra fértil', 0, 3)
console.log(`Questão 10): ${solos}`)
//Saída: Questão 10): terra fértil,terra fértil,terra fértil,argilo-arenoso

const outrosSolos = ['terra vermelha', 'terra amarela', 'terra preta']
console.log(`Questão 11): ${outrosSolos}`)
//Saída: Questão 11): terra vermelha,terra amarela,terra preta

const concatenar = solos.concat(outrosSolos)
console.log(`Questão 12): ${concatenar}`)
//Saída: Questão 12): terra fértil,terra fértil,terra fértil,argilo-arenoso,terra vermelha,terra amarela,terra preta

console.log(`Questão 13): ${solos.includes('terra mista')}`)
//Saída: Questão 13): false

console.log(`Questão 14): ${solos.indexOf('terra fértil')}`)
//Saída: Questão 14): 0

console.log(`Questão 15): ${solos.lastIndexOf('terra fértil')}`)
//Saída: Questão 15): 2

const solosString = solos.join(',')
console.log(`Questão 16): ${solosString}`)
//Saída: Questão 16): terra fértil,terra fértil,terra fértil,argilo-arenoso

const solosSlice = solos.slice(2, 5)
console.log(`Questão 17): ${solosSlice}`)
//Saída: Questão 17): terra fértil,argilo-arenoso
