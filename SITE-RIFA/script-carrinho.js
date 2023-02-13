let infor = document.getElementById('infdousuario')
let totbilhe = document.getElementById('total-bilhetesp')
let iconName = document.getElementById('iconName')
let iconTel = document.getElementById('iconTel')



let listausuario = localStorage.getItem('listaUser') 
let respo = JSON.parse(listausuario)

console.log(respo)

iconName.innerHTML += (respo.nomecad+ '<br>')
iconTel.innerHTML += (respo.phonecad)

let soma = (respo.bilhete) * 0.95

totbilhe.innerHTML += (respo.bilhete + ' Número cada: R$ 0,95 <br/> Por: ' +soma)

// gerar numeros aleartorios


let resul = []
let cont = 0


function gerador() {

    /*for(let c = 0; c < respo.bilhete; c++) {
        let x = Math.floor(Math.random() * 99999) + 1
        let numberexiste = resul.find((e) => {
            e==x
        }) 

        if(!numberexiste) {
            resul.push(x)
        } else {
            cont++
        }
}*/

    while(resul.length < respo.bilhete) {
        let x = Math.floor(Math.random() * 99999) + 1
        let numberexiste = resul.find((e) => {
            e==x
        }) 

        if(!numberexiste) {
            resul.push(x)
        }
    }
    return resul
}


function resultado(){
    
    let quantbilhetes = gerador()
    let lista = document.getElementById('lista');
    for(var i = 0; i < quantbilhetes.length; i++){

        let item = document.createElement('li');
        item.appendChild(document.createTextNode(quantbilhetes[i]));
        lista.appendChild(item);
    }

   let reservados = localStorage.getItem('listaUser') 

   let resultado = JSON.parse(reservados)

   resultado.reservados = quantbilhetes 

   localStorage.setItem('listaUser', JSON.stringify(resultado))

    
}












