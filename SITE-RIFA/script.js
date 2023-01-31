let res = window.document.getElementById('caixabilhete')
let numero = 0
let display = document.getElementById('finalizar').style.display

function mais() {
    numero = numero + 1
    res.innerHTML = numero
    res.innerHTML = style.display = "none"

}
function menos() {
    if(numero == 0) {
        numero = 0
    } else {
        numero = numero - 1
        res.innerHTML = numero
    }  

}

function adicionar1() {
    numero = numero + 1
    res.innerHTML = numero
}

function adicionar30() {
     numero = numero + 30
     res.innerHTML = numero
    
     
}
function adicionar50() {
    numero = numero + 50
    res.innerHTML = numero
}

function adicionar100() {
    numero = numero + 100
    res.innerHTML = numero
}

function finalizar() {
    
}