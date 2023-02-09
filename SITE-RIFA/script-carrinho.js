let infor = document.getElementById('infdousuario')
let totbilhe = document.getElementById('total-bilhetesp')
let iconName = document.getElementById('iconName')
let iconTel = document.getElementById('iconTel')



let listausuario = localStorage.getItem('listaUser')
let respo = JSON.parse(listausuario)

console.log(respo)

iconName.innerHTML += (respo.nomecad + '<br>')
iconTel.innerHTML += (respo.phonecad)

let soma = (respo.bilhete) * 0.25

totbilhe.innerHTML += (respo.bilhete+ 'Número cada: R$ 0,25 <br/> Por: ' +soma)



