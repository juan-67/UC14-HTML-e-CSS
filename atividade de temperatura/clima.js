// 1. Pergunta a temperatura ao usuário e converte o texto para número
const resposta = prompt("Digite a temperatura em °C:");
const temperatura = Number(resposta);

// Elementos do HTML para exibir os resultados
const elTemperatura = document.getElementById("temperatura");
const elMensagem = document.getElementById("mensagem");

let mensagem = "";

// 2. Estrutura condicional (incluindo o Desafio Extra)
if (temperatura > 35) {
    mensagem = "Está muito quente! 🔥";
} else if (temperatura > 25) {
    mensagem = "Está quente! 🥵";
} else if (temperatura >= 15) {
    mensagem = "O clima está agradável! 😊";
} else {
    mensagem = "Está frio! 🥶";
}

// 3. Exibição na página usando textContent
elTemperatura.textContent = `Temperatura informada: ${temperatura}°C`;
elMensagem.textContent = mensagem;

// 4. Exibição no console.log()
console.log(`Temperatura: ${temperatura}°C`);
console.log(`Classificação: ${mensagem}`);