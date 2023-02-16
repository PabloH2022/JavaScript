let atual = document.getElementById('atual')
let despesas = document.getElementById('despesas')
let receitas = document.getElementById('receitas')
let inputName = document.getElementById('inputName')
let inputValor = document.getElementById('inputValor')



function adicionar() {
    // salvando dados
    const transação = {
        nome: inputName.value,
        valor: inputValor.value,
    }
    
    localStorage.setItem('transação', JSON.stringify(transação))

    //Recuperando Dados

    let dados = localStorage.getItem('transação')
    let dadosdatransação = JSON.parse(dados)

    let lista = document.getElementById('transações')

    let Name = document.getElementById('nomedatransa')
    let Valor = document.getElementById('valor')
    Name.innerText = (dadosdatransação.nome)
    Valor.innerText = ('R$ '+dadosdatransação.valor)
    

    let item = document.createElement('li')
    item.appendChild(document.createTextNode(dadosdatransação.nome))
    lista.appendChild(item)

}

