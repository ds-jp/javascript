function carregar() {
  var msg = window.document.querySelector('div#msg');
  var img = window.document.querySelector('img#imagem');
  var hora = new Date().getHours();
  if (hora >= 0 && hora < 12) {
    // Bom dia!
    msg.innerHTML = `Bom dia! Agora são ${hora} horas.`;
    img.src = 'imagens/foto-manha.png';
    document.body.style.backgroundImage = 'linear-gradient(to right, #9B8043 75%, rgba(255, 255, 255, 0.63)';
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde!
    msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
    img.src= 'imagens/foto-tarde.png';
    document.body.style.backgroundImage = 'linear-gradient(to right, #FCB035 75%, rgba(255, 255, 255, 0.63)';
  } else if (hora >= 18 && hora < 24) {
    // Boa noite!
    msg.innerHTML = `Boa noite! Agora são ${hora} horas.`;
    img.src = 'imagens/foto-noite.png'
    document.body.style.backgroundImage = 'linear-gradient(to right, #193038 75%, rgba(255, 255, 255, 0.63)';
  } else {
    msg.innerHTML = `Hora inválida`;
    img.remove();
  }
}