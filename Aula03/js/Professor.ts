// Professor
// Atributos
// nome:string
// idade:number
// cidade:string
// alunos:Array<Aluno>
// Métodos
// apresentar
// gerarBoletins

import { Aluno } from "./Aluno.js"
import { Pessoa } from "./Pessoa.js"




export class Professor extends Pessoa{
// Atributos 


public alunos: Array<Aluno>

// Constructor 

constructor(
    nome:string,
    idade:number,
    cidade:string,
    alunos: Array<Aluno>
){

    super (nome,idade,cidade)
    alunos = this.alunos


}

public apresentar():string {
    return `O professor chamado ${this.nome}, com idade ${this.idade}, é morador da cidade ${this.cidade} e tem os alunos ${this.alunos}`
}

public gerarBoletins():Array<number>{

    let boletim:Array<number> = []

    this.alunos.forEach(aluno => {
        boletim.push(aluno.calcularMedia())
    });

    return boletim
}

}