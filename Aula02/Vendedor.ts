export class Vendedor{
 
    //Atributos

    public nome:string 
    public idade: number 
    public comissao: number
    public vendasRealizadas: number

    //Constructor

    constructor(
        nome: string,
        idade: number,
        comissao: number,
        vendasRealizadas: number

    ){
        this.nome = nome
        this.idade = idade
        this.comissao = comissao
        this.vendasRealizadas = vendasRealizadas


    }

    //Metodos
    public apresentar():string{

        return `O vendedor ${this.nome}, que possui ${this.idade} anos, durante o processo de vendas realizou ${this.vendasRealizadas} vendas e portanto obteve ${this.comissao} de comissão.`
    } 

    public rendimento():number{
        let rendimento = this.comissao * this.vendasRealizadas
        return rendimento
    }

}