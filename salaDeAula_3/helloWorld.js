var texto = 'Hello, World!';
var numero = 5;
var maiorIdade = true;
var frutas = ['Jaca', 'Fruta do Conde', 'Cajá'];
function soma(numero1, numero2) {
    return numero1 + numero2;
}
console.log("A soma dos numeros ", numero, " e ", numero, " é ", soma(numero, numero));
function exibirInformacoesEndereco(endereco) {
    return "".concat(endereco.rua, ", ").concat(endereco.numero, " - ").concat(endereco.cidade);
}
console.log(exibirInformacoesEndereco({ rua: 'Jasmim', numero: 120, cidade: 'Araruna' }));
