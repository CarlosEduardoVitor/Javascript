function gerar() {
    var numero = document.getElementById('numerotab')
    var res = document.getElementById('res')
    var tabuada = document.getElementById('tabuada')
   // var tab = document.getElementById('tab')

    if (numero.value.length == 0 ) {
        window.alert('[ERRO] Digite um número para gerar a tabuada')
    } else {
        var n1 = Number(numero.value)
        var x = 1
        tabuada.innerHTML = ''
        while (x <= 10) {
            var tab = document.createElement('option')
            tab.text = `${n1} x ${x} = ${n1*x}`
            tab.value = `tabuada${x}`
            tabuada.appendChild(tab)
            x++
        }
    }
}
