const mediaAlunos = [5, 3, 6, 8, 9, 10, 9, 8, 5];

for(let media of mediaAlunos){
    if (media >= 8){
        console.log('Parabens pela media do semestre! Ótimo trabalho!');
    }else if (media < 5){
        console.log('Sua nota nao foi o suficiente para passar nessa materia.')
    }else{
        console.log('Nota suficiente para passar, porém se esforce mais no proximo semestre.')
    }
}