let res = window.document.getElementById('caixabilhete')
let inicio = Number(res.value)
let numero = 0
let resultado = document.getElementById('resultado')
let finalizar = document.getElementById('finalizar')


function mais() {
    numero = numero + 1
    res.innerHTML = numero
    res.innerHTML = style.display = "block"
   
    

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


var resul = document.addEventListener('click', function() {

    
    

    resultado.innerHTML = (numero+ ' Números cada: R$0,25 <br>')
    let soma = numero * 0.25
    resultado.innerHTML += ('Por: R$ '+soma)
    



})



