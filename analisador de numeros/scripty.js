let num = document.getElementById('txtc')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function inNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}


function adicionar() {

    if (inNumero(num.value) &&  !inLista(num.value, valores)) {
        
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = ('Valor ' + num.value +' foi adicionado')
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na Lista!')
    }
    num.value = ''
    num.focus()

}

function finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let ordem = valores.sort()
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {

            soma+= valores[pos]

            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += ('<p>Ao todo, temos ' +tot+ ' números cadastrados. </p>')
        res.innerHTML += ('<p> os números em ordem crescente são ' +ordem+ '</p>')
        res.innerHTML += ('<p> O maior numero é o '+maior+ '</p>')
        res.innerHTML += ('<p> O menor numero é o ' +menor+ '</p>')
        res.innerHTML += ('<p> Somando todos os valores temos ' +soma+'</p>')
        res.innerHTML += ('<p> A média entre os valores digitados é de ' +media+ '</p>')

    }
}