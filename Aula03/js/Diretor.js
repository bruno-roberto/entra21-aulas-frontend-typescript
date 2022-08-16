// Diretor
// Atributos
// nome:string
// idade:number
// cidade:string
// professores:Array<Professor>
// Métodos
// apresentar
// relatorioDesenpenho
export class Diretor {
    //constructor
    constructor(nome, idade, cidade, professores) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.professores = professores;
    }
    //methods
    apresentar() {
        return `O diretor ${this.nome}, possui ${this.idade} anos e mora na cidade de ${this.cidade}. Ele é responsável por administrar os ${this.professores}`;
    }
    relatorioDesempenho() {
        return;
    }
}
