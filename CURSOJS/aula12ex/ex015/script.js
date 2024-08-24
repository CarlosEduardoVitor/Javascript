function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('nascimento')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Dados ínvalidos. Arrume-os e tente novamente!')
    } else {
        var fsex = document.getElementsByName('homem')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked)  {
            genero = 'Homen'
            if (idade >= 0 &&  idade <= 10 ) {
                img.setAttribute('src','image/criancamasculina.jpg' )
            } else if (idade <= 21) {
                img.setAttribute('src','image/jovemmasculino.jpg' ) 
            } else if (idade <= 60) {
                img.setAttribute('src','image/adultomasculino.jpg' )
            } else {
                img.setAttribute('src','image/idosomasculino.jpg' )
            }
        } else{
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src','image/criancafeminina.jpg' )
            } else if (idade <= 21) {
                img.setAttribute('src','image/jovemfeminino.jpg' )
            } else if (idade <= 60) {
                img.setAttribute('src','image/adultafeminina.jpg' )
            } else {
                img.setAttribute('src','image/idosafeminina.jpg' )
            }
            
        }
        res.innerHTML = `Você tem ${idade} anos e você é ${genero}` 
        res.appendChild(img)
    }
}