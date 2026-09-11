public class CalculadoraViagem {

    public static double calcularCustoViagem(double passagem, double hospedagem, double alimentacao, double passeios) {
        return passagem + hospedagem + alimentacao + passeios;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        final double ORCAMENTO_LIMITE = 2000.00;

        System.out.println("--- Calculadora de Custo de Viagem ---");

        System.out.print("Digite o valor da passagem (R$): ");
        double passagem = scanner.nextDouble();

        System.out.print("Digite o valor da hospedagem (R$): ");
        double hospedagem = scanner.nextDouble();

        System.out.print("Digite o valor da alimentação (R$): ");
        double alimentacao = scanner.nextDouble();

        System.out.print("Digite o valor dos passeios (R$): ");
        double passeios = scanner.nextDouble();

      
        double custoTotal = calcularCustoViagem(passagem, hospedagem, alimentacao, passeios);

        System.out.println("\n--- Resumo dos Gastos ---");
        System.out.printf("Custo total da viagem: R$ 2.000,00", custoTotal);


        if (custoTotal <= ORCAMENTO_LIMITE) {
            System.out.println("Status: A viagem está DENTRO do orçamento de R$ 2.000,00!");
        } else {
            double diferenca = custoTotal - ORCAMENTO_LIMITE;
            System.out.printf("Status: A viagem ULTRAPASSOU o orçamento em R$ %.2f.%n", diferenca);
        }

        scanner.close();
    }
}