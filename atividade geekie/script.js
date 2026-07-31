
const nomeCompleto = prompt("Digite seu nome completo:");
const cargo = prompt("Digite seu cargo ou função:");
const empresa = prompt("Digite sua empresa ou escola:");
const email = prompt("Digite seu e-mail:");


const nomeMaiusculo = nomeCompleto ? nomeCompleto.toUpperCase() : "";


console.log("========================================");
console.log("        CARTÃO DE VISITA DIGITAL        ");
console.log("========================================");
console.log(`Nome:    ${nomeMaiusculo}`);
console.log(`Cargo:   ${cargo}`);
console.log(`Empresa: ${empresa}`);
console.log(`E-mail:  ${email}`);
console.log("========================================");


alert("Seu cartão de visita foi gerado com sucesso! Verifique o console.");


const nomeProduto = prompt("Digite o nome do produto:");
const precoOriginal = parseFloat(prompt("Digite o preço original do produto (ex: 100.00):"));
const percentualDesconto = parseFloat(prompt("Digite o percentual de desconto (ex: 15 para 15%):"));


const valorDesconto = precoOriginal * (percentualDesconto / 100);
const precoFinal = precoOriginal - valorDesconto;


const formatarMoeda = (valor) => 
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const precoOriginalFmt = formatarMoeda(precoOriginal);
const valorDescontoFmt = formatarMoeda(valorDesconto);
const precoFinalFmt = formatarMoeda(precoFinal);


const resumo = `--- Resumo do Desconto ---
Produto: ${nomeProduto}
Preço Original: ${precoOriginalFmt}
Desconto (${percentualDesconto}%): ${valorDescontoFmt}
Preço Final: ${precoFinalFmt}`;


console.log(resumo);
alert(resumo);


const senha = prompt("Digite a senha que deseja analisar:") || "";


const tamanho = senha.length;
const temMaiuscula = /[A-Z]/.test(senha);
const temMinuscula = /[a-z]/.test(senha);


let classificacao = "Fraca";

if (tamanho >= 8 && temMaiuscula && temMinuscula) {
  classificacao = "Forte";
}


console.log("--- Análise de Força de Senha ---");
console.log(`Tamanho da senha: ${tamanho} caracteres`);
console.log(`Possui letra maiúscula: ${temMaiuscula ? "Sim" : "Não"}`);
console.log(`Possui letra minúscula: ${temMinuscula ? "Sim" : "Não"}`);
console.log(`Classificação final: ${classificacao}`);


alert(`Análise concluída!\nTamanho: ${tamanho} caracteres\nClassificação da senha: ${classificacao}`);