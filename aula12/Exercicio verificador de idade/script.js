function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anonasc = window.document.querySelector('input#txtnasc')
    var res = window.document.querySelector('div#res')
    if (anonasc.value.lenght == 0 || Number(anonasc.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(anonasc.value)
        var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                // Criança
                img.setAttribute('src', 'bebe-masc.png')
            } else if (idade <24) {
                //Adolescente
                img.setAttribute('src', 'adolescente-masc.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'adulto-masc.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-masc.png')
            }

        } else if (sexo[1].value) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                // Criança
                img.setAttribute('src', 'bebe-fem.png')
            } else if (idade <23) {
                //Adolescente
                img.setAttribute('rsc', 'adolescente-fem.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'adulto-fem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-fem.png')
            }
            
        }

        res.style.textAlign = 'center'
        res.innerHTML=('Detectamos ' + genero + ' com ' + idade + ' anos')
        res.appendChild(img)

        }
}