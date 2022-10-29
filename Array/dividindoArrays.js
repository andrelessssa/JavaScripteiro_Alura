const nomes = ['André', 'André 2', 'André 3', 'André 4', 'André 5' , 'André 6', 'André 7',
    'André 8', 'André 9', 'André 10', 'André 11', 'André 12', 'André 13', 'André14', 'André 15',
    'André 16', 'André 17', 'André 18', 'André 19', 'André 20','André 21'];

const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2);

console.log(`Alunos da sala 1 : ${sala1}`);
console.log(`Alunos da sala 2 : ${sala2}`); 