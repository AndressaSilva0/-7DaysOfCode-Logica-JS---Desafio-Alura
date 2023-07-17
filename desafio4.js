const prompt = require('prompt-sync')();


const number = Math.floor(Math.random() * (10 - 0 + 1) + 0)


console.log("Adivinhe o número entre 0 e 10!");

let i = 3;

while (i > 0) {

  let jogador = parseInt(prompt("Digite o seu chute:  "));

  if (jogador === number) {
    console.log("\nParabéns, você acertou!\n");
    break;
  } else {
    i--;
    console.log("\nVocê errou!\n");

    if (i > 0) {
      console.log(`\nVocê ainda tem ${i} tentativas.\n`);
    } else {
      console.log(`\nSuas tentativas acabaram. O número era ${number}.\n`);
    }
  }
}

    
