

const pessoa = {
    genero: 'masculino'
}

const juvena = {
    nome: 'Juvena',
    idade: 16,
    __proto__: pessoa //protótipo
}

console.log(juvena.genero)
