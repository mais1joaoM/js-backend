const notasAluno = [5, 6, 7, 8];

let somaNotas = 0;

for ( let nota of notasAluno){
    somaNotas += nota;
}

const media = somaNotas / notasAluno.length;

console.log(media)