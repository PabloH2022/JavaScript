function carregar() {

    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = ('Agora são ' + hora + ' horas' )
    if (hora >= 0 && hora < 12) {
        img.src = 'dia.jpg'
        document.body.style.background = '#61304d'
    } else if(hora > 12 && hora <=18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#feb546'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = 'gray'
    }

}

