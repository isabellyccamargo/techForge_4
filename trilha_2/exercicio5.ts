class Agenda {
    compromisso: string[];

    constructor(compromisso: string[]) {
        this.compromisso = [];
    }

    adicionar(compromisso: string): void {
        this.compromisso.push(compromisso);
    }


    listar(): void {
        console.log(this.compromisso);
    }

}

const minhaAgenda = new Agenda();
minhaAgenda.adicionar("Reunião às 10h");
minhaAgenda.adicionar("Dentista às 15h");
minhaAgenda.listar();