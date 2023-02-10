let infor = document.getElementById('infdousuario')
let totbilhe = document.getElementById('total-bilhetesp')
let iconName = document.getElementById('iconName')
let iconTel = document.getElementById('iconTel')



let listausuario = localStorage.getItem('listaUser') 
let respo = JSON.parse(listausuario)

console.log(respo)

iconName.innerHTML += (respo.nomecad+ '<br>')
iconTel.innerHTML += (respo.phonecad)

let soma = (respo.bilhete) * 0.25

totbilhe.innerHTML += (respo.bilhete+ ' Número cada: R$ 0,25 <br/> Por: ' +soma)

// gerar numeros aleartorios

let quantdebilhetes = document.getElementById('numbers')
let numeros= document.getElementById('num')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let num3 = document.getElementById('num3')
let num4 = document.getElementById('num4')
let num5 = document.getElementById('num5')
let num6 = document.getElementById('num6')
let num7 = document.getElementById('num7')
let num8 = document.getElementById('num8')
let num9 = document.getElementById('num9')
let num10 = document.getElementById('num10')
let num11 = document.getElementById('num11')



let x = Math.floor(Math.random() * 99999) + 1
let x1 = Math.floor(Math.random() * 99999) + 1
let x2 = Math.floor(Math.random() * 99999) + 1
let x3 = Math.floor(Math.random() * 99999) + 1
let x4 = Math.floor(Math.random() * 99999) + 1
let x5 = Math.floor(Math.random() * 99999) + 1
let x6 = Math.floor(Math.random() * 99999) + 1
let x7 = Math.floor(Math.random() * 99999) + 1
let x8= Math.floor(Math.random() * 99999) + 1
let x9 = Math.floor(Math.random() * 99999) + 1
let x10 = Math.floor(Math.random() * 99999) + 1
let x11= Math.floor(Math.random() * 99999) + 1

numeros.innerText = x
num1.innerText = x1
num2.innerText = x2
num3.innerText = x3
num4.innerText = x4
num5.innerText = x5
num6.innerText = x6
num7.innerText = x7
num8.innerText = x8
num9.innerText = x9
num10.innerText = x10
num11.innerText = x11






