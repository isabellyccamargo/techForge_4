var Agenda = /** @class */ (function () {
    function Agenda() {
        this.compromissos = [];
    }
    Agenda.prototype.adicionar = function (compromisso) {
        this.compromissos.push(compromisso);
    };
    Agenda.prototype.listar = function () {
        console.log(this.compromissos);
    };
    return Agenda;
}());
// Exemplo de uso
var minhaAgenda = new Agenda();
minhaAgenda.adicionar("Reunião às 10h");
minhaAgenda.adicionar("Dentista às 15h");
minhaAgenda.listar();
