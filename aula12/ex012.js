var hora = new Date().getHours();
console.log(`Agora são ${hora} horas.`);
if (hora < 0 || hora > 23) {
  console.log('Hora inválida!')
} else if (hora < 6) {
  console.log('Boa madrugada!');
} else if (hora < 12) {
  console.log ('Bom dia!');
} else if (hora < 18) {
  console.log('Boa tarde!');
} else {
  console.log('Boa noite!');
}