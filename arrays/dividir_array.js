const listaEstudantes = ['joao', 'marcos', 'mirela', 'joana'];
const metade = listaEstudantes.length/2;

const sala1 = listaEstudantes.slice(0, metade);
const sala2 = listaEstudantes.slice(metade, listaEstudantes.length)

console.log(sala1)
console.log(sala2)