import { Aluno } from "../Aluno.js";
import { Diretor } from "./Diretor.js";
import { Professor } from "./Professor.js";

let fulano: Aluno = new Aluno("Bruno", 23, "Urubici", [10, 8, 9.5])

let cilano: Aluno = new Aluno("Oliota", 30, "Blumenau", [10,8,10] )

console.log(
fulano.nome,
fulano.idade,
fulano.cidade);

console.log();

let professor: Professor = new Professor("Oliota", 40, "Blumenau", [ ])
let professora: Professor = new Professor("Isabelle", 25,"Blumenai", [])

console.log(
    professor.nome,
    professor.idade,
    professor.cidade
);

console.log(
    professora.nome,
    professora.idade,
    professora.cidade
);


let diretor: Diretor = new Diretor("Aurélio", 50, "Blumenau", [])

console.log(
    diretor.nome,
    diretor.idade,
    diretor.cidade
);
