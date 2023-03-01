/*
Crie um arquivo modulo.js com o seguinte código:

Em seguida, crie um arquivo index.js que importa as funções PI 
e areaCirculo do módulo e as usa para calcular a área de um círculo de raio 5.
*/

export const PI = 3.14159

export function areaCirculo(raio) {
    return PI * raio ** 2
}
