const nomeEstudante = 'Joao';
const responsavel = 'Mirela';

const nota1 = 5;
const nota2 = 6;
const nota3 = 10;
const nota4 = 10;

const media = (nota1 + nota2 + nota3 + nota4) / 4;

/**
 * Executando testes para entender o funcionamento das arrow functions
 * mediaAf vai receber o retorno da expressao.
 * depois do = e entre os parenteses sao os parametros da funcao. (nota1, nota2, nota3, nota4)
 * o que esta depois da => é a expressao que será executada.
 */

const mediaAf = (nota1, nota2, nota3, nota4) => (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`Media: ${media} - Media Arrow Function: ${mediaAf(nota1, nota2, nota3, nota4)}`);

console.log(`Sua media é ${media}`);

const status = media >= 7 ? 'APROVADO' : 'REPROVADO';
const congrats = status === 'APROVADO' ? 'Parabéns' : 'Sinto muito';

console.log(`${congrats}, ${nomeEstudante}! Você esta ${status}`);