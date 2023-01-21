function parimp(a) {
    if (a%2 == 0) {
        return'Par'
    } else {
       return'Impar'
    }
}

let res = parimp(9)
console.log('O meu numero é '+res)