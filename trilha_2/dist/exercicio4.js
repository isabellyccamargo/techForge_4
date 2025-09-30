var Temperatura = /** @class */ (function () {
    function Temperatura(valor) {
        this.valor = valor;
    }
    Temperatura.prototype.toFahrenheit = function () {
        return this.valor * 9 / 5 + 32;
    };
    Temperatura.prototype.toKelvin = function () {
        return this.valor + 273.15;
    };
    return Temperatura;
}());
var temp = new Temperatura(25);
console.log("Celsius:" + temp.valor);
console.log("Fahrenheit:" + temp.toFahrenheit());
console.log("Kelvin:" + temp.toKelvin());
