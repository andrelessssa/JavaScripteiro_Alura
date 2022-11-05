const lista = [10, 6.5, 8, 7.5, 10,20,10];
let media = 0;


for (var i = 0; i < lista.length; i++){
    media += lista[i];
}
console.log('A media das notas é: ' + media/lista.length  + ' e São ' + lista.length + " notas.");    