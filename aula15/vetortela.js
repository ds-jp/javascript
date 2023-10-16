let num = [5, 8, 2, 9, 3];

for(let pos = 0; pos < num.length; pos++) {
  console.log(`${pos + 1}º Posição: ${num[pos]}`);
}

for(let pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

let pos = num.indexOf(8);
if (pos == -1) {
  console.log('O valor não foi encontrado')
} else {
  console.log(`O valor está na posição: ${pos}`);
}