/*let num = [2,5,8,10,25,42]
num.push(22)
for(let pos=0;pos<num.length;pos++) {
    console.log(num[pos])
}*/

let valores = [2,5,9,3,6]
valores.sort()
let pos = valores.indexOf(9)
if (pos == -1) {
    console.log('Posição não encontrada!')
} else {
    console.log('O valor esta na posição ' +pos)
}