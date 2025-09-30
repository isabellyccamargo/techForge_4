class Temperatura {
    valor: number;

    constructor (valor: number) {
        this.valor = valor;
    }

    toFahrenheit(): number {
    return this.valor * 9 / 5 + 32;
  }

  toKelvin(): number {
    return this.valor + 273.15;
  }

}

const temp = new Temperatura(25);
console.log("Celsius:" + temp.valor);
console.log("Fahrenheit:" + temp.toFahrenheit());
console.log("Kelvin:" + temp.toKelvin());