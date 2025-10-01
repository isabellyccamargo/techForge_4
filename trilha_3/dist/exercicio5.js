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
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    Funcionario.prototype.setSalario = function (salario) {
        this.salario = salario;
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gerente.prototype.calcularBonus = function () {
        return this.getSalario() * 0.10;
    };
    return Gerente;
}(Funcionario));
var Operario = /** @class */ (function (_super) {
    __extends(Operario, _super);
    function Operario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Operario.prototype.calcularBonus = function () {
        return this.getSalario() * 0.05;
    };
    return Operario;
}(Funcionario));
function calcularSalarioComBonus(funcionarios) {
    funcionarios.forEach(function (f) {
        var salarioFinal = f.getSalario() + f.calcularBonus();
        console.log("".concat(f.getNome(), " - Sal\u00E1rio Final: R$ ").concat(salarioFinal.toFixed(2)));
    });
}
var funcionarios = [
    new Gerente("Ana", 5000),
    new Operario("Carlos", 3000),
    new Operario("Marina", 2500)
];
calcularSalarioComBonus(funcionarios);
