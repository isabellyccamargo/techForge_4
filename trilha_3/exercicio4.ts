abstract class Animal {
    private energia: number;

    constructor(energiaInicial: number = 50) {
        this.energia = energiaInicial;
    }

    getEnergia(): number {
        return this.energia;
    }

    setEnergia(valor: number): void {
        this.energia = valor;
    }

    comer(quantidade: number): void {
        this.energia += quantidade;
    }

    abstract statusEnergia(): void;
    abstract alimentar(): void;
}

class Leao extends Animal {
    alimentar(): void {
        console.log("O leão está caçando...");
        this.setEnergia(this.getEnergia() - 20);
        console.log("Energia após caçar: " + this.getEnergia());
        this.comer(40);
        console.log("Energia após comer: " + this.getEnergia());
    }

    statusEnergia(): void {
        console.log("A energia deste animal está em: " + this.getEnergia());
    }
}

class Passaro extends Animal {
    alimentar(): void {
        console.log("O pássaro está se alimentando...");
        this.comer(15);
    }

    statusEnergia(): void {
        console.log("A energia deste animal está em: " + this.getEnergia());
    }
}

const leao = new Leao(100);
const passaro = new Passaro(30);

leao.alimentar();
leao.statusEnergia();

passaro.alimentar();
passaro.statusEnergia();
