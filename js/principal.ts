let nome:string="Bruno"

let idade:number=23

console.log(nome,idade);
$("<p>", {
    text:`Oi ${nome} vc tem ${idade} anos`
}).appendTo("body")

function teste ():number {
return 0;
}

function dados(nome: string, idade: number): boolean {
    if (nome == "Bruno" && idade==23) {
        return true;
    }else {
        return false;
    }
}
