let res = window.document.getElementById('caixabilhete')
let inicio = res.value
let numero = 0
let resultado = document.getElementById('resultado')
const section = document.getElementById('final')


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
    esconderdiv()

}
function adicionar1() {
    numero = numero + 1
    res.innerHTML = numero
    mostrardiv()

}
function adicionar30() {
     numero = numero + 30
     res.innerHTML = numero
     mostrardiv()
    
}
function adicionar50() {
    numero = numero + 50
    res.innerHTML = numero
    mostrardiv()

}
function adicionar100() {
    numero = numero + 100
    res.innerHTML = numero
    mostrardiv()
    
    
}

mostrardiv()

function mostrardiv() {
    

    if(numero == 0 ) {
        section.style.display = 'none'
    } else {
        section.style.display = 'block'
        var resul = document.addEventListener('click', function() { // - div section 


            resultado.innerHTML = (numero+ ' Números cada: R$0,25 <br>')
            let soma = numero * 0.25
            resultado.innerHTML += ('Por: R$ '+soma)
            
        
        })
        
    }
}


function esconderdiv() {
    if(numero == 0) {
        section.style.display ='none'
    }
}


// DIV - MODAL FORMULARIO

function finalizarcompra() {
    const modal = document.getElementById('formulario-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'formulario-modal') {
            modal.classList.remove('abrir')
        }

    })
    
}

// DIV MODAL PESQUISAR NUMERO

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


/*const form = window.document.getElementById('formulario-modal')

form.addEventListener('buttom', (e) => {
    e.preventDefault

    const nameInput = document.getElementById('nameusu')
    let phoneInput = document.getElementById('telusu')
    

    localStorage.setItem('name', nameInput.value)
    localStorage.setItem('phone', phoneInput.value)

})*/

function efetuarcompra() {
    localStorage.name = document.getElementById('nameusu').value
    localStorage.phone = document.getElementById('telusu').value
}

document.getElementById('informações') = localStorage.name
document.getElementById('informações') += localStorage.phone












