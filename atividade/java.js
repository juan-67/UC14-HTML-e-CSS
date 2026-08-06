function verificarSituacaoAluno(nota1, nota2) {
   
    const media = (nota1 + nota2) / 2;

    console.log(`Média: ${media.toFixed(1)}`);

    
    if (media < 4) {
        return "REPROVADO";
    } else if (media >= 7) {
        return "APROVADO";
    } else {

        return "RECUPERAÇÃO";
    }
}


const n1 = 6.5;
const n2 = 7.5;

const situacao = verificarSituacaoAluno(n1, n2);
console.log(`Situação do aluno: ${situacao}`);