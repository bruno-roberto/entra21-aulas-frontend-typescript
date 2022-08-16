export class Vendedor {
    //Constructor
    constructor(nome, idade, comissao, vendasRealizadas) {
        this.nome = nome;
        this.idade = idade;
        this.comissao = comissao;
        this.vendasRealizadas = vendasRealizadas;
    }
    //Metodos
    apresentar() {
        return `O vendedor ${this.nome}, que possui ${this.idade} anos, durante o processo de vendas realizou ${this.vendasRealizadas} vendas e portanto obteve ${this.comissao} de comissão.`;
    }
    rendimento() {
        let rendimento = this.comissao * this.vendasRealizadas;
        return rendimento;
    }
}
