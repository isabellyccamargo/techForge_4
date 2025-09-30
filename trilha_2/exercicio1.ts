class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
        console.log("Depósito de R$" + valor + " Saldo atual: R$" + this.saldo);
    }

    sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$" + valor + " Saldo atual: R$ " + this.saldo);
        } else {
            console.log("Saldo insuficiente.");
        }
    }
}

const minhaConta = new ContaBancaria("Isabelly", 1000);
minhaConta.depositar(200); 
minhaConta.sacar(500);    
minhaConta.sacar(800);    
