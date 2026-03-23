const alunos = ['joao','marcos'];
const medias = [10, 9];


const lista = [alunos, medias];

function buscaAluno(aluno){
    if (lista[0].includes(aluno)){

        const [alunos, media] = lista;

        const ind = alunos.indexOf(aluno);
        const mediaAluno = media[ind];
        console.log(`A media do aluno ${aluno} é ${mediaAluno}`);
    }else{
        console.log('Estudante nao encontrado na lista.');
    }
}

buscaAluno('joao');
buscaAluno('mirela');