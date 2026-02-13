/**
 * TIPOS DE DECLARACAO
 * 
 * var - Pode ser alterada dentro e fora do escopo
 * let - pode ser alterada dentro do escolo e fora apenas se for criada fora do escopo, se for criada dentro do escopo, só pode ser alterada dentro do escopo.
 * const - valor constante, nao pode ser alterado // uma const nao pode ser criada sem um parametro.
 */

let estudante = 'joao';
const professor = 'marcos';

estudante = 'Mirela'; //modifica o valor da variavel estudante.

console.log(`Estudante: ${estudante} - Professor: ${professor}`)