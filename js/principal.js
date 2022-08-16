let nome = "Bruno";
let idade = 23;
console.log(nome, idade);
$("<p>", {
    text: `Oi ${nome} vc tem ${idade} anos`
}).appendTo("body");
function teste() {
    return 0;
}
function dados(nome, idade) {
    if (nome == "Bruno" && idade == 23) {
        return true;
    }
    else {
        return false;
    }
}
