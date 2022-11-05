const alunos = ['andre1', 'andre2', 'andre3', 'andre4', 'andre5'];
const mediasAlunos = [10, 7, 2, 8, 5];

let listaDeNotasAlunos = [alunos, mediasAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasAlunos[0].indexOf(nomeDoAluno)
        
        return listaDeNotasAlunos[0][indice] + ' sua meia é '
        + listaDeNotasAlunos[1][indice]
        
    } else {
        return "Aluno não está na lista";
    }
}
console.log(exibeNomeNota("andre5"));

