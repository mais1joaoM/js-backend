const n1 = 10;
const n2 = 6.5;
const n3 = 8;
const n4 = 7.5;

const notas = [10, 6.5, 8, 7.5];


const media = (notas[0]+ notas[1]+ notas[2]+ notas[3]) / notas.length;

console.log(media)

//fazendo isso usando arrow functions, somente para treinar.
//foi executado o mesmo processo acima, porém utilizando arrow functions.
const calculaMediaAF = (nota1, nota2, nota3, nota4) => { return (nota1+nota2+nota3+nota4)/4 }
console.log(calculaMediaAF(5,5,5,5));



