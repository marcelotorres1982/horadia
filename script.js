function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = "manha.png"
        document.body.style.background = '#f1d0b5'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = "tarde.png"
        document.body.style.background = '#3996b7'
    } else {
        //BOA NOITE
        img.src = "noite.png"
        document.body.style.background = '#3b2635'
    }
}
