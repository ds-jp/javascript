function verificar() {
  var anoatual = new Date().getFullYear();
  var anonasc = Number(document.querySelector('input#iano').value);
  var res = document.querySelector('div#res');
  if (anonasc.length == 0 || anonasc > anoatual) {
    window.alert('[ERRO] Verifique os dados e tente novamente.');
  } else {
    var idade = anoatual - anonasc;
    var radsexo = document.getElementsByName('radsexo');
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    var faixaet = '';
    var sexo = '';
    if (radsexo[0].checked) {
      sexo = 'feminino';
      if (idade >= 0 && idade < 10) {
        faixaet = 'criança';
        img.setAttribute('src', 'foto-bebe-f.png');
        img.setAttribute('alt', 'Criança de sexo feminino');
      } else if (idade < 21) {
        faixaet = 'jovem';
        img.setAttribute('src', 'foto-jovem-f.png');
        img.setAttribute('alt', 'Jovem de sexo feminino');
      } else if (idade < 50) {
        faixaet = 'adulta';
        img.setAttribute('src', 'foto-adulto-f.png');
        img.setAttribute('alt', 'Adulta de sexo feminino');
      } else {
        faixaet = 'idosa';
        img.setAttribute('src', 'foto-idoso-f.png');
        img.setAttribute('alt', 'Idosa de sexo feminino');
      }
    } else if (radsexo[1].checked) {
      sexo = 'masculino';
      if (idade >= 0 && idade < 10) {
        faixaet = 'criança';
        img.setAttribute('src', 'foto-bebe-m.png');
        img.setAttribute('alt', 'Criança de sexo masculino');
      } else if (idade < 21) {
        faixaet = 'jovem';
        img.setAttribute('src', 'foto-jovem-m.png');
        img.setAttribute('alt', 'Jovem de sexo masculino');
      } else if (idade < 50) {
        faixaet = 'adulta';
        img.setAttribute('src', 'foto-adulto-m.png');
        img.setAttribute('alt', 'Adulto de sexo masculino');
      } else {
        faixaet = 'idosa';
        img.setAttribute('src', 'foto-idoso-m.png');
        img.setAttribute('alt', 'Idoso de sexo masculino');
      }
    }

    res.style.textAlign = 'center';
    res.innerHTML = `<p>Estamos no ano de ${anoatual} e você nasceu no ano ${anonasc}.</p>
    <p>Você é uma pessoa ${faixaet} do sexo ${sexo} de ${idade} anos.</p>`;
    res.appendChild(img);
  }


}