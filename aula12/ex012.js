var idade = 35
console.log('Você tem a idade de', idade, 'anos')
if (idade < 16 ) {
    console.log('Você não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto Opcional')
} else {
    console.log('Voto Obrigatório')
}