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
var Animal = /** @class */ (function () {
    function Animal(energiaInicial) {
        if (energiaInicial === void 0) { energiaInicial = 50; }
        this.energia = energiaInicial;
    }
    Animal.prototype.getEnergia = function () {
        return this.energia;
    };
    Animal.prototype.setEnergia = function (valor) {
        this.energia = valor;
    };
    Animal.prototype.comer = function (quantidade) {
        this.energia += quantidade;
    };
    return Animal;
}());
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leao.prototype.alimentar = function () {
        console.log("O leão está caçando...");
        this.setEnergia(this.getEnergia() - 20);
        console.log("Energia após caçar: " + this.getEnergia());
        this.comer(40);
        console.log("Energia após comer: " + this.getEnergia());
    };
    Leao.prototype.statusEnergia = function () {
        console.log("A energia deste animal está em: " + this.getEnergia());
    };
    return Leao;
}(Animal));
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Passaro.prototype.alimentar = function () {
        console.log("O pássaro está se alimentando...");
        this.comer(15);
    };
    Passaro.prototype.statusEnergia = function () {
        console.log("A energia deste animal está em: " + this.getEnergia());
    };
    return Passaro;
}(Animal));
var leao = new Leao(100);
var passaro = new Passaro(30);
leao.alimentar();
leao.statusEnergia();
passaro.alimentar();
passaro.statusEnergia();
