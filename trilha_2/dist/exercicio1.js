"use strict";
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log("Depósito de R$" + valor + " Saldo atual: R$" + this.saldo);
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$" + valor + " Saldo atual: R$ " + this.saldo);
        }
        else {
            console.log("Saldo insuficiente.");
        }
    }
}
const minhaConta = new ContaBancaria("Isabelly", 1000);
minhaConta.depositar(200);
minhaConta.sacar(500);
minhaConta.sacar(800);
