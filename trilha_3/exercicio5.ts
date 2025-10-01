abstract class Funcionario {

    private nome: string;
    private salario: number;

    constructor (nome:string, salario:number) {
        this.nome = nome;
        this.salario = salario;
    }

    getNome(): string{
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getSalario(): number{
        return this.salario;
    }

    setSalario(salario: number): void {
        this.salario = salario;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(f => {
        const salarioFinal = f.getSalario() + f.calcularBonus();
        console.log(`${f.getNome()} - Salário Final: R$ ${salarioFinal.toFixed(2)}`);
    });
}

const funcionarios: Funcionario[] = [
    new Gerente("Ana", 5000),
    new Operario("Carlos", 3000),
    new Operario("Marina", 2500)
];

calcularSalarioComBonus(funcionarios);