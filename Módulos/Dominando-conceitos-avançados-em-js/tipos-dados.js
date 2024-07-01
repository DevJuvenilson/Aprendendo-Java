/*

    Tipos primitivos:
        - boolean
        - null
        - undefined
        - number
        - string
        - Symbol

*/

//object

const x = {} //Criando objeto literal

// Dentro dessas chavaes colocamos atributos

const pessoa = {
    nome: "Cleiton",
    idade: 44,
    falar: function () {
        console.log(`Meu nome é ${this.nome}`);      
    }
}

pessoa.sobrenome = 'Silva'; // Inserindo atributos

pessoa['nome'] = 'Cleiton'; //Reatribuindo valor

pessoa.falar(); // SAÍDA: meu nome é Cleiton

console.log(pessoa.nome); //SAÍDA: Cleiton
console.log(pessoa['nome']); //SAÍDA: Cleiton
