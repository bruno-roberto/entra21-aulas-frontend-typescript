export class Professor{
// Atributos

public nome: string 
public idade: number
public disciplinas: Array<string>
public valorHora: number
public quantidadeHora: number

// Construtor
constructor(
    nome: string,
    idade:number,
    disciplinas: Array<string>,
    valorHora: number,
    quantidadeHora: number,
){
    this.nome = nome
    this.idade = idade
    this.disciplinas = disciplinas
    this.valorHora = valorHora
    this.quantidadeHora = quantidadeHora

}

// metodos 

public apresentar (): string {
    return `Apresentação: O professor que se chama ${this.nome}, tem a idade ${this.idade}. Atualmente da aula de ${this.disciplinas}, totalizando ${this.quantidadeHora} horas ministradas. Vale ressaltar que o valor da hora é de ${this.valorHora} reais.`

}

public calcularRendimento ():number{
    let rendimento: number = this.valorHora * this.quantidadeHora 
    return rendimento
}


}