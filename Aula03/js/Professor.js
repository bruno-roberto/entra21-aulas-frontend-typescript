// Professor
// Atributos
// nome:string
// idade:number
// cidade:string
// alunos:Array<Aluno>
// Métodos
// apresentar
// gerarBoletins
import { Pessoa } from "./Pessoa.js";
export class Professor extends Pessoa {
    // Constructor 
    constructor(nome, idade, cidade, alunos) {
        super(nome, idade, cidade);
        alunos = this.alunos;
    }
    apresentar() {
        return `O professor chamado ${this.nome}, com idade ${this.idade}, é morador da cidade ${this.cidade} e tem os alunos ${this.alunos}`;
    }
    gerarBoletins() {
        let boletim = [];
        this.alunos.forEach(aluno => {
            boletim.push(aluno.calcularMedia());
        });
        return boletim;
    }
}
