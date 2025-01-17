alert("Bem Vindo(a) ao Jogo de Adivinhação do Número Secreto!");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1; 

while (chute != numeroSecreto) {
    chute = parseInt(prompt(`Digite um número entre 0 e ${numeroMaximo}:`));
    if (chute == numeroSecreto) {
       break;
    } else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`)
    } else if (chute < numeroSecreto) {
        alert(`O número secreto é maior que ${chute}`)
    }
   // tentativas = tentativas + 1;
   tentativas++;
}

if (tentativas > 1){
    alert(`Parabéns! Você acertou em ${tentativas} tentativas! O número secreto é ${numeroSecreto}`);
} else {
    alert(`Parabéns! Você acertou em ${tentativas} tentativa! O número secreto é ${numeroSecreto}`);
}

// operador tenário
var palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns! Você acertou em ${tentativas} ${palavraTentativa}! O número secreto é ${numeroSecreto}`);

