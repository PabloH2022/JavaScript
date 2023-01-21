    let valor = document.getElementById('txtc')
    let resp = document.getElementById('resposta')
    let numero = [valor.value]

function adicionar() {
    
     if (valor.value.length == 0) {
        window.alert('[ERRO] existem campos vazios!')
     } else {
        
        for(let pos = 0; pos<numero.length; pos++) {
            resp.innerHTML = ('O Valor ' +numero[pos]+ ' Foi adicionado')
        } 
        return numeros
    } 
    let numeros = []
        


        
       
    
    
}
function finalizar() {
    let resumo = window.document.getElementById('resulgeral')
    resumo.innerHTML = 'Varios valores adicionados'
    
}


