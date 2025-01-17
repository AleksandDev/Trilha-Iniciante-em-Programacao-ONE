// exercicio 1
console.log("Boas Vindas!");

// exercício 2
var nome = prompt("Digite seu nome: ");
console.log(`Olá ${nome}, seja bem-vindo!`);

// exercício 3
var nome = prompt("Digite seu nome: ");
alert(`Olá ${nome}, seja bem-vindo!`);

// exercício 4
var pergunta = prompt("Qual linguagem de programação você mais gosta?");
console.log(pergunta);

// exercício 5
var valor1 = 66;
var valor2 = 23;
var resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é ${resultado}`);

// exercício 6
var valor1 = 66;
var valor2 = 23;
var resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é ${resultado}`);

// exercício 7
var idade = prompt("Digite sua idade: ");
  if (idade >= 18) {
    console.log("Você é maior de idade!");
  } else {
    console.log("Você é menor de idade!");
  }

// exercício 8
var numero = prompt("Digite um número: ");
  if (numero >= 0){
    console.log("O número é positivo!");
  } else {
    console.log("O número é negativo!");
  }

// exercício 9
var num = 1 
while (num < 10) {
  console.log(num);
  num++;
}

// exercício 10
var nota = prompt("Digite sua nota: ");
if (nota >= 7) {
  console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}

// exercício 11
var numAleatorio = Math.random();
console.log(numAleatorio);

// exercício 12
var numAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numAleatorio);

// exercício 13
var numAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numAleatorio);