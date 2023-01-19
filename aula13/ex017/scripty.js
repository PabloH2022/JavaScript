function resultado() {
    let caixa = window.document.getElementById('txtc')
    let res = window.document.getElementById('tabuada')

    if(caixa.value.length == 0) {
        window.alert('[ERROR] Prencha o campo vazio!')
        res.innerHTML = ''
    } else {
        let valor = Number(caixa.value)

        res.innerHTML = ''
        for(let c = 1; c <=10; c+=1) {
            let resultado = valor * c
            res.innerHTML += (valor + ' x ' +c+ ' = ' +resultado +'<br/>')
              
        }
        
    
    }
    
    



}

