function Contar() {
    var txti = document.querySelector('input#txtinic')
    var txtf = document.querySelector('input#txtfim')
    var txtp = document.querySelector('input#txtpasso')
    var res = window.document.querySelector('div#res')
   
    if(txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
      res.innerHTML = 'Impossivel contar!'
      window.alert('[ERRO] Preencha os campos vazio!')
    } else {
        res.innerHTML = 'Contando: <br/> '
        let i = Number(txti.value)
        let f = Number(txtf.value)
        let p = Number(txtp.value)
        if(p == 0){
          window.alert('Passo Invalido! Consideraremos Passo 1!')
          p = 1
        } 
        if(i < f){
          // Contagem crescente
          for(let c = i; c <=f; c+=p) {
            res.innerHTML += (c+' \u{1F449}')
            
          }
        } else if(i > f) {
          // Contagem decrescente
          for(let c = i; c>=f; c-=p) {
            res.innerHTML += (c+ ' \u{1F449}')
            
            
          }
        }
        res.innerHTML += '\u{1F3C1}'
    }
        
        
      
}

