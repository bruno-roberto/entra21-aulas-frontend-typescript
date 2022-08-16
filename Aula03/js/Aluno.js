// Professor
// Atributos
// nome:string
// idade:number
// cidade:string
// alunos:Array<Aluno>
// Métodos
// apresentar
// gerarBoletins
// Diretor
// Atributos
// nome:string
// idade:number
// cidade:string
// professores:Array<Professor>
// Métodos
// apresentar
// relatorioDesenpenho
export class Aluno {
    //Constructor 
    constructor(nome, idade, cidade, notas) {
        nome = this.nome;
        idade = this.idade;
        cidade = this.cidade;
        notas = this.notas;
    }
    Apresentar() {
        return `O aluno chamado ${this.nome}, com ${this.idade} anos, é morador da cidade de ${this.cidade} e conseguiu as notas ${this.notas}`;
    }
    calcularMedia() {
        return this.notas.reduce((anterior, posterior) => posterior = anterior, 0) / this.notas.length;
    }
}
