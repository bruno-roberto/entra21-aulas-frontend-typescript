export class Professor {
    // Construtor
    constructor(nome, idade, disciplinas, valorHora, quantidadeHora) {
        this.nome = nome;
        this.idade = idade;
        this.disciplinas = disciplinas;
        this.valorHora = valorHora;
        this.quantidadeHora = quantidadeHora;
    }
    // metodos 
    apresentar() {
        return `Apresentação: O professor que se chama ${this.nome}, tem a idade ${this.idade}. Atualmente da aula de ${this.disciplinas}, totalizando ${this.quantidadeHora} horas ministradas. Vale ressaltar que o valor da hora é de ${this.valorHora} reais.`;
    }
    calcularRendimento() {
        let rendimento = this.valorHora * this.quantidadeHora;
        return rendimento;
    }
}
