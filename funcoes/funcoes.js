
//DECLARACAO DE FUNCAO
function exibirEstudante(nome){
    console.log(nome);
}

exibirEstudante('joao');

//EXPRESSAO DE FUNCAO
const estudanteReprovou = function (notaFinal, faltas){
    if(notaFinal < 7 && faltas > 4){
        return true;
    }else{
        return false;
    }
}

if(estudanteReprovou(10,2)){
    console.log('REPROVADO')
}else{
    console.log('APROVADO')
}

//ARROW FUNCTIONS
const boasVindas = (nome) => `Boas-vindas, ${nome}`; //forma sem chaves e sem return
const boasVindas2 = (nome) => {return `Boas-vindas2, ${nome}`}

console.log(boasVindas2('Mirela'))
console.log(boasVindas('Joao'))

