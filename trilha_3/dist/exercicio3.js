var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pagamento = /** @class */ (function () {
    function Pagamento(valor) {
        this.valor = valor;
    }
    return Pagamento;
}());
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(numeroCartao, valor) {
        var _this = _super.call(this, valor) || this;
        _this.numeroCartao = numeroCartao;
        return _this;
    }
    PagamentoCartao.prototype.processar = function () {
        console.log("Processando pagamento com cartão...");
        if (!this.validaCartao()) {
            console.log("Número do cartão inválido!");
            return;
        }
        console.log("Pagamento com cartão, no valor R$" + this.valor + " realizado com sucesso!");
    };
    PagamentoCartao.prototype.validaCartao = function () {
        var regex = /^\d{16}$/;
        return regex.test(this.numeroCartao);
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto(valor) {
        return _super.call(this, valor) || this;
    }
    PagamentoBoleto.prototype.processar = function () {
        console.log("Processando pagamento com boleto...");
        var numeroBoleto = this.gerarCodigoBoleto();
        console.log("Boleto " + numeroBoleto + " no valor de R$" + this.valor + " processado com sucesso!");
    };
    PagamentoBoleto.prototype.gerarCodigoBoleto = function () {
        var codigo = "";
        for (var i = 0; i < 47; i++) {
            codigo += Math.floor(Math.random() * 10);
        }
        return codigo;
    };
    return PagamentoBoleto;
}(Pagamento));
var cartao = new PagamentoCartao("1234567812345678", 250.00);
cartao.processar();
var boleto = new PagamentoBoleto(500.00);
boleto.processar();
