abstract class Pagamento {

    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    abstract processar(): void;

}

class PagamentoCartao extends Pagamento {

    numeroCartao: string;

    constructor(numeroCartao: string, valor: number) {

        super(valor);
        this.numeroCartao = numeroCartao;

    }

    processar(): void {
        console.log("Processando pagamento com cartão...");

        if (!this.validaCartao()) {
            console.log("Número do cartão inválido!");
            return;
        }

        console.log("Pagamento com cartão, no valor R$" + this.valor + " realizado com sucesso!");
    }

    private validaCartao(): boolean {

        const regex = /^\d{16}$/;
        return regex.test(this.numeroCartao);

    }
}

class PagamentoBoleto extends Pagamento {

    constructor(valor: number) {

        super(valor);

    }

    processar(): void {
        console.log("Processando pagamento com boleto...");

        let numeroBoleto = this.gerarCodigoBoleto();
        console.log("Boleto " + numeroBoleto + " no valor de R$" + this.valor + " processado com sucesso!")

    }

    gerarCodigoBoleto(): string {
        let codigo = "";
        for (let i = 0; i < 47; i++) {
            codigo += Math.floor(Math.random() * 10);
        }
        return codigo;
    }
}

const cartao = new PagamentoCartao("1234567812345678", 250.00);
cartao.processar();

const boleto = new PagamentoBoleto(500.00);
boleto.processar();