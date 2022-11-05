const lista = [10, 6.5, 8, 7.5];
let media = 0;

lista.forEach(element => {
    media += element;
});
console.log('A media é: ' + media/lista.length); 