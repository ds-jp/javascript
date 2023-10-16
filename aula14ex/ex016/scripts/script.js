function contar() {
  let inicio = Number(document.querySelector('input#iinicio').value);
  let fim = Number(document.querySelector('input#ifim').value);
  let passo = Number(document.querySelector('input#ipasso').value);
  let res = document.querySelector('div#res');

  if (inicio == '' || fim == '') {
    res.innerHTML = '<p>Impossível contar!</p>';
  } else {
    if (passo == 0) {
      alert('Passo não pode ser 0, considerando passo 1.');
      passo = 1;
    }
    res.innerHTML = '<p>Contando: <br>';
    if (inicio < fim) {
      for (inicio; inicio <= fim; inicio += passo) {
        res.innerHTML += `${inicio} \u{1F449}`;
      }
    } else {
      for (inicio; inicio >= fim; inicio -= passo) {
        res.innerHTML += `${inicio} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}</p>`;
  }
}