// exercício 5
var nome = prompt("Digite seu nome");
console.log("Olá, " + nome + "! Seja bem-vindo(a)");

// exercício 1
var diaSemana = prompt("Digite o dia da semana");
if (diaSemana == "Sábado" || diaSemana == "Domingo") {
    console.log("Bom fim de semana!");
} else {
    console.log("Boa semana!")
}

// exercício 2
var numero = prompt("Digite um número");
if (numero > 0) {
    console.log("O número é positivo");
} else if (numero < 0) {
    console.log("O número é negativo");
}

// exercício 3
var pontuacao = 103;
if (pontuacao >= 100) {
    console.log("Parabéns, você venceu!");
} else {
    console.log("Tente novamente para ganhar.");
}

// exercício 4
var saldo = "R$ 830,00";
alert(`Seu saldo é de ${saldo}`);