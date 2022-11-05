const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSalas(notasDasSalas) {
    const somaDasNotas = notasDasSalas.reduce((acum, atual) =>
    atual + acum, 0)
    return somaDasNotas/notasDasSalas.length
    
}



console.log('A media da sala JS é ' + mediaSalas(salaJS));
console.log('A media da sala JAVA é ' + mediaSalas(salaJava));
console.log('A media da sala Python é ' + mediaSalas(salaPython));



   