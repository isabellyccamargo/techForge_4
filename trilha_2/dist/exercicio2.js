"use strict";
class Livro {
    constructor(titulo, autor, paginas, lido = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    marcarComoLido() {
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }
}
const meuLivro = new Livro("1984", "George Orwell", 328);
console.log(meuLivro.lido);
meuLivro.marcarComoLido();
console.log(meuLivro.lido);
