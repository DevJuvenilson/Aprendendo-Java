
//PIOR
function Person(nome, idade) {
    this.nome = nome;
    this.idade = idade
}

Person.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

//MELHOR
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar () {
        return (`Meu nome é: ${this.nome}`);
    }
}
// L 12 até 21 é a maneira resumida de escrever as linhas 3 até 7

const teste = new Pessoa('Juvenilson', 15).falar();

console.log(teste)