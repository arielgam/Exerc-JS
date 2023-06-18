
function carregar(){
    
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora>0 && hora<12) {
        img.src = 'imgs/BomDia.png'
        document.body.style.background = '#e6a44a'
    } else if (hora>=12 && hora<18) {
        img.src = 'imgs/BoaTarde.png'
        document.body.style.background = '#af2b05'
    } else {
        img.src = 'imgs/BoaNoite.png'
        document.body.style.background = '#0c3c54'
    }
}