const texto: string = 'Hello, World!';
const numero: number = 5;
const maiorIdade: boolean = true;
const frutas: String[] = ['Jaca', 'Fruta do Conde', 'Cajá'];

function soma(numero1: number, numero2:number): number {
    return numero1 + numero2;
}

console.log("A soma dos numeros " , numero , " e " , numero , " é " , soma(numero, numero));

type Endereco = {
    rua: string,
    numero: number,
    cidade: string
}

function exibirInformacoesEndereco (endereco: Endereco): String {
    return `${endereco.rua}, ${endereco.numero} - ${endereco.cidade}`;
}

console.log(exibirInformacoesEndereco({rua: 'Jasmim', numero: 120, cidade: 'Araruna'}));