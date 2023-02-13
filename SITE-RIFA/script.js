let res = window.document.getElementById('caixabilhete')
let inicio = res.value
let numero = 0
let resultado = document.getElementById('resultado')
const section = document.getElementById('final')

// Validação de dados do formúlario

let nome = document.getElementById('nameusu')
let iconName = document.getElementById('iconName')
let divName = document.querySelector('.name')
let validNome = false

let phone = document.getElementById('telusu')
let iconphone = document.getElementById('iconTel')
let divphone = document.querySelector('.telefone')
let validPhone = false

let confirmphone = document.getElementById('telusu01')
let iconConfirmphone = document.getElementById('iconConfirmTel')
let divconfirmphone = document.querySelector('.confirmetelefone')
let validConfirmphone = false

let msgerror = document.getElementById('msgerror')
let msgsucesso = document.getElementById('msgsucesso')

let buscarphone = document.getElementById('buscarnum')

// Carrossel 

let count = 1
document.getElementById('radio1').checked = true

function NextImg() {
    count++
    if(count > 4) {
        count = 1
    }
    document.getElementById('radio'+count).checked = true

}

setInterval(function(){
    NextImg()
}, 3000)



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



nome.addEventListener('keyup', () => {
    if(nome.value.length <= 9) {

        nome.setAttribute('style', 'color: red')
        iconName.setAttribute('style', 'color: red')
        divName.setAttribute('style', 'border-color: red')
        validNome = false

    } else {
        nome.setAttribute('style', 'color: green')
        iconName.setAttribute('style', 'color: green')
        divName.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

phone.addEventListener('keyup', (e) => {
    
    if(phone.value.length < 10 ) {
        phone.setAttribute('style', 'color:red')
        iconphone.setAttribute('style', 'color:red')
        divphone.setAttribute('style', 'border-color: red')
        validPhone = false

    } else {
        phone.setAttribute('style', 'color:green')
        iconphone.setAttribute('style', 'color: green')
        divphone.setAttribute('style', 'border-color: green')
        validPhone = true
    }

})

confirmphone.addEventListener('keyup', (e) => {
    
    if(confirmphone.value != phone.value) {
        confirmphone.setAttribute('style', 'color:red')
        iconConfirmphone.setAttribute('style', 'color:strongorange')
        divconfirmphone.setAttribute('style', 'border-color: red')
        validConfirmphone = false

    } else {
        confirmphone.setAttribute('style', 'color:green')
        iconConfirmphone.setAttribute('style', 'color:green')
        divconfirmphone.setAttribute('style', 'border-color: green')
        validConfirmphone = true
    }

})

function efetuarcompra() {


    if(validNome && validPhone && validConfirmphone) {

        // Salvando dados do usuario

        const listaUser =  {
            nomecad: nome.value,
            phonecad: phone.value,
            bilhete: numero

        }

        localStorage.setItem('listaUser', JSON.stringify(listaUser)) // Convertendo de string para objeto array


        msgsucesso.setAttribute('style', 'display: block')
        msgsucesso.innerHTML = "Salvando seus dados..."
        msgerror.setAttribute('style', 'display: none')
        msgerror.innerHTML = ""

            
        setTimeout(() => { // derlay de 0,3s para abrir a pagina do href
            window.location.href = "carrinho.html"
        }, 2000);
        


    } else {
        msgerror.setAttribute('style', 'display: block')
        msgerror.innerHTML = "Campo vazio encontrado! Preencha todos os campos abaixo..."
        msgsucesso.setAttribute('style', 'display: none')
        msgsucesso.innerHTML = ""
        
    }



const form = window.document.getElementById('formulario-modal')

form.addEventListener('buttom', (e) => {
    e.preventDefault

    const nameInput = document.getElementById('nameusu')
    const phoneInput = document.getElementById('telusu')
    

    localStorage.setItem('name', nameInput.value)
    localStorage.setItem('phone', phoneInput.value)

})


}

let divnumerosselecionados = document.getElementById('numeros-selecionados01')

function buscarbilhetes() {

    if(buscarphone.value.length == 0) {
        divnumerosselecionados.style.display = 'none'
    } else {
        divnumerosselecionados.style.display = 'block'

    }

    let buscarreservados = localStorage.getItem('listaUser')

        let buscar = JSON.parse(buscarreservados)
        console.log('cheguei', buscar.reservados)
        let buscarnumeros = document.getElementById('buscarnumeros')
        for(var i = 0; i < buscar.reservados.length; i++){

        let item = document.createElement('li');
        item.appendChild(document.createTextNode(buscar.reservados[i]));
        buscarnumeros.appendChild(item);
    }
    

}