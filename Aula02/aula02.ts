import { Aluno } from "./Aluno.js";
import { Animal } from "./Animal.js";


console.log("Aula 02 Funcionou");

let animal1:Animal=new Animal("drosofila", "mosca", 0.5, ["ar","lixo","comida"])
console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);



animal1.nome="Cachorro"
animal1.peso=2.5
animal1.habitat[0]="jardim"
animal1.setEspecie="lupuscaninos"


console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);

let animal2:Animal=new Animal("feliscatus", "gato", 5.00, ["mesa", "sala", "rua"])

console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[0]);
console.log(animal2.getEspecie);

animal2.nome="Onça"
animal2.peso=90
animal2.habitat=["selva","pantanal","amazonia"]
animal2.setEspecie="Panthera onca"

console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat);
console.log(animal2.getEspecie);

let bruno: Aluno = new Aluno("Bruno Roberto", 23, [10, 10 ,10])

console.log(bruno);

console.log(bruno.nome);
console.log(bruno.idade);






