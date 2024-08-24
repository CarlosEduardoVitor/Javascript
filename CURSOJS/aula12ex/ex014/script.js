function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('manha')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        imagem.src = 'image/fotomanha.png'
        document.body.style.backgroundColor = '#A7B9D0'
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'image/fototarde.png'
        document.body.style.backgroundColor = '#6E3D37'
    } else {
        imagem.src = 'image/fotonoite.png'
        document.body.style.backgroundColor = '#0D2128'
    }
}