

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

export class Aluno{
    //Atributos 
    public nome: string
    public idade: number 
    public cidade: string
    private notas: Array<number>
    
    
    //Constructor 
    constructor (
        nome:string,
        idade:number,
        cidade:string,
        notas:Array<number>,
    
    
    ){
        nome = this.nome
        idade = this.idade
        cidade = this.cidade
        notas = this.notas
    
    
    }

    
    public Apresentar():string {
        return `O aluno chamado ${this.nome}, com ${this.idade} anos, é morador da cidade de ${this.cidade} e conseguiu as notas ${this.notas}`

    }

    public calcularMedia(): number{
        

        return this.notas.reduce((anterior,posterior) => posterior=anterior,0) / this.notas.length
    }
    
    
    
    }
    