let valores = [8, 1, 4, 5, 9, 2]
valores.push(3)
valores.sort()
console.log(valores)
console.log(`O vetor tem ${valores.length} posições`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)
let pos = valores.indexOf(8)
if (pos == -1){
    console.log(`Esse vetor não existe/não encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
