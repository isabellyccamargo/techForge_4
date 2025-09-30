var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.calcularValorTotal = function () {
        var qtd = this.preco * this.quantidade;
        console.log("A quantidade em estoque é de " + this.quantidade);
        console.log("O valor total é de R$ " + qtd);
        return qtd;
    };
    return Produto;
}());
var exemplo = new Produto("Camiseta", 50, 3);
exemplo.calcularValorTotal();
