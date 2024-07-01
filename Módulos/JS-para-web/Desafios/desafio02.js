
/* 

    Faça um programa que recebe N (quantidade de números) e seus respectivos valores.
    Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10;
            Menor número impar: 1;

*/

const { gets, print } = require('../../../src/funcoes-auxiliares02');

const n = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = n;

for (let i = 0; i < n; i++) {

    const numero = gets();

    if (numero % 2 == 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        };
    } else {
        if (numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        };
    };
};

print(`Maior número par: ${maiorNumeroPar};`);
print(`Menor número impar: ${menorNumeroImpar};`);