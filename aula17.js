let amigo = {
    nome: 'Pablo',
    Sexo: 'M',
    Idade:'23',
    peso: 87.5,
    engordar(p=0) {
        console.log('Engordou!')
        this.peso += p
    }
}
    amigo.engordar(3)
    console.log('O '+amigo.nome + ' pesa ' +amigo.peso+'kg')