const notasAluno = [5, 6, 7, 8];

let somaNotas = 0;

for (let i = 0; i < notasAluno.length; i++){
    somaNotas += notasAluno[i];
}

const media = somaNotas/notasAluno.length;

console.log(`Media: ${media}`)