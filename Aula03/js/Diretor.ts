// Diretor
// Atributos
// nome:string
// idade:number
// cidade:string
// professores:Array<Professor>
// Métodos
// apresentar
// relatorioDesenpenho

import { Professor } from "./Professor"



export class Diretor{
    //Atributos
    public nome:string
    public idade:number
    public cidade:string
    public professores:Array<Professor>

    //constructor
    constructor(
        nome:string,
        idade:number,
        cidade:string,
        professores:Array<Professor>

    ){
        this.nome=nome
        this.idade=idade
        this.cidade=cidade
        this.professores=professores

    }

    //methods

    public apresentar():string{
        return `O diretor ${this.nome}, possui ${this.idade} anos e mora na cidade de ${this.cidade}. Ele é responsável por administrar os ${this.professores}`

    }


    public relatorioDesempenho():string{
        return
    }
    


}