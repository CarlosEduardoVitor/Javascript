function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passos = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0)  {
        res.innerHTML = `Impossivel fazer a contagem.`
    } else if (passos.value.length == 0 ) {
        window.alert('Não é possivel a contagem, iremos considerar passo igual a 1')
        passos.value = 1
    } else {
        res.innerHTML = `Contando: `
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)
        //contagem crescente
        for (var c = i ; c <= f ; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        //contagem regresivsa
        for (var c = i ; c >= f ; c -= p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}