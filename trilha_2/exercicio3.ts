class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorTotal(): number {
        let qtd: number = this.preco * this.quantidade;
        console.log("A quantidade em estoque é de " + this.quantidade);
        console.log("O valor total é de R$ " + qtd);
        return qtd;
    }
}

const exemplo = new Produto("Camiseta", 50, 3);
exemplo.calcularValorTotal();
