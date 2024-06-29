
/*

    3) Faça um programa que calcule e imprima o salário a ser tranferido para um funcionário.

    Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
    O salário a ser tranferido é calculado da seguinte maneira:

        Valor Bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios.

    Para calcular o percentual de imposto segue as aliquotas:
            De R$ 0.00 a R$ 1100.00 = 5.00%
            De R$ 1100.01 a R$ 2500.00 = 10.00%
            Maior que R$ 2500.00 = 15.00%

    Exemplo:
        Entrada:
            2000 (Salário Bruto)
            250 (Benefício)

        Saída:
            2050.00
*/

const { gets, print } = require('../src/funcoes-auxiliares03');

const valorSalarioBruto = gets();
const valorBeneficios = gets();

const valorAliquota = calcularAliquota(valorSalarioBruto);
const valorSalarioLiquido = calcularSalarioLiquido(valorSalarioBruto, valorBeneficios, valorAliquota);

function calcularAliquota(valorSalarioBruto) {

    var aliquota = null;

    if (valorSalarioBruto > 0 && valorSalarioBruto <= 1100) {
        aliquota = valorSalarioBruto*(5/100);
    } else if (valorSalarioBruto > 1100 && valorSalarioBruto <= 2500) {
        aliquota = valorSalarioBruto*(10/100);
    } else if (valorSalarioBruto > 2500) {
        aliquota = valorSalarioBruto*(15/100);
    } else {
        return aliquota = console.error('Alguns dos valores inseridos é inválido.');
    }

    return aliquota;
};

function calcularSalarioLiquido(valorSalarioBruto, valorBeneficios, valorAliquota) {
    
    var salarioLiquido = (valorSalarioBruto - valorAliquota + valorBeneficios);

    return salarioLiquido;

};

print(`R$ ${valorSalarioLiquido.toFixed(2)}`);