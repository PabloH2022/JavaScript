// Banco de dados LocalStore

// 1- Inserir dados



//localStorage.setItem("name", "Pablo")

// 3 - resgatar item

//const nomeus = localStorage.getItem("name")

//console.log(nomeus)

// 4 - resgatar item que não existe 

//const lastname = localStorage.getItem("lastname")

//console.log(lastname)

/*if(!lastname) {
    console.log("Sem sobrenome")
}*/

// 5 - Remover item

//localStorage.removeItem("name")

// 6 - Salvar objeto

localStorage.clear()

const usuario = {
    name: "Pablo",
    phone: ("86 9 9957-3315"),
}

localStorage.setItem("usuario", JSON.stringify(usuario))

const getUsu = localStorage.getItem("usuario")

console.log(getUsu)

const personObject = JSON.parse(getUsu)

console.log(typeof personObject)

console.log(personObject.name)