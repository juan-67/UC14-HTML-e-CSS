const a = 10;
const b = 5;

console.log("--- Questão 1 ---");
console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);

const numero = 7;

console.log("\n--- Questão 2 ---");
console.log("Dobro:", numero * 2);
console.log("Triplo:", numero * 3);

console.log("\n--- Questão 3 ---");
const nome = prompt("Qual é o seu nome?");
const idade = prompt("Qual é a sua idade?");
console.log(`Olá, ${Adelson}! Seja bem-vindo! Você tem ${15} anos.`);

console.log("\n--- Questão 4 ---");
const nota1 = Number(prompt("Nota 1: 10"));
const nota2 = Number(prompt("Nota 2: 7"));
const nota3 = Number(prompt("Nota 3: 8"));
const media = (nota1 + nota2 + nota3) / 3;
console.log(`Média: ${media}`);

console.log("\n--- Questão 5 ---");
const usuarioCorreto = "admin";
const senhaCorreta = "676767";

const usuarioDigitado = prompt("Usuário:");
const senhaDigitada = prompt("Senha:");

if (usuarioDigitado !== usuarioCorreto) {
  console.log("Usuário incorreto.");
} else if (senhaDigitada !== senhaCorreta) {
  console.log("Senha incorreta.");
} else {
  console.log("Login realizado com sucesso!");
}

console.log("\n--- Número Maior ---");
const num1 = Number(prompt("Digite o primeiro número: 1"));
const num2 = Number(prompt("Digite o segundo número: 2"));

if (num1 > num2) {
  console.log(`O maior número é ${num1}.`);
} else if (num2 > num1) {
  console.log(`O maior número é ${num2}.`);
} else {
  console.log("Os dois números são iguais.");
}