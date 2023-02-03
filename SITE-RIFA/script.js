let res = window.document.getElementById('caixabilhete')
let inicio = res.value
let numero = 0
let resultado = document.getElementById('resultado')



function mais() {
    numero = numero + 1
    res.innerHTML = numero
    mostrardiv()
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

// tentado fazer a div aparecer

/*function mostrardiv() {
    const section = document.getElementById('final')

    if(res > '0' ) {
        section.style.display = 'block'
    } else {
        section.style.display = 'none'
    }
}*/

var resul = document.addEventListener('click', function() {


    resultado.innerHTML = (numero+ ' Números cada: R$0,25 <br>')
    let soma = numero * 0.25
    resultado.innerHTML += ('Por: R$ '+soma)
    

})

function finalizarcompra() {
    const modal = document.getElementById('formulario-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'formulario-modal') {
            modal.classList.remove('abrir')
        }

    })
    
}

function buscarnumero() {
    const modal = document.getElementById('pesquisar-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'pesquisar-modal') {
            modal.classList.remove('abrir')
        }
    })
}


// Banco de dados - LocalStorage

const form = window.document.getElementById('formulario-modal')

form.addEventListener('buttom', (e) => {
    e.preventDefault

    const nameInput = document.getElementById('nameusu')
    const phoneInput = document.getElementById('telusu')

    localStorage.setItem('name', nameInput.value)
    localStorage.setItem('phone', phoneInput.value)

    nameInput.value = ''
    phoneInput.value = ''

})







