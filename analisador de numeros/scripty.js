let num = document.getElementById('txtc')
let lista = document.getElementsByTagName('flista')
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
        item.text = ('O valor '+(num.value)+ ' Adicionado')
        lista.appendChild(item)

    } else {
        window.alert('Valor inválido ou já encontrado na Lista!')
    }

}