
// JEITO UM:
const pessoa = {
    genero: 'masculino'
}

const juvena = {
    nome: 'Juvena',
    idade: 16,
    __proto__: pessoa //protótipo
}

console.log(juvena.genero)

//JEITO DOIS:

const pessoas = {
    genero: 'masculino'
}

const juvers = Object.create(pessoa);

juvena.nome = 'Juvena';