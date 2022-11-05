const nomes = ['andre', 'andre2', 'andre3', 'andre4','andre6'];
const notas = [7, 4.5, 8, 7.5, 2];



const reprovados = nomes.filter((aluno, indice) => notas
[indice] < 5)
console.log(reprovados)